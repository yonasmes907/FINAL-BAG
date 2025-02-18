"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);

  // Function to close the menu
  const closeMenu = () => setOpen(false);

  return (
    <div>
      <Image
        src="/menu.png"
        alt=""
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute bg-black pb-72 text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
          <Link
            href="/"
            className="text-3xl font-medium text-white relative overflow-hidden group"
            onClick={closeMenu} // Close menu when clicked
          >
            <span className="group-hover:text-gray-800 transition duration-300 ease-in-out">
              Home
            </span>
            <span className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-400 to-yellow-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
          </Link>
          <Link
            href="/products"
            className="text-3xl font-medium text-white relative overflow-hidden group"
            onClick={closeMenu} // Close menu when clicked
          >
            <span className="group-hover:text-gray-800 transition duration-300 ease-in-out">
              Products
            </span>
            <span className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-400 to-yellow-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
          </Link>
          <Link
            href="/about"
            className="text-3xl font-medium text-white relative overflow-hidden group"
            onClick={closeMenu} // Close menu when clicked
          >
            <span className="group-hover:text-gray-800 transition duration-300 ease-in-out">
              About Us
            </span>
            <span className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-400 to-yellow-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
          </Link>
          <Link
            href="/contact"
            className="text-3xl font-medium text-white relative overflow-hidden group"
            onClick={closeMenu} // Close menu when clicked
          >
            <span className="group-hover:text-gray-800 transition duration-300 ease-in-out">
              Contact Us
            </span>
            <span className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-400 to-yellow-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
