// src/components/shop/CheckoutPage.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  CreditCard,
  Mail,
  User,
  MapPin,
  Globe,
  Lock,
  Calendar,
  Clipboard,
  CheckCircle,
} from "lucide-react";
import InputField from "../common/InputField"; // უკვე არსებული კომპონენტი

// Reusable SectionHeader Component
const SectionHeader = ({ title, children }) => (
  <div className="flex justify-between items-center mb-4">
    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    {children}
  </div>
);

// Custom Message Box
const MessageBox = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 shadow-xl max-w-sm w-full text-center">
        <CheckCircle className="text-green-500 w-12 h-12 mx-auto mb-4" />
        <p className="text-lg font-semibold text-gray-800 mb-4">{message}</p>
        <button
          onClick={onClose}
          className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
        >
          Close
        </button>
      </div>
    </div>
  );
};

// Main CheckoutPage Component
export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    email: "",
    country: "Georgia",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    cardNumber: "",
    expirationDate: "",
    securityCode: "",
    cardHolderName: "",
    saveInfo: false,
  });

  const [showMessage, setShowMessage] = useState(false);
  const location = useLocation();
  const cartItem = location.state?.cartItem;

  if (!cartItem) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="p-10 text-center font-medium text-gray-600 bg-white rounded-lg shadow-lg">
          Oops, there's nothing to check out. Please add items to your cart.
        </div>
      </div>
    );
  }

  const subtotal = cartItem.price * cartItem.quantity;
  const shipping = 40;
  const total = subtotal + shipping;

  const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: type === "checkbox" ? checked : value,
  }));
};

  const handlePayNow = (e) => {
    e.preventDefault();

    // აუცილებელი ველები
    const requiredFields = { ...formData };
    delete requiredFields.saveInfo;

    if (Object.values(requiredFields).some((value) => value === "")) {
      alert("გთხოვთ, შეავსოთ ყველა ველი.");
      return;
    }

    setShowMessage(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {showMessage && (
        <MessageBox
          message="Payment process completed successfully!"
          onClose={() => setShowMessage(false)}
        />
      )}
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row gap-10">
        <div className="md:w-3/5 space-y-8">
          {/* Contact Section */}
          <section>
            <SectionHeader title="Contact Information">
              <span className="text-sm text-gray-500">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600 hover:underline">
                  Log in
                </Link>
              </span>
            </SectionHeader>
            <InputField
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              icon={Mail}
              validationType="email"
            />
          </section>

          {/* Delivery Section */}
          <section>
            <SectionHeader title="Delivery" />
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none transition-colors duration-200 mb-4"
            >
              <option>Georgia</option>
              <option>USA</option>
              <option>Germany</option>
              <option>Other</option>
            </select>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                icon={User}
                validationType="text"
              />
              <InputField
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                icon={User}
                validationType="text"
              />
            </div>
            <div className="my-4">
              <InputField
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                icon={MapPin}
                validationType="text"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                icon={Globe}
                validationType="text"
              />
              <InputField
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                value={formData.postalCode}
                onChange={handleChange}
                icon={Lock}
                validationType="text"
              />
            </div>
            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                name="saveInfo"
                checked={formData.saveInfo}
                onChange={handleChange}
                className="mr-2"
              />
              <span className="text-sm text-gray-600">
                Save this information for later
              </span>
            </div>
          </section>

          {/* Payment Section */}
          <section>
            <SectionHeader title="Payment" />
            <div className="relative mb-4">
              <select className="w-full border border-gray-300 rounded-lg px-4 py-2 pl-12 focus:ring-2 focus:ring-black focus:outline-none transition-colors duration-200">
                <option>Credit Card</option>
                <option>PayPal</option>
              </select>
              <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <form onSubmit={handlePayNow} className="space-y-4">
              <InputField
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                value={formData.cardNumber}
                onChange={handleChange}
                icon={CreditCard}
                validationType="card"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField
                  type="text"
                  name="expirationDate"
                  placeholder="Expiration Date (MM/YY)"
                  value={formData.expirationDate}
                  onChange={handleChange}
                  icon={Calendar}
                  validationType="text"
                />
                <InputField
                  type="text"
                  name="securityCode"
                  placeholder="Security Code (CVC)"
                  value={formData.securityCode}
                  onChange={handleChange}
                  icon={Clipboard}
                  validationType="cvc"
                />
              </div>
              <InputField
                type="text"
                name="cardHolderName"
                placeholder="Cardholder Name"
                value={formData.cardHolderName}
                onChange={handleChange}
                icon={User}
                validationType="text"
              />

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
              >
                Pay
              </button>
            </form>
          </section>
        </div>

        {/* Right Summary Section */}
        <div className="md:w-2/5 p-6 bg-gray-50 rounded-lg shadow-inner">
          <h3 className="text-2xl font-semibold mb-4 text-center">Order Summary</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 border rounded-lg bg-white shadow-sm">
              <img
                src={cartItem.image}
                alt={cartItem.name}
                className="w-24 h-24 object-cover rounded-md flex-shrink-0"
              />
              <div className="flex-1">
                <h4 className="font-medium text-lg">{cartItem.name}</h4>
                <p className="text-sm text-gray-500">Quantity: {cartItem.quantity}</p>
              </div>
              <p className="font-medium text-lg">${cartItem.price}</p>
            </div>

            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <hr className="border-t border-gray-300 my-2" />
              <div className="flex justify-between font-bold text-black text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
