import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="relative bg-gradient-to-r from-gray-100 to-gray-200 py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">CONTACT US</h1>
          <div className="flex items-center justify-center space-x-2 text-gray-700">
            <span>Home</span>
            <span>/</span>
            <span>Contact Us</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            NEEDS HELP? LET'S GET IN TOUCH
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-gray-800 rounded-lg p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full bg-gradient-to-br from-orange-500 to-red-600"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-8">GET IN TOUCH</h3>
              
              <div className="mb-8">
                <div className="flex items-start mb-4">
                  <div className="bg-red-600 rounded-full p-3 mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">OUR LOCATION</h4>
                    <p className="text-gray-300 leading-relaxed">
                      2320 Lower Wetumpka Rd, Montgomery, AL 36110, United States.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-start mb-4">
                    <div className="bg-red-600 rounded-full p-3 mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">CONTACT US</h4>
                      <p className="text-orange-400 font-semibold text-lg">+12058582195</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start mb-4">
                    <div className="bg-red-600 rounded-full p-3 mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">CONTACT EMAIL</h4>
                      <p className="text-orange-400 font-semibold">info@unitedautopart.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors bg-white"
                    required
                  >
                    <option value="">Select Service</option>
                    <option value="used-engine">Used Engine</option>
                    <option value="used-transmission">Used Transmission</option>
                    <option value="used-transfer-case">Used Transfer Case</option>
                    <option value="used-instrument-cluster">Used Instrument Cluster</option>
                    <option value="used-steering-column">Used Steering Column</option>
                    <option value="used-drive-shaft">Used Drive Shaft</option>
                    <option value="used-airbag">Used Airbag</option>
                    <option value="used-abs-module">Used ABS Module</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors resize-none"
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default ContactUs;
