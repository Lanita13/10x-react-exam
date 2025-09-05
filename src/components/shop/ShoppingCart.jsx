import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ShoppingCart() {
  const navigate = useNavigate();
  const location = useLocation();
  const cartItem = location.state?.cartItem;

  if (!cartItem) {
    return <div className="p-10 text-center">Your cart is empty</div>;
  }

  const [quantity, setQuantity] = useState(cartItem.quantity);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleCheckout = () => {
    navigate("/checkout", {
      state: {
        cartItem: {
          ...cartItem,
          quantity,
        },
      },
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Title */}
      <h1 className="text-3xl font-semibold text-center mt-10 mb-2">Shopping Cart</h1>

      {/* Product Row */}
      <div className="border-t border-gray-300 py-6 grid grid-cols-4 items-center">
        <div className="flex gap-4 items-center">
          <img
            src={cartItem.image}
            alt={cartItem.name}
            className="w-24 h-28 object-cover"
          />
          <div>
            <h3 className="font-semibold">{cartItem.name}</h3>
            <button className="text-sm text-gray-500 underline hover:text-black">
              Remove
            </button>
          </div>
        </div>

        <div className="text-sm font-medium">${cartItem.price}</div>

        {/* Quantity control with improved design */}
        <div className="flex items-center justify-between border border-gray-300 rounded-md">
          <button
            onClick={handleDecrease}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Reduce quantity"
          >
            -
          </button>
          <span className="text-center text-lg font-medium text-gray-600">
            {quantity}
          </span>
          <button
            onClick={handleIncrease}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        <div className="text-sm font-medium">
          ${(cartItem.price * quantity).toFixed(2)}
        </div>
      </div>

      <div className="flex flex-col items-end gap-4 border-t border-gray-300 pt-6">
        <p className="font-semibold">
          Subtotal <span className="ml-10">${(cartItem.price * quantity).toFixed(2)}</span>
        </p>
        <button
          onClick={handleCheckout}
          className="bg-black text-white px-20 py-3 rounded-md shadow-md"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}