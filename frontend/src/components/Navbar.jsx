import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <img
          src={logo}
          alt="Logo"
          className="h-12 w-auto cursor-pointer hover:scale-110 transition-transform duration-300"
        />
        <button
          className="lg:hidden p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
        <ul
          className={`absolute lg:static top-14 left-0 w-full lg:w-auto lg:flex lg:items-center lg:space-x-6 bg-gray-900 lg:bg-transparent transition-all duration-300 ${
            isMobileMenuOpen
              ? "block opacity-100"
              : "hidden lg:block opacity-0 lg:opacity-100"
          }`}
        >
          <li className="block text-center lg:inline">
            <Link
              to="/home"
              className="block py-2 px-4 lg:inline lg:py-0 hover:text-gray-300 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="block text-center lg:inline">
            <Link
              to="/"
              className="block py-2 px-4 lg:inline lg:py-0 hover:text-gray-300 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Grid
            </Link>
          </li>
          <li className="block text-center lg:inline">
            <a
              href="https://www.linkedin.com/in/rishiprasadsulakhe"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 px-4 lg:inline lg:py-0 hover:text-gray-300 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
