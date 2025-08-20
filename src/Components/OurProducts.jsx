import React from "react";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";

const OurProducts = () => {
  const products = [
    {
      image: product1,
      category: "Engine (car)",
      name: "2011 AUDI A4 ENGINE",
      stockId: "2687",
      mileage: "129K",
      inStock: true
    },
    {
      image: product2,
      category: "Engine (car)",
      name: "2008 BMW 1281 ENGINE",
      stockId: "3456",
      mileage: "81K",
      inStock: true
    },
    {
      image: product3,
      category: "Transmission",
      name: "1971 BUICK TRANSMISSION",
      stockId: "3424",
      mileage: null,
      inStock: true
    },
    {
      image: product4,
      category: "Airbag",
      name: "2009 BMW AIRBAG",
      stockId: "445",
      mileage: null,
      inStock: true
    }
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">OUR PRODUCTS</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 hover:bg-orange-50 transition-all duration-300 ease-in-out cursor-pointer group">
              <div className="flex flex-col md:flex-row">
                <div className="relative md:w-1/2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 md:h-full object-contain"
                  />
                  {product.inStock && (
                    <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs font-semibold rounded shadow-md">
                      IN STOCK
                    </div>
                  )}
                  <div className="absolute top-2 right-2 bg-gray-500 text-white px-2 py-1 text-xs rounded shadow-md">
                    {product.category}
                  </div>
                </div>
                
                <div className="p-6 md:w-1/2 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">{product.name}</h3>
                    <div className="space-y-1 text-gray-600 mb-4">
                      <p className="hover:text-gray-800 transition-colors duration-200">Stock ID: {product.stockId}</p>
                      {product.mileage && <p className="hover:text-gray-800 transition-colors duration-200">Mileage: {product.mileage}</p>}
                    </div>
                  </div>
                  <button className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg font-medium shadow-md">
                    Call Us Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
