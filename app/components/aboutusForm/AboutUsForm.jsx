import React from "react";

const AboutUsForm = () => {
  return (
    <div className="lg:mx-10">
      <div
        style={{
          backgroundImage: `url('/contact-page-pattern.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-16 pb-8 px-10">
          <div>
            <input
              type="text"
              placeholder="NimbusNex"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Mobile Number"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <textarea
              placeholder="Your Message Here"
              className="w-full p-2 border border-gray-300 rounded h-24 resize-y"
            ></textarea>
          </div>
        </div>
        <div className="flex justify-center pb-10">
          <div className="py-4 px-7 bg-black text-white mx-4 rounded-xl hover:bg-[#ffb237] transition-colors duration-1000 ease-in-out hover:scale-105">
            Send A Message
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsForm;
