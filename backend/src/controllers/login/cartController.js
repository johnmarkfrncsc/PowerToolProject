import Cart from "../../models/Cart.js";
import Item from "../../models/Item.js";
import mongoose from "mongoose";

const getCart = async (req, res) => {
  const { userId } = req.params;
  try {
    const cart = await Cart.findOne({ userId }).populate("items.productId");
    if (!cart) {
      return res
        .status(404)
        .json({ success: false, message: "Cart not found" });
    }

    const items = cart.items.map((item) => {
      const product = item.productId;
      return {
        _id: item._id,
        quantity: item.quantity,
        product: product
          ? {
              _id: product._id,
              name: product.name,
              brand: product.brand,
              price: product.price,
              category: product.category,
              image: product.image,
              description: product.description,
            }
          : null,
      };
    });

    // Calculate total
    const total = cart.items.reduce((sum, item) => {
      // item.productId may be null if not populated
      const price = item.productId?.price || 0;
      return sum + price * item.quantity;
    }, 0);

    res.json({
      success: true,
      cart,
      total,
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

const addToCart = async (req, res) => {
  const { userId, productId, quantity, price } = req.body;
  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(400).json({ success: false, error: "Invalid productId" });
  }
  try {
    let cart = await Cart.findOne({ userId });
    const productObjectId = new mongoose.Types.ObjectId(productId);
    if (!cart) {
      cart = new Cart({
        userId,
        items: [{ productId: productObjectId, quantity, price }],
      });
    } else {
      const item = cart.items.find(
        (i) => i.productId && i.productId.equals(productObjectId)
      );
      if (item) {
        item.quantity += quantity;
      } else {
        cart.items.push({ productId: productObjectId, quantity, price });
      }
    }
    await cart.save();
    res.json({ success: true, cart });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export default { addToCart, getCart };
