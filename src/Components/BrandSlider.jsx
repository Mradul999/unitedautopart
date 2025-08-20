import React, { useState } from "react";

const BrandSlider = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const brands = [
    {
      name: "Jaguar",
      logo: "https://tse4.mm.bing.net/th/id/OIP.yHsGqy5bGJA34Gq30p4T9QHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      name: "Honda",
      logo: "https://www.freepnglogos.com/uploads/honda-logo-png/honda-logo-meaning-and-history-honda-symbol-1.png"
    },
    {
      name: "BMW",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png"
    },
    {
      name: "Toyota",
      logo: "https://www.freepnglogos.com/uploads/toyota-logo-png/toyota-logos-download-image-15.png"
    },
    {
      name: "Ford",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png"
    },
    {
      name: "Dodge",
      logo: "https://www.freepnglogos.com/uploads/cummins-png-logo/dodge-cummins-png-logo-28.png"
    },
    {
      name: "Mercedes",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/2560px-Mercedes-Logo.svg.png"
    },
    {
      name: "Audi",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Audi-Logo_2016.svg/2560px-Audi-Logo_2016.svg.png"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="w-full px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">FIND USED AUTO PARTS BY BRAND</h2>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex space-x-12 animate-scroll">
            {[...brands, ...brands].map((brand, index) => (
              <div 
                key={index}
                className={`flex-shrink-0 w-48 h-40 bg-white border border-gray-200 rounded-lg shadow-md flex items-center justify-center transition-all duration-300 cursor-pointer ${
                  hoveredIndex === index 
                    ? 'border-orange-300 border-2' 
                    : 'hover:border-orange-300 hover:border-2'
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain  transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default BrandSlider;
