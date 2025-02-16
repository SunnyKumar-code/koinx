import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-white shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        Koin<span className="text-yellow-500">X</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <a href="#" className="text-gray-700 hover:text-blue-500">Features</a>
        <a href="#" className="text-gray-700 hover:text-blue-500">Exchanges</a>
        <a href="#" className="text-gray-700 hover:text-blue-500">How it Works?</a>
        <a href="#" className="text-gray-700 hover:text-blue-500">Blog</a>
        <a href="#" className="text-gray-700 hover:text-blue-500">About us</a>
      </div>

      {/* Sign In Button */}
      <div className="hidden md:block">
        <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white">
          Sign In
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-14 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
          <a href="#" className="text-gray-700 hover:text-blue-500">Features</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">Exchanges</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">How it Works?</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">Blog</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">About us</a>
          <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white">
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
