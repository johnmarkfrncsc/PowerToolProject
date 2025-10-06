import mongoose from "mongoose";

const CartItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Item",
    required: true,
  },
  quantity: { type: Number, default: 1 },
  price: { type: Number },
});

const CartSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: [CartItemSchema],
});

const Cart = mongoose.model("Cart", CartSchema);
export default Cart;
