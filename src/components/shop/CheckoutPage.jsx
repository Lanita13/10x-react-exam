import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CreditCard } from "lucide-react";


export default function CheckoutPage() {
    const [discount, setDiscount] = useState("");
    const location = useLocation();
    const cartItem = location.state?.cartItem;

    if (!cartItem) {
        return <div className="p-10 text-center">No items in checkout</div>;
    }

    const subtotal = cartItem.price * cartItem.quantity;
    const shipping = 40;
    const total = subtotal + shipping;

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}

            {/* Title */}
            <h2 className="text-center font-semibold text-xl mt-6">FASCO Demo Checkout</h2>

            {/* Main Section */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-10">
                {/* Left Form */}
                <div className="space-y-8">
                    {/* Contact */}
                    <div>
                        <div className="flex justify-between items-center mb-2 text-sm">
                            <h3 className="text-2xl font-semibold mb-2">Contact</h3>
                            <span>Have an account?</span>
                            <a href="#" className="text-blue-600 hover:underline">
                                 Create Account
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
                        <h3 className="text-2xl flex justify-between font-semibold mb-2">Delivery</h3>
                        <select className="w-full border rounded-md p-2 mb-3">
                            <option>Country / Region</option>
                            <option>Georgia</option>
                            <option>USA</option>
                            <option>Germany</option>
                        </select>

                        <div className="grid grid-cols-2 gap-3 ">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="border rounded-md p-2 cursor-pointer"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="border rounded-md p-2 cursor-pointer"
                            />
                        </div>

                        <input
                            type="text"
                            placeholder="Address"
                            className="w-full border rounded-md p-2 my-3 cursor-pointer"
                        />

                        <div className="grid grid-cols-2 gap-3">
                            <input
                                type="text"
                                placeholder="City"
                                className="border rounded-md p-2 cursor-pointer"
                            />
                            <input
                                type="text"
                                placeholder="Postal Code"
                                className="border rounded-md p-2 cursor-pointer"
                            />
                        </div>

                        <div className="flex items-center mt-3">
                            <input type="checkbox" className="mr-2 cursor-pointer" />
                            <span className="text-sm cursor-pointer">Save This Info For Future</span>
                        </div>
                    </div>





                    {/* Payment */}
                    <div>
                        <h3 className="text-2xl flex justify-between  font-semibold mb-2 ">Payment</h3>
                        <div className="relative mb-3 ">
                            <select className="w-full border rounded-md p-2 cursor-pointer">
                                <option>Credit Card</option>
                                <option>PayPal</option>
                            </select>
                            <CreditCard className="absolute right-6 top-3 w-5 h-5 text-gray-500" />
                        </div>

                        <input
                            type="text"
                            placeholder="Card Number"
                            className="w-full border rounded-md p-2 mb-3 cursor-pointer"
                        />
                        <div className="grid grid-cols-2 gap-3">
                            <input
                                type="text"
                                placeholder="Expiration Date"
                                className="border rounded-md p-2 cursor-pointer"
                            />
                            <input
                                type="text"
                                placeholder="Security Code"
                                className="border rounded-md p-2 cursor-pointer"
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Card Holder Name"
                            className="w-full border rounded-md p-2 my-3 cursor-pointer"
                        />
                        <div className="flex items-center mb-3">
                            <input type="checkbox" className="mr-2 cursor-pointer" />
                            <span className="text-sm cursor-pointer">Save This Info For Future</span>
                        </div>

                        <button className="w-full bg-black text-white py-3 rounded-md cursor-pointer hover:bg-gray-900">
                            Pay Now
                        </button>
                    </div>
                </div>

                {/* Right Summary */}
                <div>
                    <div className="border rounded-md p-4 space-y-4">
                        <div className="text-2xl flex justify-between  space-x-4">
                            <img
                                src={cartItem.image}
                                alt={cartItem.name}
                                className="w-20 h-24 object-cover rounded-md"
                            />
                            <div className="flex-1">
                                <h4 className="font-medium">{cartItem.name}</h4>
                                <p className="text-sm text-gray-500">Quantity: {cartItem.quantity}</p>
                            </div>
                            <p className="font-medium">${cartItem.price}</p>
                        </div>

                        <div className="space-y-1 text-sm text-gray-600">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>${shipping.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between font-semibold text-black">
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
