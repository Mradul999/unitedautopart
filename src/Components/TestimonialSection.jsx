import React, { useState } from "react";

const TestimonialSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const testimonials = [
    {
      id: 1,
      title: "MUCH SATISFIED WITH UNITED AUTO PARTS STORE",
      body: "I recently purchased a used anti-lock brake system from United Auto Parts and I couldn't be more satisfied. The quality was exceptional and the extended warranty gave me complete peace of mind. Highly recommend their services!",
      author: "KAREN T.",
      rating: 4
    },
    {
      id: 2,
      title: "FIRST-CLASS SERVICE",
      body: "The specialists at United Auto Parts helped me locate a rare axle component for my vintage automobile. Their understanding of my needs, product quality, and affordable pricing made them my new preferred provider.",
      author: "TIM W.",
      rating: 5
    },
    {
      id: 3,
      title: "HIGHLY RECOMMENDED",
      body: "United Auto Parts assisted me with an automotive predicament by finding a used steering column. Swift supply and exceptional installation assistance. Purchasing here feels like building a relationship. Very satisfied!",
      author: "NANCY G",
      rating: 5
    },
    {
      id: 4,
      title: "EXCELLENT QUALITY PARTS",
      body: "Found exactly what I needed for my engine rebuild. The used engine parts were in perfect condition and the customer service was outstanding. Will definitely return for future needs.",
      author: "MIKE R.",
      rating: 5
    },
    {
      id: 5,
      title: "RELIABLE AND TRUSTWORTHY",
      body: "Been buying from United Auto Parts for years. Their inventory is extensive and their parts are always reliable. The warranty coverage gives me confidence in every purchase.",
      author: "SARAH L.",
      rating: 5
    },
    {
      id: 6,
      title: "GREAT VALUE FOR MONEY",
      body: "Purchased a used transmission that works perfectly. The price was unbeatable and the quality exceeded my expectations. United Auto Parts is my go-to for all auto parts needs.",
      author: "DAVID K.",
      rating: 4
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={`text-xl ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="w-full px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-orange-600">CUSTOMER REVIEWS</span>
            <span className="text-gray-900"> FOR OUR USED AUTO PARTS SERVICE</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We would like you to please take a look at our customer reviews to see how much our customers are satisfied with our Used auto parts service.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className={`flex-shrink-0 w-96 md:w-[28rem] mx-4 bg-white rounded-lg shadow-lg p-6 relative transition-all duration-300 ease-in-out border-2 ${
                  hoveredIndex === index ? 'border-orange-300' : 'border-transparent'
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="absolute -top-3 -left-3 text-orange-600 text-4xl font-bold">
                  "
                </div>
                
                <div className="mt-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                    {testimonial.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {testimonial.body}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-800">
                      - {testimonial.author}
                    </span>
                    <div className="flex">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
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
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;
