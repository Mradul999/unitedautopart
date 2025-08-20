import React from "react";
import AutoPartsCatalog from "../Components/AutoPartsCatalog";
import aboutUsImage from "../assets/about-us-image.png";

const AboutUs = () => {

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">ABOUT US</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">OUR USED & REMANUFACTURED AUTO PARTS</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            We offer unmatched quality used auto parts online, including used engines, transmissions and other components that upscale car performance and longevity.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                We are pleased to welcome you to <strong>United Auto parts</strong>, where we are committed to offering you the best{" "}
                <span className="text-blue-600 font-semibold">used auto parts</span> for all of your vehicles, including automobiles, vans, and sports utility vehicles. 
                You can rely on us to give you the most value for your money thanks to our unrivaled warranty and pricing.
              </p>
              
              <p>
                Our convenient hours of operation demonstrate our dedication to your happiness. We are available to help you Monday through Friday and our website is open around-the-clock for your convenience. 
                We are confident that you will find what you need thanks to our vast online catalog, which features thousands of parts. Shop with us today and let us help you keep your car running smoothly and effectively!
              </p>
              
              <p>
                At <strong>United Auto parts</strong>, we are aware that buying a car is an expensive investment and that maintaining your car, truck, or SUV can be just as expensive. 
                We offer a lot of auto parts available for purchase for your convenience. You may count on us to meet all of your substitute demands at fair prices. 
                Our sales and customer service representatives combine their extensive training, experience, and knowledge with the most recent innovation to locate the part you require as quickly as is reasonably possible.
              </p>
              
              <p>
                Our goal is to provide the best <strong>original equipment manufacturer (OEM)</strong> parts to car specialty businesses and customers. 
                We have pledged to maintain our market leadership in a steady, financially sound, and morally upright manner.
              </p>
            </div>
          </div>

          <div className="lg:col-span-1 flex justify-center">
            <img src={aboutUsImage} alt="About United Auto Parts" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
      
      <AutoPartsCatalog />
    </section>
  );
};

export default AboutUs;
