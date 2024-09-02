import React from "react";
import CompanyOverviewContent from "./companyOverviewComponents/CompanyOverviewContent";
import CompanyOverviewImages from "./companyOverviewComponents/CompanyOverviewImages";

const CompanyOverview = () => {
  return (
    <div className="flex flex-col lg:flex-row md:justify-center md:items-center mt-16 my-5 py-10">
      <div>
        <CompanyOverviewImages />
      </div>
      <div>
        <CompanyOverviewContent />
      </div>
    </div>
  );
};

export default CompanyOverview;
