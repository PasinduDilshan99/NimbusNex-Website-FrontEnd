import WhiteBottomToTop from "@/app/components/buttons/WhiteBottomToTop";
import WhiteTopToBottom from "@/app/components/buttons/WhiteTopToBottom";
import YellowBottomToTop from "@/app/components/buttons/YellowBottomTOTop";
import YellowTopToBottom from "@/app/components/buttons/YellowBottomTOTop";
import Carousel from "@/app/components/Carosuel";
import React from "react";

const page = () => {
  return (
    <div className="relative">
      <Carousel />
      <p className="aa">ABCDEF GHIJK</p>
      <WhiteTopToBottom />
      <WhiteBottomToTop />
      <YellowTopToBottom />
      <YellowBottomToTop />
    </div>
  );
};

export default page;
