// src/components/shop/ProductDetail.jsx
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Star } from "lucide-react";
import { productsData } from "../../data/products"; 
import { getColorClass } from "../../utils/colors"; 

export default function ProductDetail() {
    const { id } = useParams();
    const product = productsData.find(p => p.id === parseInt(id));
    const navigate = useNavigate();

    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);

    if (!product) {
        return (
            <p className="p-10 text-center text-xl text-gray-700">
                პროდუქტი ვერ მოიძებნა.
            </p>
        );
    }

    const handleIncrease = () => setQuantity(prev => prev + 1);
    const handleDecrease = () => setQuantity(prev => Math.max(1, prev - 1));

    const handleAddToCart = () => {
        if (!selectedSize || !selectedColor) {
            alert("გთხოვთ, აირჩიოთ ზომა და ფერი.");
            return;
        }

        const cartItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity,
            size: selectedSize,
            color: selectedColor,
        };

        console.log("Adding to cart:", cartItem);
        navigate("/cart", { state: { cartItem } });
    };

    return (
        <div className="container mx-auto p-8 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Product Image */}
                <div className="flex justify-center items-center">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-auto max-w-lg rounded-xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                </div>

                {/* Product Details */}
                <div className="flex flex-col gap-6">
                    <div>
                        <h1 className="text-3xl font-extrabold text-gray-900">{product.name}</h1>
                        <p className="text-2xl font-bold text-red-600 mt-2">${product.price}</p>
                        <div className="flex items-center mt-2">
                            {[...Array(4)].map((_, idx) => (
                                <Star key={idx} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                            ))}
                            <Star className="w-5 h-5 text-gray-300" />
                            <span className="ml-2 text-sm text-gray-600">(4.0)</span>
                        </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed">{product.description}</p>

                    {/* Sizes */}
                    <div className="mt-4">
                        <p className="text-xl font-bold text-gray-800 mb-2">Size:</p>
                        <div className="flex flex-wrap gap-2">
                            {product.sizes.map(size => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`border border-gray-400 px-6 py-2 rounded-full text-sm font-medium transition-all duration-200
                                        ${selectedSize === size ? "bg-black text-white border-black" : "bg-white text-gray-800 hover:bg-gray-100"}`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Colors */}
                    <div className="mt-4">
                        <p className="text-xl font-bold text-gray-800 mb-2">Color:</p>
                        <div className="flex flex-wrap gap-2">
                            {product.colors.map(color => (
                                <button
                                    key={color}
                                    onClick={() => setSelectedColor(color)}
                                    className={`w-10 h-10 rounded-full border-2 transition-all duration-200
                                        ${selectedColor === color ? "ring-2 ring-offset-2 ring-gray-600" : ""} ${getColorClass(color)}`}
                                    title={color}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Quantity & Add to Cart */}
                    <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
                        <div className="flex items-center justify-between w-fit gap-2 border border-gray-300 rounded-md">
                            <button
                                onClick={handleDecrease}
                                className="px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                                aria-label="Reduce quantity"
                            >-</button>
                            <span className="text-center w-[30px] text-lg font-medium text-gray-600">{quantity}</span>
                            <button
                                onClick={handleIncrease}
                                className="px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                                aria-label="Increase quantity"
                            >+</button>
                        </div>

                        <button
                            onClick={handleAddToCart}
                            className="w-full sm:flex-1 bg-black text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-800 transition duration-300 ease-in-out"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
