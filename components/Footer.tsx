"use client";

import React, { FC } from "react";
import FooterColumn from "./FooterColumn";



const Footer:FC = () => {

  const itemData = [
    ["ABOUT", "Newsroom", "Learn about new features", "Letter from our founders", "Careers", "Investors"],
    ["Support", "Help Center", "AirCover", "Cancellation options", "Safety information", "Report a neighborhood concern"],
    ["Community", "Newsroom", "Learn about new features", "Letter from our founders", "Careers", "Investors"],
    ["Hosting","Try hosting","AirCover for Hosts","Explore hosting resources","Safety information","How to host responsibly"],
  ];


  const footerColumns = itemData.map((item, index) => (
    <FooterColumn key={index} data={item} />
  ))

  return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
        {footerColumns}
      </div>
  );
}

export default Footer;
