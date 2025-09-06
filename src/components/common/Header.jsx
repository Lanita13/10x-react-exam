import { Link } from "react-router-dom";
import Logo from "./Logo";
import { Search, User, Star, ShoppingCart as CartIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-6 border-b border-gray-200 px-6">
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
  );
}
