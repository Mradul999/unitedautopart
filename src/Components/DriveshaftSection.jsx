import React from "react";
import mechanicImage from "../assets/mechanic.jpg";

const DriveshaftSection = () => {
  return (
    <section className="bg-white">
      <div className="w-full">
        <div className="grid md:grid-cols-2 min-h-[400px]">
          <div className="bg-orange-700 p-8 md:p-12 flex items-center">
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 uppercase">
                BUY USED DRIVESHAFT REAR
              </h2>
              <p className="text-lg leading-relaxed">
                <strong>United Auto parts</strong> is your one-stop store for replacement top-notch{" "}
                <strong>used & rebuilt auto parts and accessories</strong>. Located in the United States, 
                we are a trustworthy company that provides suitable and high-quality used car body parts 
                without burning a hole in the pocket. We provide{" "}
                <strong>OEM-used auto parts</strong> and our dedication to quality and affordability 
                makes us the preferred choice for <strong>United Auto parts</strong>.
              </p>
            </div>
          </div>
          <div>
            <img
              src={mechanicImage}
              alt="Mechanic working on car"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DriveshaftSection;
