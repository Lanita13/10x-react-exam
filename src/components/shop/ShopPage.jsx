import { useState } from "react"; 
import { Link } from "react-router-dom";


import redhat from "../../assets/img/Red-Hat.png";
import sleevecoat from "../../assets/img/Sleeve-Coat.png";
import metalshirt from "../../assets/img/Metal-Shirt.png";
import denimhat from "../../assets/img/Denim-Hat.png";
import minitop from "../../assets/img/Mini-Top.png";
import oversizedjacket from "../../assets/img/Oversized-Jacket.png";
import checkedsunglasses from "../../assets/img/Checked-Sunglasses.png";
import exclusivejacket from "../../assets/img/Exclusive-Jacket.png";
import blackdress from "../../assets/img/Black-Dress.png";


function ShopPage() {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const products = [
    { id: 1, name: "Knotted Red Hat", price: 20, oldPrice: 25, image: redhat, sizes: ["S", "M"], colors: ["bg-red-500", "bg-black", "bg-gray-400"], brand: "Hermes", collection: ["New Arrivals", "All"], tags: ["Style", "Trending"] },
    { id: 2, name: "Loose Metal Shirt", price: 70, image: sleevecoat, sizes: ["S", "L"], colors: ["bg-gray-700", "bg-green-600"], brand: "Prada", collection: ["Best Sellers", "All"], tags: ["Vintage", "Summer"] },
    { id: 3, name: "Long Sleeve Coat", price: 95, image: metalshirt, sizes: ["L", "M"], colors: ["bg-black", "bg-yellow-500"], brand: "Gucci", collection: ["Best Sellers", "All"], tags: ["Modern", "Winter"] },
    { id: 4, name: "Sexy Denim Hat", price: 25, image: denimhat, sizes: ["S", "M"], colors: ["bg-blue-500", "bg-black"], brand: "Adidas", collection: ["Sale", "All"], tags: ["Style", "Summer"] },
    { id: 5, name: "Linen Plain Top", price: 150, image: minitop, sizes: ["XS", "XL"], colors: ["bg-pink-500", "bg-yellow-400"], brand: "Adidas", collection: ["Sale", "All"], tags: ["Style", "Summer"] },
    { id: 6, name: "Oversized Jacket", price: 100, oldPrice: "$140.00", image: oversizedjacket, sizes: ["S", "XS"], colors: ["bg-black", "bg-gray-400"], brand: "Adidas", collection: ["Sale", "All"], tags: ["Trending", "Vintage"] },
    { id: 7, name: "Checked Sunglasses", price: 80, image: checkedsunglasses, sizes: ["XS", "M"], colors: ["bg-black", "bg-red-400"], brand: "Adidas", collection: ["Sale", "All"], tags: ["Vintage", "Exclusive"] },
    { id: 8, name: "Exclusive Jacket", price: 120, image: exclusivejacket, sizes: ["S", "M", "L"], colors: ["bg-black", "bg-purple-500"], brand: "Adidas", collection: ["Sale", "All"], tags: ["Trending", "Style"] },
    { id: 9, name: "Dotted Black Dress", price: 115, image: blackdress, sizes: ["L", "XL"], colors: ["bg-black", "bg-gray-400", "bg-blue-400"], brand: "Adidas", collection: ["Sale", "All"], tags: ["Winter", "Exclusive"] },
    { id: 10, name: "Long Sleeve Coat", price: 95, image: metalshirt, sizes: ["L", "M"], colors: ["bg-black", "bg-yellow-500"], brand: "Gucci", collection: ["Best Sellers", "All"], tags: ["Modern", "Winter"] },
    { id: 11, name: "Sexy Denim Hat", price: 25, image: denimhat, sizes: ["S", "M"], colors: ["bg-blue-500", "bg-black"], brand: "Adidas", collection: ["Sale", "All"], tags: ["Style", "Summer"] },
    { id: 12, name: "Linen Plain Top", price: 150, image: minitop, sizes: ["XS", "XL"], colors: ["bg-pink-500", "bg-yellow-400"], brand: "Adidas", collection: ["Sale", "All"], tags: ["Style", "Summer"] },
  ];

  const filteredProducts = products.filter((product) => {
    const colorMatch = selectedColor ? product.colors.includes(selectedColor) : true;
    const priceMatch = selectedPrice
      ? (selectedPrice === "0-50" && product.price >= 0 && product.price <= 50) ||
        (selectedPrice === "50-100" && product.price > 50 && product.price <= 100) ||
        (selectedPrice === "100-150" && product.price > 100 && product.price <= 150) ||
        (selectedPrice === "150-200" && product.price > 150 && product.price <= 200)
      : true;
    const brandMatch = selectedBrand ? product.brand === selectedBrand : true;
    const collectionMatch = selectedCollection ? product.collection.includes(selectedCollection) : true;
    const tagMatch = selectedTag ? product.tags.includes(selectedTag) : true;
    return colorMatch && priceMatch && brandMatch && collectionMatch && tagMatch;
  });

  const productsPerPage = 6;
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const colors = ["bg-red-500","bg-blue-500","bg-green-500","bg-yellow-500","bg-pink-500","bg-black","bg-gray-400","bg-purple-500","bg-orange-500"];
  const prices = ["0-50","50-100","100-150","150-200"];
  const brands = ["Hermes","Prada","Gucci","Adidas"];
  const collections = ["All","Best Sellers","New Arrivals","Sale"];
  const tags = ["Style","Vintage","Modern","New","Trending","Summer","Winter","Exclusive"];

  return (
    <div className="font-sans">
      {/* Header */}
  

      {/* Breadcrumb */}
      <div className="px-10 py-4 text-gray-500">
        Home <span className="mx-2">/</span> <span className="text-black">Fashion</span>
      </div>

      {/* Content */}
      <div className="flex  px-10 py-10">
        {/* Sidebar */}
        <aside className="w-1/4 pr-8">
          <h2 className="flex flex-wrap font-bold text-lg mb-4">Filters</h2>

          {/* Colors */}
          <div className="mb-6">
            <h3 className=" flex flex-wrap font-semibold mb-2">Colors</h3>
            <div className="flex flex-wrap gap-2">
              {colors.map((color) => (
                <div
                  key={color}
                  className={`${color} w-6 h-6 rounded-full border cursor-pointer ${selectedColor === color ? "ring-2 ring-black" : ""}`}
                  onClick={() => setSelectedColor(selectedColor === color ? null : color)}
                />
              ))}
            </div>
          </div>

          {/* Prices */}
          <div className="mb-6">
            <h3 className="flex flex-wrap font-semibold mb-2">Prices</h3>
            <div className="flex flex-col gap-1">
              {prices.map((price) => (
                <button
                  key={price}
                  className={`text-left px-2 py-1 cursor-pointer ${selectedPrice === price ? "bg-gray-300" : ""}`}
                  onClick={() => setSelectedPrice(selectedPrice === price ? null : price)}
                >
                  {price === "0-50" ? "$0–$50" : price === "50-100" ? "$50–$100" : price === "100-150" ? "$100–$150" : "$150–$200"}
                </button>
              ))}
            </div>
          </div>

          {/* Brands */}
          <div className="mb-6">
            <h3 className="flex flex-wrap font-semibold mb-2">Brands</h3>
            <div className="flex flex-col   gap-1">
              {brands.map((brand) => (
                <button
                  key={brand}
                  className={`text-left px-2 py-1 cursor-pointer ${selectedBrand === brand ? "bg-gray-300" : ""}`}
                  onClick={() => setSelectedBrand(selectedBrand === brand ? null : brand)}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>

          {/* Collections */}
          <div className="mb-6">
            <h3 className="flex flex-wrap font-semibold mb-2">Collections</h3>
            <div className="flex flex-col gap-1">
              {collections.map((col) => (
                <button
                  key={col}
                  className={`text-left px-2 py-1 cursor-pointer ${selectedCollection === col ? "bg-gray-300" : ""}`}
                  onClick={() => setSelectedCollection(selectedCollection === col ? null : col)}
                >
                  {col}
                </button>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <h3 className="flex flex-wrap font-semibold mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2 text-sm">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-2 py-1 cursor-pointer ${selectedTag === tag ? "bg-gray-300" : "text-gray-600"}`}
                  onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="w-3/4">
          <div className="flex justify-between items-center mb-6">
            <h2 className=" flex flex-wrap text-xl font-bold">Products</h2>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {currentProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-medium text-gray-800">{product.name}</h3>
                  <div className="flex gap-2 items-center">
                    <p className="text-gray-800 font-semibold">${product.price}</p>
                    {product.oldPrice && (
                      <span className="line-through text-gray-500 text-sm">
                        ${product.oldPrice}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2 mt-2">
                    {product.colors.map((c, idx) => (
                      <div key={idx} className={`${c} w-5 h-5 rounded-full border`} />
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-10">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`px-3 py-1 border rounded cursor-pointer ${currentPage === page ? "bg-gray-800 text-white" : "bg-white"}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default ShopPage;
