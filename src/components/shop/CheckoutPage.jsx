import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CreditCard } from "lucide-react";
import Logo from "../common/Logo";
import { Search, User, Star, ShoppingCart as CartIcon } from "lucide-react";

export default function CheckoutPage() {
  const [discount, setDiscount] = useState("");

  return (
    <div className="min-h-screen bg-white">
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

      {/* Title */}
      <h2 className="text-center font-semibold text-xl mt-6">
        FASCO Demo Checkout
      </h2>

      {/* Main Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-10">
        {/* Left Form */}
        <div className="space-y-8">
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <div className="flex justify-between items-center mb-2 text-sm">
              <span></span>
              <a href="#" className="text-blue-600 hover:underline">
                Have an account? Create Account
              </a>
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-md p-2"
            />
          </div>

          {/* Delivery */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Delivery</h3>
            <select className="w-full border rounded-md p-2 mb-3">
              <option>Country / Region</option>
              <option>Georgia</option>
              <option>USA</option>
              <option>Germany</option>
            </select>

            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="First Name"
                className="border rounded-md p-2"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border rounded-md p-2"
              />
            </div>

            <input
              type="text"
              placeholder="Address"
              className="w-full border rounded-md p-2 my-3"
            />

            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="City"
                className="border rounded-md p-2"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="border rounded-md p-2"
              />
            </div>

            <div className="flex items-center mt-3">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">Save This Info For Future</span>
            </div>
          </div>

          {/* Payment */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Payment</h3>
            <div className="relative mb-3">
              <select className="w-full border rounded-md p-2">
                <option>Credit Card</option>
                <option>PayPal</option>
              </select>
              <CreditCard className="absolute right-3 top-3 w-5 h-5 text-gray-500" />
            </div>

            <input
              type="text"
              placeholder="Card Number"
              className="w-full border rounded-md p-2 mb-3"
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Expiration Date"
                className="border rounded-md p-2"
              />
              <input
                type="text"
                placeholder="Security Code"
                className="border rounded-md p-2"
              />
            </div>
            <input
              type="text"
              placeholder="Card Holder Name"
              className="w-full border rounded-md p-2 my-3"
            />

            <div className="flex items-center mb-3">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">Save This Info For Future</span>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-900">
              Pay Now
            </button>
          </div>
        </div>

        {/* Right Summary */}
        <div>
          <div className="border rounded-md p-4 space-y-4">
            <div className="flex items-center space-x-4">
              <img
                src="/dress.png"
                alt="Product"
                className="w-20 h-24 object-cover rounded-md"
              />
              <div className="flex-1">
                <h4 className="font-medium">Mini Dress With Ruffled Straps</h4>
                <p className="text-sm text-gray-500">Red</p>
              </div>
              <p className="font-medium">$100.00</p>
            </div>

            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Discount code"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
                className="flex-1 border rounded-md p-2"
              />
              <button className="bg-black text-white px-4 rounded-md">
                Apply
              </button>
            </div>

            <div className="space-y-1 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$100.00</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>$40.00</span>
              </div>
              <div className="flex justify-between font-semibold text-black">
                <span>Total</span>
                <span>$140.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6 border-t">
        Copyright © 2022 FASCO - All Rights Reserved.
      </footer>
    </div>
  );
}
