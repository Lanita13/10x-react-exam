import {useState} from "react";
import redhat from "../../assets/img/Red-Hat.png";
import sleevecoat from "../../assets/img/Sleeve-Coat.png";
import metalshirt from "../../assets/img/Metal-Shirt.png";
import denimhat from "../../assets/img/Denim-Hat.png";
import minitop from "../../assets/img/Mini-Top.png";
import oversizedjacket from "../../assets/img/Oversized-Jacket.png";
import checkedsunglasses  from "../../assets/img/Checked-Sunglasses.png";
import exclusivejacket from "../../assets/img/Exclusive-Jacket.png";
import blackdress  from "../../assets/img/Black-Dress.png";


function ShopPage() {
  const products = [
    { id: 1, name: "Beautiful Red Hat", price: "$50.00", image: redhat},
    { id: 2, name: "Loose Metal Shirt", price: "$70.00", image: sleevecoat},
    { id: 3, name: "Long Sleeve Coat", price: "$95.00", image: metalshirt},
    { id: 4, name: "Sexy Denim Hat", price: "$25.00", image: denimhat},
    { id: 5, name: "Linen Mini Top", price: "$29.00", image: minitop},
    { id: 6, name: "Oversized Jacket", price: "$110.00", image: oversizedjacket },
    { id: 7, name: "Checked Sunglasses", price: "$20.00", image: checkedsunglasses },
    { id: 8, name: "Exclusive Jacket", price: "$80.00", image: exclusivejacket },
    { id: 9, name: "Dotted Black Dress", price: "$65.00", image: blackdress },
  ];

  return (
    <div className="flex px-10 py-10 font-sans">
      {/* Sidebar Filters */}
      <aside className="w-1/4 pr-8">
        <h2 className="font-bold text-lg mb-4">Filters</h2>
        
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Size</h3>
          <div className="flex gap-2">
            {["S", "M", "L"].map((s) => (
              <button key={s} className="border px-2 py-1 rounded">{s}</button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold mb-2">Colors</h3>
          <div className="flex flex-wrap gap-2">
            {["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-pink-500", "bg-black", "bg-gray-400", "bg-purple-500"].map((color, idx) => (
              <div key={idx} className={`${color} w-6 h-6 rounded-full border`} />
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold mb-2">Price</h3>
          <ul className="space-y-1 text-gray-600">
            <li>$0–$50</li>
            <li>$50–$100</li>
            <li>$100–$150</li>
          </ul>
        </div>
      </aside>

      {/* Product Grid */}
      <main className="w-3/4">
        <h2 className="text-xl font-bold mb-6">Best Selling</h2>
        <div className="grid grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <img src={product.image} alt={product.name} className="w-full h-72 object-cover" />
              <div className="p-4">
                <h3 className="font-medium text-gray-800">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default ShopPage;
