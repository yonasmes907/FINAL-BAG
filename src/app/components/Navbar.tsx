import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <div className="fixed  top-0 left-0 w-full h-20 px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-white shadow-md z-50">
      {/* MOBILE  */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
          <div className="text-2xl font-bold tracking-wide">BYY</div>
        </Link>
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
        <Menu />
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* Left Side (Logo and Navigation Links) */}
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo1.png" alt="Logo" width={32} height={32} />
            <div className="text-2xl font-bold tracking-wide text-gray-800 mr-40">
              BYY
            </div>
          </Link>
          <NavLinks />
        </div>
        <div className="flex items-center gap-20">
          {/* <SearchBar /> */}
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
