import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const TopSearchBar = () => {
  return (
    <div className="relative h-[80vh] flex justify-center items-center">
      <div className="absolute top-0 left-0 w-full h-full bg-gray-100 backdrop-blur-md z-0"></div>

      <div className="relative flex w-[50vh] justify-center items-center border-2 z-10 bg-white">
        <input
          type="text"
          placeholder="Search Here....."
          className="w-[40%] p-2 rounded grow"
        />
        <div className="bg-[#ffb237] h-full p-2">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};

export default TopSearchBar;
