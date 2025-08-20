import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
        <div className="text-white">
          <h2 className="text-2xl font-bold mb-1">GET PARTS FOR YOUR CAR TODAY.</h2>
          <p className="text-lg">ALL ITEMS AVAILABLE</p>
        </div>
        <button className="px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition duration-300">
          Call us to get 10% off
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
