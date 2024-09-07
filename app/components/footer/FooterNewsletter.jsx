import React from "react";
import EmailIcon from "@mui/icons-material/Email";

const FooterNewsletter = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-2xl font-semibold pb-6">Newsletter</div>
      <div className="text-xl font-semibold">
        Get the latest news other tips
      </div>
      <div className="py-4 px-7 bg-white text-gray-500 items-center text-xl font-semibold rounded-sm text-center flex">
        <div className="pr-2">
          <EmailIcon />
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-transparent text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ffb237] rounded-sm p-2"
          />
        </div>
      </div>

      <div className="py-4 px-7 bg-[#ffb237] text-xl font-semibold rounded-sm hover:bg-white text-center text-black transition-colors duration-1000 ease-in-out">
        subscribe
      </div>
      <div className="text-gray-400 text-lg">
        Looking to kick-off your project in the next 30-90 days ?
      </div>
    </div>
  );
};

export default FooterNewsletter;
