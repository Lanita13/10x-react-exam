import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // დავამატეთ useNavigate

import redhat from "../../assets/img/Red-Hat.png";
import sleevecoat from "../../assets/img/Sleeve-Coat.png";
import metalshirt from "../../assets/img/Metal-Shirt.png";
import denimhat from "../../assets/img/Denim-Hat.png";
import minitop from "../../assets/img/Mini-Top.png";
import oversizedjacket from "../../assets/img/Oversized-Jacket.png";
import checkedsunglasses from "../../assets/img/Checked-Sunglasses.png";
import exclusivejacket from "../../assets/img/Exclusive-Jacket.png";
import blackdress from "../../assets/img/Black-Dress.png";
import { Star } from "lucide-react";

const productData = {
    1: { name: "Knotted Red Hat", price: 20, image: redhat, sizes: ["S", "M"], colors: ["black", "red"], description: "Trendy red hat for all seasons." },
    2: { name: "Loose Metal Shirt", price: 70, image: sleevecoat, sizes: ["S", "L"], colors: ["gray", "green"], description: "Stylish loose shirt with metal shine." },
    3: { name: "Long Sleeve Coat", price: 95, image: metalshirt, sizes: ["L", "M"], colors: ["black", "yellow"], description: "Warm and elegant long sleeve coat." },
    4: { name: "Sexy Denim Hat", price: 25, image: denimhat, sizes: ["S", "M"], colors: ["blue", "black"], description: "Casual denim hat with modern style." },
    5: { name: "Linen Plain Top", price: 150, image: minitop, sizes: ["XS", "XL"], colors: ["pink", "yellow"], description: "Premium linen plain top." },
    6: { name: "Oversized Jacket", price: 100, image: oversizedjacket, sizes: ["S", "XS"], colors: ["black", "gray"], description: "Oversized jacket with relaxed fit." },
    7: { name: "Checked Sunglasses", price: 80, image: checkedsunglasses, sizes: ["XS", "M"], colors: ["black", "red"], description: "Trendy checked sunglasses." },
    8: { name: "Exclusive Jacket", price: 120, image: exclusivejacket, sizes: ["S", "M", "L"], colors: ["black", "purple"], description: "Exclusive jacket for modern style." },
    9: { name: "Dotted Black Dress", price: 115, image: blackdress, sizes: ["L", "XL"], colors: ["black", "gray", "blue"], description: "Elegant dotted dress." },
};

export default function ProductDetail() {
    const { id } = useParams();
    const product = productData[id];
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate(); // დავამატეთ useNavigate ჰუკის ინიციალიზაცია




    if (!product) return <p className="p-10">Product not found</p>;

    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrease = () => {
        setQuantity(prevQuantity => Math.max(1, prevQuantity - 1));
    };

    const handleAddToCart = () => {
    const cartItem = {
        id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity
    };

    // გადავდივართ Cart-ზე და პარალელურად ვაგზავნით მონაცემს state-ით
    navigate("/cart", { state: { cartItem } });
};


    return (
        <div className="grid grid-cols-2 gap-8 p-10">
            {/* მარცხენა მხარეს — ფოტო */}
            <div>
                <img src={product.image} alt={product.name} className="w-full rounded-xl shadow-lg" />
            </div>

            {/* მარჯვენა მხარეს — დეტალები */}
            <div className="flex flex-col gap-4">
                <div className="flex gap-5">
                    <h1 className="text-xl font-bold">{product.name}</h1>
                    <Star className="w-5 h-5 rounded-full border cursor-pointer" />
                </div>

                <div className="flex space-x-1">
                    <Star className="w-5 h-5 text-yellow-500" fill="currentColor" />
                    <Star className="w-5 h-5 text-yellow-500" fill="currentColor" />
                    <Star className="w-5 h-5 text-yellow-500" fill="currentColor" />
                    <Star className="w-5 h-5 text-gray-300" />
                </div>

                <p className="text-2xl text-red-600">${product.price}</p>
                <p className="text-gray-600">{product.description}</p>

                {/* ზომები */}
                <div>
                    <p className="font-semibold mb-2">Choose size:</p>
                    <div className="flex gap-2">
                        {product.sizes.map((size) => (
                            <button key={size} className="border px-4 py-2 rounded-lg hover:bg-black hover:text-white">
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ფერები */}
                <div>
                    <p className="font-semibold mb-2">Choose color:</p>
                    <div className="flex gap-2">
                        {product.colors.map((c) => (
                            <div key={c} className={`w-8 h-8 rounded-full border cursor-pointer ${c === "black" ? "bg-black" : c === "red" ? "bg-red-500" : c === "blue" ? "bg-blue-500" : c === "green" ? "bg-green-500" : c === "yellow" ? "bg-yellow-500" : c === "pink" ? "bg-pink-500" : c === "purple" ? "bg-purple-500" : "bg-gray-400"}`} />
                        ))}
                    </div>
                </div>
                
                {/* რაოდენობის სელექტორი და Add to Cart ღილაკი */}
                <div className="mt-4 flex gap-4 items-center">
                    <div className="flex items-center border border-gray-500 rounded-lg overflow-hidden">
                        <button onClick={handleDecrease} className="px-4 py-2 hover:bg-gray-100 transition">
                            −
                        </button>
                        <span className="px-4 py-2 font-medium">{quantity}</span>
                        <button onClick={handleIncrease} className="px-4 py-2 hover:bg-gray-100 transition">
                            +
                        </button>
                    </div>

                    <button onClick={handleAddToCart} className="flex-1 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}