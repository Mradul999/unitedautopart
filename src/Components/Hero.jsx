import React from "react";
import heroImage from "../assets/auto1.png";
import bgImage from "../assets/image.png";
import iconBan from "../assets/icon-ban (1).png";

const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <img src={bgImage} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-orange-800 opacity-40" />
      <div className="relative max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl text-white font-extrabold leading-snug text-gray-900">
            United Auto parts BRINGS EXCLUSIVE USED & REMANUFACTURED AUTO PARTS FOR YOUR CAR
          </h1>
          <p className="text-lg md:text-xl text-white font-semibold">
            Unleash Peak Performance and Efficiency with The Affordable Used Car Parts..
          </p>
          <img src={iconBan} alt="Icon" className="w-full h-30 mt-4" />
        </div>
        <div className="w-full flex justify-center md:justify-end">
          <img src={heroImage} alt="Auto parts" className="w-full max-w-md md:max-w-lg h-auto object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Hero;


