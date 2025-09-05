import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="border-t mt-20 py-10 px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm space-y-4 md:space-y-0">
          {/* Left Logo */}
          <span className="font-bold text-xl text-gray">Fasco</span>

          {/* Center Links */}
          <div className="flex gap-6">
            <a href="#">Support Center</a>
            <a href="#">Invoicing</a>
            <a href="#">Contract</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">FAQs</a>
          </div>

          {/* Copyright */}
          <p className="text-gray-400">Copyright © 2023 Fasco. All Rights Reserved.</p>
        </div>
      </footer>
  );
}
