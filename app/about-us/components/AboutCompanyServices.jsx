"use client";
import GppGoodIcon from "@mui/icons-material/GppGood";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import AboutUseServicecomponent from "./AboutUseServicecomponent";

const AboutCompanyServices = () => {
  const servicesData = [
    {
      id: 1,
      image: "/intro-v1-img4.jpg",
      icon: GppGoodIcon,
      title: "Digital Security",
      texts: {
        text1:
          "Proactive Protection: Nimbusnex prioritizes risk assessments, multi-layered defenses, and continuous threat monitoring.",
        text2:
          "Comprehensive Services:  Includes vulnerability assessments, penetration testing, secure coding, and compliance consulting.",
        text3:
          "Client-Centric Security: We collaborate closely with clients to build resilient systems that protect their digital assets.",
      },
    },
    {
      id: 2,
      image: "/intro-v1-img5.jpg",
      icon: StarPurple500Icon,
      title: "Trusted Agency",
      texts: {
        text1:
          "Integrity and Transparency: Nimbusnex is committed to clear communication, dependable solutions, and client-focused excellence.",
        text2:
          "Client Success Focus: We celebrate client achievements, positioning Nimbusnex as a partner dedicated to long-term success.",
        text3:
          "Enduring Partnerships: Our goal is to build and sustain relationships that extend beyond project completion.",
      },
    },
    {
      id: 3,
      image: "/intro-v1-img6.jpg",
      icon: LaptopMacIcon,
      title: "IT Outsourcing",
      texts: {
        text1:
          "Flexible Solutions: Nimbusnex offers scalable outsourcing options, from task-specific to full project management.",
        text2:
          "Cost-Effective Expertise: Access specialized talent and reduce overhead with efficient, adaptable services.",
        text3:
          "Efficient Project Delivery: Our structured project management ensures timely, budget-friendly solutions aligned with your business goals.",
      },
    },
  ];
  return (
    <div className={`flex flex-col md:justify-evenly md:items-center `}>
      {servicesData.map((serviceData) => (
        <div key={serviceData.id} className="w-[80%]">
          <AboutUseServicecomponent props={serviceData} />
        </div>
      ))}
    </div>
  );
};

export default AboutCompanyServices;
