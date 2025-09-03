import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../common/Logo";
import { Search, User, Star, ShoppingCart as CartIcon } from "lucide-react";

import blackdress from "../../assets/img/Black-Dress.png";

export default function ShoppingCart() {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate(); 

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Header */}
      <header className="flex justify-between items-center py-6 border-b border-gray-200">
        <Logo />
        <nav className="flex gap-8 text-gray-700">
          <Link to="/home">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/products">Products</Link>
          <Link to="/pages">Pages</Link>
        </nav>
        <div className="flex gap-4">
          <Search className="w-5 h-5 cursor-pointer" />
          <User className="w-5 h-5 cursor-pointer" />
          <Star className="w-5 h-5 cursor-pointer" />
          <CartIcon className="w-5 h-5 cursor-pointer" />
        </div>
      </header>

      {/* Page Title */}
      <h1 className="text-3xl font-semibold text-center mt-10 mb-2">
        Shopping Cart
      </h1>

      {/* Breadcrumb */}
      <div className="text-center text-gray-500 py-6">
        Home <span className="mx-2">/</span>
        <span className="text-black">Your Shopping Cart</span>
      </div>

      {/* Table Header */}
      <div className="border-t border-gray-300">
        <div className="grid grid-cols-4 text-left py-3 font-semibold text-sm">
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Total</span>
        </div>

        {/* Product Row */}
        <div className="border-t border-gray-300 py-6 grid grid-cols-4 items-center">
          {/* Product */}
          <div className="flex gap-4 items-center">
            <img
              src={blackdress}
              alt="Mini Dress"
              className="w-24 h-28 object-cover"
            />
            <div>
              <h3 className="font-semibold">Mini Dress With Ruffled Straps</h3>
              <p className="text-sm text-gray-500">Color : Red</p>
              <button className="text-sm text-gray-500 underline hover:text-black">
                Remove
              </button>
            </div>
          </div>

          {/* Price */}
          <div className="text-sm font-medium">$14.90</div>

          {/* Quantity */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleDecrease}
              className="px-2 py-1 border border-gray-300"
            >
              -
            </button>
            <span className="w-10 text-center border border-gray-300 py-1 text-sm">
              {quantity.toString().padStart(2, "0")}
            </span>
            <button
              onClick={handleIncrease}
              className="px-2 py-1 border border-gray-300"
            >
              +
            </button>
          </div>

          {/* Total */}
          <div className="text-sm font-medium">
            ${(14.9 * quantity).toFixed(2)}
          </div>
        </div>
      </div>

      {/* Gift Wrap */}
      <div className="flex items-center gap-2 border-t border-gray-300 py-6">
        <input type="checkbox" className="w-4 h-4" />
        <p className="text-sm text-gray-500">
          For <span className="font-medium text-black">$10.00</span> Please Wrap
          The Product
        </p>
      </div>

      {/* Subtotal + Buttons */}
      <div className="flex flex-col items-end gap-4 border-t border-gray-300 pt-6">
        <p className="font-semibold">
          Subtotal{" "}
          <span className="ml-10">
            ${(14.9 * quantity).toFixed(2)}
          </span>
        </p>

        {/* Checkout → redirect */}
        <button
          onClick={() => navigate("/checkout")}
          className="bg-black text-white px-20 py-3 rounded-md shadow-md"
        >
          Checkout
        </button>

        <button className="text-sm underline">View Cart</button>
      </div>
    </div>
  );
}
