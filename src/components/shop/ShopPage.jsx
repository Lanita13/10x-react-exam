import { useState } from "react";
import { Link } from "react-router-dom";
import { productsData } from "../../data/products";
import { getColorClass } from "../../utils/colors";

function ShopPage() {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 6;

  const filteredProducts = productsData.filter((product) => {
    const colorMatch = selectedColor ? product.colors.includes(selectedColor) : true;
    const priceMatch = selectedPrice
      ? (selectedPrice === "0-50" && product.price <= 50) ||
        (selectedPrice === "50-100" && product.price > 50 && product.price <= 100) ||
        (selectedPrice === "100-150" && product.price > 100 && product.price <= 150) ||
        (selectedPrice === "150-200" && product.price > 150 && product.price <= 200)
      : true;
    const brandMatch = selectedBrand ? product.brand === selectedBrand : true;
    const collectionMatch = selectedCollection ? product.collection.includes(selectedCollection) : true;
    const tagMatch = selectedTag ? product.tags.includes(selectedTag) : true;
    return colorMatch && priceMatch && brandMatch && collectionMatch && tagMatch;
  });

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const colors = ["red", "blue", "green", "yellow", "pink", "black", "gray", "purple", "orange"];
  const prices = ["0-50", "50-100", "100-150", "150-200"];
  const brands = ["Hermes", "Prada", "Gucci", "Adidas"];
  const collections = ["All", "Best Sellers", "New Arrivals", "Sale"];
  const tags = ["Style", "Vintage", "Modern", "New", "Trending", "Summer", "Winter", "Exclusive"];

  return (
    <div className="font-sans">
      {/* Breadcrumb */}
      <div className="px-10 py-4 text-gray-500">
        Home <span className="mx-2">/</span> <span className="text-black">Fashion</span>
      </div>

      {/* Content */}
      <div className="flex px-10 py-10">
        {/* Sidebar */}
        <aside className="w-1/4 pr-8">
          <h2 className="flex flex-wrap font-bold text-xl mb-4">Filters</h2>

          {/* Colors */}
          <div className="mb-6">
            <h3 className="flex flex-wrap font-semibold mb-2 text-lg">Colors</h3>
            <div className="flex flex-wrap gap-2">
              {colors.map((color) => (
                <div
                  key={color}
                  className={`${getColorClass(color)} w-6 h-6 rounded-full border cursor-pointer ${selectedColor === color ? "ring-2 ring-black" : ""}`}
                  onClick={() => setSelectedColor(selectedColor === color ? null : color)}
                />
              ))}
            </div>
          </div>

          {/* Prices */}
          <div className="mb-6">
            <h3 className="flex flex-wrap font-semibold text-lg mb-2">Prices</h3>
            <div className="flex flex-col gap-1 text-gray-500">
              {prices.map((price) => (
                <button
                  key={price}
                  className={`text-left py-1 cursor-pointer ${selectedPrice === price ? "bg-gray-300 p-2 rounded w-fit" : ""}`}
                  onClick={() => setSelectedPrice(selectedPrice === price ? null : price)}
                >
                  {price.replace("-", "–$")}
                </button>
              ))}
            </div>
          </div>

          {/* Brands */}
          <div className="mb-6">
            <h3 className="flex flex-wrap font-semibold text-lg mb-2">Brands</h3>
            <div className="flex flex-col gap-1 text-gray-500">
              {brands.map((brand) => (
                <button
                  key={brand}
                  className={`text-left py-1 cursor-pointer ${selectedBrand === brand ? "bg-gray-300 p-2 rounded w-fit" : ""}`}
                  onClick={() => setSelectedBrand(selectedBrand === brand ? null : brand)}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>

          {/* Collections */}
          <div className="mb-6">
            <h3 className="flex flex-wrap font-semibold text-lg mb-2">Collections</h3>
            <div className="flex flex-col gap-1 text-gray-500">
              {collections.map((col) => (
                <button
                  key={col}
                  className={`text-left py-1 cursor-pointer ${selectedCollection === col ? "bg-gray-300 p-2 rounded w-fit" : ""}`}
                  onClick={() => setSelectedCollection(selectedCollection === col ? null : col)}
                >
                  {col}
                </button>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <h3 className="flex flex-wrap font-semibold text-lg mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2 text-sm text-gray-500">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className={`py-1 cursor-pointer ${selectedTag === tag ? "bg-gray-300 p-2 rounded w-fit" : "text-gray-600"}`}
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
          <h2 className="text-xl font-bold mb-6">Products</h2>
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
                      <span className="line-through text-gray-500 text-sm">${product.oldPrice}</span>
                    )}
                  </div>
                  <div className="flex gap-2 mt-2">
                    {product.colors.map((c, idx) => (
                      <div key={idx} className={`${getColorClass(c)} w-5 h-5 rounded-full border`} />
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
                className={`px-4 py-2 cursor-pointer ${currentPage === page ? "bg-gray-200 text-black p-2 w-fit" : "bg-white"}`}
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
