import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#1A2035] text-white">
      <div className="w-full px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <img src={logo} alt="United Auto Parts Logo" className="w-40 h-30 mr-4" />
                <div>
                  <div className="text-orange-500 font-semibold text-xl">UNITED</div>
                  <div className="text-white font-semibold text-xl">AUTO PARTS</div>
                  <div className="flex text-orange-500 text-base mt-1">
                    ★ ★ ★
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-gray-300 text-base font-semibold leading-relaxed mb-6">
              Welcome to United Auto parts, your one-stop store for replacement high-quality used OEM automotive parts and accessories.
            </p>
            
            <div className="mb-4">
              <p className="text-white text-base font-semibold mb-2">Support center 24/7</p>
              <div className="flex items-center">
                <div className="bg-blue-400 rounded-full p-2 mr-3">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <span className="text-orange-500 font-semibold text-xl">+12058582195</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold text-xl uppercase mb-6">About Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-orange-500 mr-3"></div>
                <a href="#" className="text-gray-300 hover:text-white transition-colors font-semibold text-base">About Us</a>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-orange-500 mr-3"></div>
                <a href="#" className="text-gray-300 hover:text-white transition-colors font-semibold text-base">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold text-xl uppercase mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div>
                <p className="text-white text-base font-semibold mb-1">Address</p>
                <p className="text-gray-300 text-base font-semibold">
                  2320 LOWER WETUMPKA RD, MONTGOMERY, AL 36110, UNITED STATES.
                </p>
              </div>
              <div>
                <p className="text-white text-base font-semibold mb-1">Phone Number</p>
                <p className="text-gray-300 text-base font-semibold">+12058582195</p>
              </div>
              <div>
                <p className="text-white text-base font-semibold mb-1">Email ID</p>
                <p className="text-gray-300 text-base font-semibold">INFO@UNITEDAUTOPART.COM</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="mb-8">
              <h3 className="text-white font-semibold text-xl uppercase mb-4">We Accept</h3>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white rounded p-2 flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xs">MC</span>
                </div>
                <div className="bg-white rounded p-2 flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xs">VENMO</span>
                </div>
                <div className="bg-white rounded p-2 flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xs">AMEX</span>
                </div>
                <div className="bg-white rounded p-2 flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-xs">DISCOVER</span>
                </div>
                <div className="bg-white rounded p-2 flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xs">ZELLE</span>
                </div>
                <div className="bg-white rounded p-2 flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xs">VISA</span>
                </div>
                <div className="bg-white rounded p-2 flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xs">G PAY</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold text-xl uppercase mb-4">Shipping Partners</h3>
              <div className="space-y-3">
                <div className="bg-white rounded p-3 flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-sm">FedEx</span>
                </div>
                <div className="bg-white rounded p-3 flex items-center justify-center">
                  <span className="text-yellow-600 font-bold text-xs">UPS WE ❤️ LOGISTICS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 py-4">
        <div className="w-full px-4">
          <p className="text-white text-center text-lg">
            Copyrights © 1988 All right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
