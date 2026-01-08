import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-justpay-green text-white">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Logo */}
          <div className="flex-1 md:flex-none text-center md:text-left">
            <h1 className="text-xl font-bold">JustPay.cards</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 flex-1 justify-center">
            <a href="#features" className="hover:text-gray-200 transition">Features</a>
            <a href="#how-it-works" className="hover:text-gray-200 transition">How it works</a>
            <a href="#about" className="hover:text-gray-200 transition">About us</a>
            <a href="#contact" className="hover:text-gray-200 transition">Contact</a>
          </div>

          {/* Login Button */}
          <div className="flex items-center">
            <button className="px-4 py-2 text-white hover:text-gray-200 transition">
              Login
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <a href="#features" className="hover:text-gray-200 transition">Features</a>
              <a href="#how-it-works" className="hover:text-gray-200 transition">How it works</a>
              <a href="#about" className="hover:text-gray-200 transition">About us</a>
              <a href="#contact" className="hover:text-gray-200 transition">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

