import React from "react";
import AboutUsContactDetails from "./AboutUsContactDetails";
import AboutUsForm from "./AboutUsForm";

const AboutUsDetails = () => {
  return (
    <div className="flex flex-col items-center my-16 min-w-[80%] mb-32">
      <div className="text-center text-5xl font-bold py-4 w-full ">
        Please dont hesitate to contact us
       with any inquiries or messages.
      </div>
      <div className="text-lg text-gray-600 py-4">
        You can also reach out to us by phone or email are many variations
      </div>
      <div className="w-[75%]">
        <AboutUsContactDetails />
        <AboutUsForm />
      </div>
    </div>
  );
};

export default AboutUsDetails;
