import React from "react";
import engineImage from "../assets/engine.png";

const ReliableSource = () => {
  return (
    <section className="bg-white">
      <div className="w-full">
        <div className="grid md:grid-cols-2 min-h-[300px]">
          <div className="relative">
            <img
              src={engineImage}
              alt="Car Engine"
              className="w-full h-[300px] "
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              
            </div>
          </div>
          
          <div className="bg-gray-100 p-8 md:p-12 flex items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 uppercase leading-tight">
                YOUR RELIABLE SOURCE FOR HASSLE-FREE AUTOMOTIVE PARTS
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                At United Auto Parts, we are committed to providing you with the highest quality used auto parts 
                backed by exceptional customer service. Our extensive network and years of experience ensure 
                that you get reliable, tested components that meet or exceed OEM specifications. We understand 
                the importance of keeping your vehicle running smoothly without breaking the bank.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReliableSource;
