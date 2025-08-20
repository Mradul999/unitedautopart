import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: "🔧",
      title: "HIGH-QUALITY SELECTION",
      description: "At United Auto parts, we provide quality used auto parts for all the make and model numbers at affordable prices. We offer a vast range of used car parts for sale online that meet the original specifications. Just and relax."
    },
    {
      icon: "⚙️",
      title: "AFFORDABLE PRICES",
      description: "We know that automotive care is expensive. That's why we operate diligently, where we provide affordable used car parts at low prices. All our used auto parts for sale are easy on your pocket."
    },
    {
      icon: "🛞",
      title: "EXPERT ADVICE",
      description: "Our staff members are not only experienced; they are also passionate about assisting used car parts online."
    },
    {
      icon: "🛢️",
      title: "EASY TO REACH",
      description: "With our global headquarters in California, we provide United Auto parts everywhere. Thanks to our efficient shipping network, no matter where you are, you will always receive the used car auto parts for sale online at your doorstep."
    },
    {
      icon: "🔋",
      title: "SUSTAINABILITY FOCUS",
      description: "We actively support a more responsible and sustainable automobile sector by focusing on used OEM used car parts online. We are committed to encouraging environmentally friendly methods and waste reduction because we value environmental stewardship."
    },
    {
      icon: "🚗",
      title: "CUSTOMER-CENTRIC APPROACH",
      description: "Your satisfaction is the topmost priority. We offer a seamless and individualized experience, from perusing our catalog to completing a purchase and receiving after-sales service."
    },
    {
      icon: "🔋",
      title: "RELIABILITY AND TRUST",
      description: "With millions of happy customers, United Auto parts has made a name for itself in the automobile parts market as a company that can be trusted."
    },
    {
      icon: "🚗",
      title: "UNCOMPROMISING QUALITY",
      description: "We firmly believe that quality should never be compromised. Our affordable used car parts guarantee top-notch performance, ensuring the vehicle runs smoothly and reliably."
    }
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">WHY CHOOSE US?</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            At <span className="text-orange-600 font-semibold">United Auto parts</span>, we are committed to providing exceptional service and quality products to our customers. Our customer-centric approach ensures that your satisfaction is our top priority.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-xl hover:scale-105 hover:bg-orange-50 transition-all duration-300 ease-in-out cursor-pointer">
              <div className="text-5xl mb-6 text-orange-600">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase">{feature.title}</h3>
              <p className="text-gray-700 text-base leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
