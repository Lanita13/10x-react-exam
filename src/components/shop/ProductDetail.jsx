import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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

// ეს ფუნქცია ფერის სახელს Tailwind CSS კლასად გარდაქმნის
const getColorClass = (colorName) => {
    switch (colorName.toLowerCase()) {
        case "black": return "bg-black";
        case "red": return "bg-red-500";
        case "blue": return "bg-blue-500";
        case "green": return "bg-green-500";
        case "yellow": return "bg-yellow-500";
        case "pink": return "bg-pink-500";
        case "purple": return "bg-purple-500";
        case "gray": return "bg-gray-500";
        default: return "bg-gray-400";
    }
};

export default function ProductDetail() {
    const { id } = useParams();
    const product = productData[id];
    const navigate = useNavigate();

    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);

    if (!product) {
        return <p className="p-10 text-center text-xl text-gray-700">პროდუქტი ვერ მოიძებნა.</p>;
    }

    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrease = () => {
        setQuantity(prevQuantity => Math.max(1, prevQuantity - 1));
    };

    const handleAddToCart = () => {
        if (!selectedSize || !selectedColor) {
            alert("გთხოვთ, აირჩიოთ ზომა და ფერი.");
            return;
        }

        const cartItem = {
            id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity,
            size: selectedSize,
            color: selectedColor,
        };

        // აქ დაამატეთ კალათის ლოგიკა, მაგალითად localStorage-ში შენახვა
        console.log("Adding to cart:", cartItem);

        // გადავდივართ Cart გვერდზე არჩეული მონაცემებით
        navigate("/cart", { state: { cartItem } });
    };

    return (
        <div className="container mx-auto p-8 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* მარცხენა მხარეს — პროდუქტის სურათი */}
                <div className="flex justify-center items-center">
                    <img src={product.image} alt={product.name} className="w-full h-auto max-w-lg rounded-xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-105" />
                </div>

                {/* მარჯვენა მხარეს — დეტალები */}
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col">
                        <h1 className="text-3xl font-extrabold text-gray-900">{product.name}</h1>
                        <p className="text-2xl font-bold text-red-600 mt-2">${product.price}</p>
                        <div className="flex items-center mt-2">
                            <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />
                            <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />
                            <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />
                            <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />
                            <Star className="w-5 h-5 text-gray-300" />
                            <span className="ml-2 text-sm text-gray-600">(4.0)</span>
                        </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed">{product.description}</p>

                    {/* ზომები */}
                    <div className="mt-4">
                        <p className="text-xl font-bold flex flex-wrap text-gray-800 mb-2">Size: </p>
                        <div className="flex flex-wrap gap-2">
                            {product.sizes.map((size) => (
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

                    {/* ფერები */}
                    <div className="mt-4">
                        <p className="text-xl font-bold flex flex-wrap text-gray-800 mb-2">Color: </p>
                        <div className="flex flex-wrap gap-2">
                            {product.colors.map((color) => (
                                <button
                                    key={color}
                                    onClick={() => setSelectedColor(color)}
                                    className={`w-10 h-10 rounded-full border-2 transition-all duration-200 
                                        ${selectedColor === color ? `ring-2 ring-offset-2 ring-gray-600` : ""} 
                                        ${getColorClass(color)}`}
                                    title={color}
                                />
                            ))}
                        </div>
                    </div>

                    {/* რაოდენობის სელექტორი და Add to Cart ღილაკი */}
                    <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
                        <div className="flex items-center justify-between w-fit gap-2 border border-gray-300 rounded-md">
                            <button
                                onClick={handleDecrease}
                                className="px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                                aria-label="Reduce quantity"
                            >
                                -
                            </button>
                            <span className="text-center w-[30px] text-lg font-medium text-gray-600">
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

                        <button
                            onClick={handleAddToCart}
                            className="w-full sm:flex-1 bg-black text-white px-8 py-3 rounded-full font-semibold text-lg  hover:bg-gray-800 transition duration-300 ease-in-out"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}