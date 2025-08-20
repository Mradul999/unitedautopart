import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className=" mx-20 px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <img src={logo} alt="United Auto Parts" className="w-32 h-24 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          </div>

          <div className="text-lg max-w-none">
            The website https://unitedautopart.com/ (hereafter referred to as "Service") is run by United Auto parts ("us", "we," or "our"). The choices you have regarding the personal data we collect, use, and disclose when you use our service are described in this privacy statement (the "Policy"). We are aware of the gravity of our responsibility as the entrusted custodians of your personal information. We value our relationship with you and are grateful for your trust in us when you choose to share your personal information. We must therefore give a clear and thorough justification of our data collecting, usage, and security procedures. <br /> <br />

            This privacy statement aims to explain the procedures we use and the purposes for which we collect and use your personal data (as defined herein). Before using our Site or disclosing personal information, you must carefully read and understand this document. We retain the right to change the terms of this privacy policy at any time. If such changes take place, we will let you know by posting an updated Privacy Policy on our website that includes the date of the most recent update. Your continued use of the Site after these revisions suggests that you accept these changes. Every time you visit our Site, we encourage you to periodically review our Privacy Policy to remain informed of any updates and to make sure you comprehend how your personal information will be handled. Please see the section below under "Changes to this Privacy Policy" for more information on the most current updates. <br /> <br />

            We emphasize the need to carefully read this Privacy Policy. Your use of our Site, including any browsing or use of its services, constitutes your acceptance of this Privacy Policy, all modifications thereto, and all other terms, policies, and disclosures that are referenced herein. Your actual use of the site or its services serves as evidence of your acceptance, and we take your continuous use of the site to be a consistent endorsement of this privacy statement. <br /> <br />

            We are adamant about the need of having direct lines of communication with our users. Your comments, suggestions, and questions are appreciated and help us improve our services. Your faith in us goes beyond our policy document since we are utterly dedicated to resolving your issues. We look forward to building a long-lasting partnership with you that benefits both of us while assuring you that your privacy will always come first. More than just a policy, it represents our commitment to uphold, protect, and respect your privacy across all of our dealings and interactions. Your privacy is a core value to us and the foundation upon which our services are constructed.
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

export default PrivacyPolicy;
