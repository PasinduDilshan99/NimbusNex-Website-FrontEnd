import React from "react";

const FooterLinksComponent = () => {
  const links = [
    { id: 1, text: "Cookie Policy" },
    { id: 2, text: "Careers" },
    { id: 3, text: "Policy" },
    { id: 4, text: "About us" },
    { id: 5, text: "Contact us" },
    { id: 6, text: "Pricing & Plans" },
  ];
  return (
    <div className="flex flex-col">
      <div className="text-2xl font-semibold pb-6">Links</div>
      <div>
        {links.map((link) => (
          <div key={link.id} className="text-gray-400 text-lg pb-2">{link.text}</div>
        ))}
      </div>
    </div>
  );
};

export default FooterLinksComponent;
