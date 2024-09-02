import React from "react";
import AccessibleIcon from "@mui/icons-material/Accessible";
import AccessibleForwardIcon from "@mui/icons-material/AccessibleForward";
import CompanyOverviewService from "./CompanyOverviewService";

const CompanyOverviewContent = () => {
  const services = [
    {
      id: 1,
      icon: AccessibleForwardIcon,
      title: "Tech Solution",
      text: "There are many variations of passages of lorem",
    },
    {
      id: 2,
      icon: AccessibleIcon,
      title: "Quick support",
      text: "There are many variations of passages of lorem",
    },
  ];
  return (
    <div>
      <div>introduce Company</div>
      <div>Our Company specializesin IT Solutions</div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, Heres what to
        know about how to start a consulting business
      </div>
      <div>
        <div className="flex items-center">
          <div className="flex flex-col">
            <div>
              <CompanyOverviewService
                props={{
                  icon: services[0].icon,
                  title: services[0].title,
                  text: services[0].text,
                }}
              />
            </div>
            <hr />
            <div>
              <div>
                <CompanyOverviewService
                  props={{
                    icon: services[1].icon,
                    title: services[1].title,
                    text: services[1].text,
                  }}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="bg-yellow-600 p-8">
              <div className="h-10 w-10 rounded-full bg-red"></div>
              <div>IT Project Solution</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
};

export default CompanyOverviewContent;
