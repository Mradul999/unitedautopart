import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const WarrantyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className=" mx-20 px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <img src={logo} alt="United Auto Parts" className="w-32 h-24 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Warranty Policy</h1>
          </div>

          <div className="text-lg max-w-none">
            Our products at United Auto parts are more than simply auto parts; they stand for our unwavering commitment to excellence, dependability, and customer satisfaction. We are conscious of the fact that each item you buy from us entails a financial investment in your car that needs to be safeguarded and guaranteed. <br /> <br />

            While dominating the car parts industry, we consistently strive to uphold the highest levels of customer satisfaction. This passion is shown in every part, accessory, or assembly that is carefully selected and provided from our facilities. Our quality assurance seal, which attests to our dedication to quality control and demonstrates how much we respect each and every one of our customers, is included with every product. Additionally, our warranty is not merely a run-down of legalese or a criteria checklist. It is a tangible illustration of our commitment to our customers and our promise to stand behind and support our goods. This method ensures that every time you turn the ignition key, the car will run smoothly and dependably without a single component breaking down. <br /> <br />

            Each product in our inventory is meticulously tested and inspected before being packaged for delivery in order to uphold this assurance. Although strict, this meticulous method is not impervious to rare mistakes. Since we are aware of this, we have assembled a responsive, dedicated staff to assist you should the unlikely happen. The first line of defense is to repair any damaged components. However, if a replacement is not feasible for any reason, we will fully reimburse the full amount you were charged for your order. Additionally, practically all of the auto parts we provide are covered by this pledge, providing our customers with a high level of assurance. <br /> <br />

            When it comes to the warranty policy, we are upfront. We want to be clear that our warranty does not include labor costs for setting up or taking down things. It also does not pay for additional costs like towing fees, rental car fees, or additional repairs needed as a result of utilizing subpar or incorrect components. Instead of just selling parts, our business wants to build relationships based on trust and client pleasure. The warranty policy at United Auto parts is a clear representation of this company idea. To provide our clients with the best service possible, we keep helping and supporting them even after the deal is completed.
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <Link to="/" className="text-orange-600 hover:text-orange-500 font-medium">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarrantyPolicy;
