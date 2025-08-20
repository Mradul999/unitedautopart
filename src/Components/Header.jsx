import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const [policyOpen, setPolicyOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="shadow-lg shadow-gray-300/50 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/">
            <div className="flex items-center gap-2">
              <img src={logo} alt="United Auto Parts" className="w-30 h-22" />
              <span className="font-bold text-xl text-orange-600">
                UNITED AUTO PARTS
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 text-xl whitespace-nowrap">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                location.pathname === "/" 
                  ? "text-orange-600" 
                  : "text-gray-700 hover:text-orange-600"
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors ${
                location.pathname === "/about" 
                  ? "text-orange-600" 
                  : "text-gray-700 hover:text-orange-600"
              }`}
            >
              About Us
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setPolicyOpen(true)}
              onMouseLeave={() => setPolicyOpen(false)}
            >
              <button className={`font-medium flex items-center gap-1 whitespace-nowrap transition-colors ${
                location.pathname.includes('/return-policy') || 
                location.pathname.includes('/warranty-policy') || 
                location.pathname.includes('/privacy-policy')
                  ? "text-orange-600" 
                  : "text-gray-700 hover:text-orange-600"
              }`}>
                Our Policy <span className="text-sm">▼</span>
              </button>
              <div
                className={`absolute z-10 top-full left-0 bg-white shadow-lg rounded-md transform transition-all duration-300 ease-in-out origin-top ${
                  policyOpen
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <Link to="/return-policy" className="block px-4 py-2 hover:bg-orange-100">
                  Return and Cancellation Policy
                </Link>
                <Link to="/warranty-policy" className="block px-4 py-2 hover:bg-orange-100">
                  Warranty Policy
                </Link>
                <Link to="/privacy-policy" className="block px-4 py-2 hover:bg-orange-100">
                  Privacy Policy
                </Link>
              </div>
            </div>

            <Link 
              to="/products" 
              className={`font-medium transition-colors ${
                location.pathname === "/products" 
                  ? "text-orange-600" 
                  : "text-gray-700 hover:text-orange-600"
              }`}
            >
              All Parts
            </Link>

            <Link 
              to="/contact" 
              className={`font-medium transition-colors ${
                location.pathname === "/contact" 
                  ? "text-orange-600" 
                  : "text-gray-700 hover:text-orange-600"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          <div className="hidden lg:flex gap-3">
            <Link to="/auth" className="px-4 py-2 rounded-lg border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition duration-300">
              Login
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <div className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 mt-3">
            <Link 
              to="/" 
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                location.pathname === "/" 
                  ? "text-orange-600 bg-orange-50" 
                  : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                location.pathname === "/about" 
                  ? "text-orange-600 bg-orange-50" 
                  : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
              }`}
            >
              About Us
            </Link>
            <Link 
              to="/products" 
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                location.pathname === "/products" 
                  ? "text-orange-600 bg-orange-50" 
                  : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
              }`}
            >
              All Parts
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                location.pathname === "/contact" 
                  ? "text-orange-600 bg-orange-50" 
                  : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
              }`}
            >
              Contact Us
            </Link>

            <div className="border-t border-gray-200 pt-2 mt-2">
              <div className="px-3 py-2 text-sm font-medium text-gray-500 uppercase tracking-wider">
                Our Policy
              </div>
              <Link 
                to="/return-policy" 
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  location.pathname === "/return-policy" 
                    ? "text-orange-600 bg-orange-50" 
                    : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                }`}
              >
                Return and Cancellation Policy
              </Link>
              <Link 
                to="/warranty-policy" 
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  location.pathname === "/warranty-policy" 
                    ? "text-orange-600 bg-orange-50" 
                    : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                }`}
              >
                Warranty Policy
              </Link>
              <Link 
                to="/privacy-policy" 
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  location.pathname === "/privacy-policy" 
                    ? "text-orange-600 bg-orange-50" 
                    : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                }`}
              >
                Privacy Policy
              </Link>
            </div>

            <div className="border-t border-gray-200 pt-2 mt-2">
              <Link 
                to="/auth" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-orange-600 hover:bg-orange-50 transition-colors"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
