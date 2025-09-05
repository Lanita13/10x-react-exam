import { useState } from "react";

const categories = [
    "Men's Fashion",
    "Women's Fashion",
    "Women Accessories",
    "Men Accessories",
    "Discount Deals",
];

const products = [
    {
        id: 1,
        name: "Shiny Dress",
        image: "https://pikaso.cdnpk.net/private/production/2059248447/upload.png?token=exp=1777939200~hmac=fb5d29474120277247d6ca0dd77706e41c8fac93a11b44854b1d6866d37689a5",
        price: 95.5,
        rating: 5,
        reviews: 411,
        status: "Almost Sold Out",
        category: "Women's Fashion"
    },
    {
        id: 2,
        name: "Long Dress",
        image: "https://pikaso.cdnpk.net/private/production/1749813663/upload.png?token=exp=1777939200~hmac=214311c0b57332ef00faea73a07629f092a24a876d8d377eeadc14232d29bc48&preview=1",
        price: 95.5,
        rating: 5,
        reviews: 411,
        status: "Almost Sold Out",
        category: "Women's Fashion"
    },
    {
        id: 3,
        name: "Full Sweater",
        image: "https://pikaso.cdnpk.net/private/production/2241351794/render.jpeg?token=exp=1775001600~hmac=7edb08b8d011393c0f2b4e0f182e1f7a11fafcedfcea912df4264758694a5dfc",
        price: 95.5,
        rating: 5,
        reviews: 411,
        status: "Almost Sold Out",
        category: "Women's Fashion"
    },
    {
        id: 4,
        name: "White Dress",
        image: "https://pikaso.cdnpk.net/private/production/1973211122/render.jpg?token=exp=1777939200~hmac=c75eb870bbe5dd538a80da4f2d5ba1f6ac3d705fdee3791f9306b4982ff27306",
        price: 95.5,
        rating: 5,
        reviews: 411,
        status: "Almost Sold Out",
        category: "Women's Fashion"
    },
    {
        id: 5,
        name: "Colorful Dress",
        image: "https://pikaso.cdnpk.net/private/production/2234434792/render.jpeg?token=exp=1777939200~hmac=e8359e51a186f5003974679a0a2031988da2f53ed9d6d4c7ea77c40c1b96e9b8",
        price: 95.5,
        rating: 5,
        reviews: 411,
        status: "Almost Sold Out",
        category: "Women's Fashion"
    },
    {
        id: 6,
        name: "White Dress",
        image: "https://pikaso.cdnpk.net/private/production/2067580633/upload.png?token=exp=1777939200~hmac=df6f0bef38a7a32ea7c8e18132f68a928db20fd1032a00e02d2b4ef41581455c",
        price: 65,
        rating: 5,
        reviews: 411,
        status: "Almost Sold Out",
        category: "Women's Fashion"
    },
    {
        id: 7,
        name: "White Suit Set",
        image: "https://pikaso.cdnpk.net/private/production/1802815938/upload.png?token=exp=1778457600~hmac=4734278858faca482ade411580c42cea9c72b0b9441fbfdbe01f702d81b9249e",
        price: 200,
        rating: 5,
        reviews: 611,
        status: "Almost Sold Out",
        category: "Men's Fashion"
    },
    {
        id: 8,
        name: "Bi-Color Linen Set",
        image: "https://pikaso.cdnpk.net/private/production/2293065898/upload.png?token=exp=1778457600~hmac=77d10a72f276fc59f2aae2930a828ba9bc8c29bc2388dd1894c03187b8eeb7b2&preview=1",
        price: 250,
        rating: 5,
        reviews: 811,
        status: "Almost Sold Out",
        category: "Men's Fashion"
    },
    {
        id: 9,
        name: "Black glasses",
        image: "https://pikaso.cdnpk.net/private/production/2241430479/render.jpeg?token=exp=1778457600~hmac=aa61c4b43e63ca5898cdf4b21e48a8b8555f94dd10e138c3abf19efe2c827a34",
        price: 150,
        rating: 5,
        reviews: 811,
        status: "Almost Sold Out",
        category: "Men Accessories"
    },
     {
        id: 10,
        name: "Green Linen Set",
        image: "https://pikaso.cdnpk.net/private/production/1975024058/upload.png?token=exp=1778457600~hmac=7367706cf5c9e6cfb9b044d4ef5c0c50e47aeb78cc4808bbae6b74d8db916647",
        price: 350,
        rating: 5,
        reviews: 911,
        status: "Almost Sold Out",
        category: "Men's Fashion"
    },
     {
        id: 11,
        name: "Gold Earring",
        image: "https://pikaso.cdnpk.net/private/production/2055982912/upload.png?token=exp=1775001600~hmac=db4aad636acb0016426663733ee214ebdde22570814600c9d6fad6a2800a4641",
        price: 90,
        rating: 5,
        reviews: 811,
        status: "Almost Sold Out",
        category: "Women Accessories"
    },
];

const NewArrivals = () => {
    const [activeCategory, setActiveCategory] = useState("Women's Fashion");
    const filteredProducts = products.filter(
        (product) => product.category === activeCategory
    );

    return (
        <section className="py-16 px-4 lg:px-20 bg-white">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-3">New Arrivals</h2>
                <p className="text-gray-500 max-w-xl mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
                    duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices.
                </p>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((cat, i) => (
                    <button
                        key={i}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-5 py-2 rounded-md shadow-sm transition ${cat === activeCategory
                                ? "bg-black text-white"
                                : "bg-gray-100 text-gray-600"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Products */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 flex items-center">
                {filteredProducts.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-72 object-cover rounded-lg mb-4"
                        />
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-gray-800">
                                {product.name}
                            </h3>
                            <div className="flex">
                                {Array(product.rating)
                                    .fill()
                                    .map((_, i) => (
                                        <span key={i} className="text-yellow-500 text-lg">
                                            ★
                                        </span>
                                    ))}
                            </div>
                        </div>

                        <div className="flex flex-col items-start mt-2">
                            <p className="text-sm text-gray-500">Allisson</p>
                            <p className=" text-sm text-gray-500 mt-1">
                                ({product.reviews}) Customer Reviews
                            </p>
                        </div>

                        {/* Price + Status */}
                        <div className="flex justify-between items-center mt-3">
                            <span className="text-lg font-bold text-gray-800">
                                ${product.price}
                            </span>
                            <span className="text-sm text-red-500">{product.status}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* View More */}
            <div className="flex justify-center mt-12">
                <button className="px-6 py-2 bg-black text-white rounded-lg shadow hover:bg-gray-800 transition">
                    View More
                </button>
            </div>
        </section>
    );
};

export default NewArrivals;