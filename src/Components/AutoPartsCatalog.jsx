import React from "react";

const AutoPartsCatalog = () => {
  const autoParts = [
    {
      id: "01",
      title: "USED ENGINE",
      image: "https://usedautopartsdenver.co/userfiles/2403/images/engines_LUH_1_lg.jpg",
      description: "High-quality used engines with turbochargers and complete wiring systems"
    },
    {
      id: "02",
      title: "USED TRANSMISSION",
      image: "https://usedautopartsdenver.co/userfiles/2403/images/Installing-Used%20Transmissions%20Denver.jpeg?t=20230301020352",
      description: "Automatic transmissions with P, R, N, D, 3, 2, L gear selectors"
    },
    {
      id: "03",
      title: "USED TRANSFER CASE",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      description: "Complete transfer cases with internal gears and chain mechanisms"
    },
    {
      id: "04",
      title: "USED INSTRUMENT CLUSTER",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      description: "Digital dashboards with speedometers, tachometers, and warning lights"
    },
    {
      id: "05",
      title: "USED STEERING COLUMN",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      description: "Complete steering systems with wheels and dashboard integration"
    },
    {
      id: "06",
      title: "USED DRIVE SHAFT",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      description: "Drive shafts connected to differentials for power transmission"
    },
    {
      id: "07",
      title: "USED AIRBAG",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      description: "Safety airbag systems for passenger protection"
    },
    {
      id: "08",
      title: "USED ABS MODULE",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      description: "Anti-lock braking system modules with intricate gear assemblies"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            OUR USED & REMANUFACTURED AUTO PARTS
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Uncover an extensive range of unmatched quality used auto parts online at our store, tailored to meet specific vehicle needs. 
            We take pride in offering a diverse selection of reliable, thoroughly inspected, and expertly sourced{" "}
            <span className="text-blue-600 font-semibold">used engines</span>,{" "}
            <span className="text-blue-600 font-semibold">transmissions</span> and other components that upscale car performance and longevity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {autoParts.map((part) => (
            <div key={part.id} className="relative group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={part.image} 
                  alt={part.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white font-bold text-3xl w-12 h-12 rounded-full flex items-center justify-center">
                  {part.id}
                </div>
                
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-bold text-lg">{part.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutoPartsCatalog;
