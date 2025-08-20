import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const AllProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const products = [
    {
      name: "Used Engine",
      description: "High-quality used engines tested and certified for reliability",
      image: "https://thumbs.dreamstime.com/b/car-engine-isolated-white-background-41884084.jpg",
      category: "Engine"
    },
    {
      name: "Used Transmission",
      description: "Pre-owned transmissions with comprehensive testing and warranty",
      image: "https://tse4.mm.bing.net/th/id/OIP.q1fAUumxfowVAvU-BX8LyQHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      category: "Transmission"
    },
    {
      name: "Used Transfer Case",
      description: "Reliable transfer cases for 4WD and AWD vehicles",
      image: "https://tse1.mm.bing.net/th/id/OIP.zDGC6wixAPoSx_JbxOwViAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      category: "Drivetrain"
    },
    {
      name: "Used Steering Column",
      description: "Quality steering columns with safety features intact",
      image: "https://grimmermotors.co.nz/wp-content/uploads/2018/05/steering-column-1.jpg",
      category: "Steering"
    },
    {
      name: "Used Instrument Cluster",
      description: "Functional instrument clusters with accurate readings",
      image: "https://tse2.mm.bing.net/th/id/OIP.RJ35_MM7_CiczdJhgDeyjgHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      category: "Electronics"
    },
    {
      name: "Used Drive Shaft",
      description: "Durable drive shafts for smooth power transmission",
      image: "https://tse2.mm.bing.net/th/id/OIP.5rIDs4a6ghU57Mrf5puAlgHaEN?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      category: "Drivetrain"
    },
    {
      name: "Used Car Airbag",
      description: "Safety-certified airbags for vehicle protection",
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=400&h=300&fit=crop",
      category: "Safety"
    },
    {
      name: "Used ABS Module",
      description: "Anti-lock braking system modules for enhanced safety",
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=400&h=300&fit=crop",
      category: "Brakes"
    },
    {
      name: "Used Cylinder Head",
      description: "Precision-engineered cylinder heads for optimal performance",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      category: "Engine"
    },
    {
      name: "Used Differentials",
      description: "Quality differentials for smooth power distribution",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop",
      category: "Drivetrain"
    },
    {
      name: "Used Struts",
      description: "Reliable struts for comfortable ride and handling",
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=400&h=300&fit=crop",
      category: "Suspension"
    },
    {
      name: "Used Alternators",
      description: "Tested alternators for reliable electrical power",
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=400&h=300&fit=crop",
      category: "Electrical"
    },
    {
      name: "Used Bumpers",
      description: "Quality bumpers for vehicle protection and aesthetics",
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=400&h=300&fit=crop",
      category: "Body"
    },
    {
      name: "Used Radiators",
      description: "Efficient radiators for optimal engine cooling",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      category: "Cooling"
    },
    {
      name: "Used Turbo",
      description: "Performance turbochargers for enhanced power output",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      category: "Performance"
    },
    {
      name: "Used Axle",
      description: "Durable axles for reliable power transmission",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop",
      category: "Drivetrain"
    }
  ];

  const categories = [...new Set(products.map(product => product.category))];

  const filteredProducts = selectedCategory === "All Products" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 px-4 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">All Products</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Discover our comprehensive selection of high-quality used auto parts. 
            Each product is thoroughly tested and comes with our quality assurance guarantee.
          </p>
        </div>

        <div className="mb-6 sm:mb-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            <button 
              onClick={() => setSelectedCategory("All Products")}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium transition-colors ${
                selectedCategory === "All Products"
                  ? "bg-orange-600 text-white"
                  : "bg-white text-gray-700 hover:bg-orange-100 hover:text-orange-600 border border-gray-200"
              }`}
            >
              All Products
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-orange-600 text-white"
                    : "bg-white text-gray-700 hover:bg-orange-100 hover:text-orange-600 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 group border-2 border-transparent hover:border-orange-300"
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 sm:h-48 object-cover transition-transform duration-300"
                />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className="bg-orange-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    {product.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Tested
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Warranty
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Quality Assured
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <button className="flex-1 bg-orange-600 text-white py-2 px-3 sm:px-4 rounded-lg text-sm sm:text-base font-medium hover:bg-orange-700 transition-colors">
                    View Details
                  </button>
                  <button className="flex-1 border border-orange-600 text-orange-600 py-2 px-3 sm:px-4 rounded-lg text-sm sm:text-base font-medium hover:bg-orange-50 transition-colors">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-6 sm:p-8 text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Need a Specific Part?</h2>
            <p className="text-lg sm:text-xl mb-4 sm:mb-6 opacity-90">
              Can't find what you're looking for? Contact our expert team for assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-orange-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
              <button className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
                Call Now
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 text-center">
          <Link to="/" className="text-orange-600 hover:text-orange-500 font-medium">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
