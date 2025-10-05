import React from "react";
import { useCart } from "../components/cart/CartContext";

const CartPage = () => {
  const { cart, updateQuantity } = useCart();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <div className="bg-gray-500 flex flex-col md:flex-row gap-10 justify-between p-8">
        <div className="bg-amber-800 p-4 max-w-3xl w-full space-y-4">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item, idx) => (
              <div
                key={idx}
                className="border p-4 rounded flex items-center gap-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div>
                  <h2 className="font-bold">{item.name}</h2>
                  <p>
                    <strong>Item Code:</strong> {item.ItemCode}
                  </p>
                  <p>
                    <strong>Category:</strong> {item.category}
                  </p>
                  <p className="font-medium">
                    <strong>Price:</strong> ₱{item.price}.00
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      className="px-2 py-1 bg-gray-200 rounded"
                      onClick={() => updateQuantity(item._id, -1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="px-2 py-1 bg-gray-200 rounded"
                      onClick={() => updateQuantity(item._id, 1)}
                    >
                      +
                    </button>
                  </div>
                  <p className="mt-2">
                    <strong>Subtotal:</strong> ₱{item.price * item.quantity}.00
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
        <div className=" bg-red-800">
          {cart.length > 0 && (
            <div className="mt-8 text-xl font-bold">
              Cart Total: ₱{subtotal}.00
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartPage;
