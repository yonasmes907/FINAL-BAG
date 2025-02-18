"use client";

import Link from "next/link";
import React, { Component } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
];

const NavLinks = () => {
  const pathname = usePathname(); // Get the current route path

  return (
    <div className="hidden lg:flex gap-12">
      {navItems.map((item, index) => {
        const isActive = pathname === item.path;

        return (
          <Link
            key={index}
            href={item.path}
            className={`text-lg font-medium relative overflow-hidden group transition duration-300 ease-in-out ${
              isActive ? "text-gray-800 font-semibold" : "text-gray-700"
            }`}
          >
            <span>{item.name}</span>
            <span
              className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-yellow-400 transition-all duration-300 ease-in-out ${
                isActive ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
