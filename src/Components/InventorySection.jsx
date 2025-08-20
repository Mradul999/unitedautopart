import React from "react";

const InventorySection = () => {
  return (
    <section className="bg-white py-16">
      <div className="w-full px-8 md:px-16">
        <div className="grid md:grid-cols-5 min-h-[400px] gap-8">
          <div className="md:col-span-3 bg-white p-8 md:p-12 flex  items-center">
            <div className="text-gray-900">
              <p className="text-lg font-semibold leading-relaxed mb-6">
                We acknowledge the distinct requirements of various individuals and entities, including 
                professional dealers, discerning customers, service stations, and weekend automobile 
                enthusiasts. The United Auto parts offers a wide range of{" "}
                <span className="text-blue-600 font-semibold">used engines</span>,{" "}
                <span className="text-blue-600 font-semibold">used transmissions</span>, and other used 
                auto parts, catering to make and models of vehicles, beyond geographical domains. Our 
                distinguishing factor in the highly competitive automotive sector gives us a steadfast 
                dedication to ensuring high-quality standards. Every auto part undergoes a comprehensive 
                inspection and testing procedure, guaranteeing optimal performance, extended lifespan, 
                and utmost customer contentment. Our approach's market excellence is further demonstrated 
                by exclusive warranty, which lasts up to 5 years. This warranty is a physical manifestation 
                of our unwavering belief in the quality and reliability of the items we provide. By 
                selecting our company, customers simply don't acquire a product component but investing 
                in a commitment to excellence, dependability, and outstanding customer service.
              </p>
              <p className="text-lg font-semibold leading-relaxed">
                Trust us to fuel your enthusiasm for automobiles and witness the transformative impact 
                that our extensive knowledge and unwavering commitment can bring about.
              </p>
            </div>
          </div>
          
          <div className="md:col-span-2 bg-orange-600 p-8 md:p-12 flex mt-8   w-full h-110 mx-auto">
            <div className="text-white text-center">
              <h2 className="text-4xl uppercase text-start   font-semibold mb-4 leading-tight">
                Comprehensive  Parts Inventory
              </h2>
              <p className="text-2xl text-start font-semibold leading-relaxed">
                We maintain an extensive inventory of engine parts, including but not limited to pistons, 
                crankshafts, camshafts, gaskets, valves, bearings, and more. Our wide selection ensures 
                that you find the exact parts you need for various vehicle makes and models.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InventorySection;
