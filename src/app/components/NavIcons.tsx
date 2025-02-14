"use client";
import Image from "next/image";
import React from "react";

const NavIcons = () => {
  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      {/* Profile Image */}
      <Image
        src="/profile1.png"
        alt="Profile"
        width={22}
        height={22}
        className="cursor-pointer"
      />

      {/* Clickable Phone Number with Hover Effect */}
      <a
        href="tel:+251982299164"
        className="text-gray-800 text-lg font-semibold transition-all duration-300 ease-in-out 
                   hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-yellow-500 
                   hover:scale-105 cursor-pointer"
      >
        (+251) 982 299 164
      </a>
    </div>
  );
};

export default NavIcons;
