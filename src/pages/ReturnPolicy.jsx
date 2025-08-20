import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const ReturnPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className=" mx-20 px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <img src={logo} alt="United Auto Parts" className="w-32 h-24 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Return and Cancellation Policy</h1>
    
          </div>

          <div className=" text-lg max-w-none">
          United Auto parts is a place where you can buy the perfect Used and remanufactured engines & transmissions for your vehicle. We are aware of the irregular nature of the situation and the possibility that you could need to cancel an order on occasion. Don't worry, we've got you covered! You have the right to cancel your order at any moment before obtaining our official confirmation. <br /> <br />

We want to offer rapid and effective service, so orders cannot be canceled once they have been verified and processed for shipping. This is due to the speed with which we work to ensure that you receive your car parts. <br /> <br />

You can process your cancellation request on weekdays that is Monday to Friday between 9:00 AM to 6:00 PM. By doing this, we can reduce wait times and ensure that your things will be despatched quickly and delivered on schedule. This will allow you to relax knowing that it will arrive whether you are ordering a part to make a quick repair or just stocking up.
 <br /> <br />
We appreciate the faith you have in us when you make a purchase, and we want to reassure you that we have a detailed process in place to address any problems you might have with your order. Our policy allows authorized returns to be accepted for the majority of our products within 90 calendar days of the purchaser receiving the item. The product lines from Kool Vue, Replacement, Bolton Premiere, Evan Fischer, Garage Pro, StyleLine, N-Dure, Auto Trust, 4WD Pros, and Item Auto are among those represented in this timeline.
<br /> <br />
We ask that all returned items be unopened and in their original packaging to guarantee a seamless return procedure. This includes every component from the initial delivery. poorly mounted, poorly assembled, or damaged by user error components are not returnable.
<br /> <br />
Please be informed that United Auto parts disclaims liability for any additional costs incurred as a result of the installation or use of flawed or improper parts. This covers any associated labor charges, installation fees, towing charges, further repair charges, or costs for automobile rentals. Verify that all parts are acceptable and in good condition before starting any installs.
<br /> <br />
We respectfully ask that you inspect all packages as soon as you receive your order for any missing, damaged, or mistakenly included parts as part of our commitment to offering top-notch service. Please politely decline delivery of any broken components and make arrangements for the carrier to bring the item back to the sender as soon as feasible. Regardless of who is at fault, we sadly cannot accept liability for any missing, harmed, or inaccurate parts after 90 calendar days.
            
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

export default ReturnPolicy;
