"use client";

import Image from "next/image";
import React from "react";
import logo from '@/app/assets/logo.png'


const Logo:React.FC = () => {

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div onClick={handleReload}>
      <Image
        alt="logo"
        className="hidden md:block cursor-pointer"
        height="100"
        width="100"
        src={logo}
      />
    </div>
  );
}

export default Logo;
