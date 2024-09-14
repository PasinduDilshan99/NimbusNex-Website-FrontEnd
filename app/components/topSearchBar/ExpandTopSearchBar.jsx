import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const ExpandTopSearchBar = () => {
  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search Here...."
        className="w-full py-2 px-7 rounded-xl"
      />
      <div className="scale-150 m-2">
        <SearchIcon />
      </div>
    </div>
  );
};

export default ExpandTopSearchBar;
