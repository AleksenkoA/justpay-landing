import { useState } from 'react';
import logo from '../assets/logo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white text-black">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <button
            className="md:hidden text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Navigation - Left */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-black hover:text-gray-600 transition">Features</a>
            <a href="#how-it-works" className="text-black hover:text-gray-600 transition">How it works</a>
            <a href="#business" className="text-black hover:text-gray-600 transition">Business</a>
          </div>

          {/* Logo - Center */}
          <div className="flex-1 flex justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
            <img src={logo} alt="JustPay.cards" className="h-8" />
          </div>

          {/* Login Button - Right */}
          <div className="flex items-center">
            <button className="bg-justpay-green text-white px-6 py-2 rounded-2xl font-semibold hover:bg-green-700 transition">
              Login
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <a href="#features" className="text-black hover:text-gray-600 transition">Features</a>
              <a href="#how-it-works" className="text-black hover:text-gray-600 transition">How it works</a>
              <a href="#business" className="text-black hover:text-gray-600 transition">Business</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

