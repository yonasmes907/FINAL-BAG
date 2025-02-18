"use client";

import Image from "next/image";
import React, { Component } from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative py-16 px-6 md:px-12 lg:px-24 xl:px-32 bg-black bg-opacity-90 text-white text-sm mt-24">
      {/* Top Section: Three Columns Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          <div className="text-2xl font-bold tracking-wide">BYY</div>
          <p className="text-gray-300 font-bold text-xl">
            የእኛን ምርቶች በማንኛውም መጠን ማግኘት ይችላሉ ይደውሉ ፡፡
          </p>
          <span className="font-semibold">yonasmes331505@gmail.com</span>
          <span className="font-semibold">(+251) 982 299 164</span>
          <div className="flex justify-center md:justify-start gap-4">
            <Link target="_blank" href="https://t.me/Tnksgod12">
              <Image
                src="/facebook1.png"
                alt="facebook"
                width={24}
                height={24}
              />
            </Link>
            <Link target="_blank" href="https://t.me/Tnksgod12">
              <Image
                src="/instagram1.png"
                alt="Instagram"
                width={24}
                height={24}
              />
            </Link>
            <Link target="_blank" href="https://t.me/Tnksgod12">
              <Image src="/youtube1.png" alt="YouTube" width={24} height={24} />
            </Link>
            <Link target="_blank" href="https://t.me/Tnksgod12">
              <Image src="/tg1.png" alt="Telegram" width={24} height={24} />
            </Link>
          </div>
        </div>

        {/* Center Column */}
        <div className="flex flex-col gap-6">
          <h1 className="font-medium text-lg">Company</h1>
          <div className="flex flex-col gap-3">
            <Link href="/" className="hover:text-gray-400 transition">
              Home Page
            </Link>

            <Link href="/products" className="hover:text-gray-400 transition">
              Products
            </Link>
            <Link href="/about" className="hover:text-gray-400 transition">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-gray-400 transition">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          <h1 className="font-medium text-lg">Secure Payments</h1>
          <div className="flex justify-center md:justify-start gap-6">
            <Image
              src="https://play-lh.googleusercontent.com/kKGUk63iUIMXF-SL4AklHhZnQesw3-jZT2MR6NuX-xS54ncaZJ-8tlJETZdQYyZ5-g"
              alt="Payment"
              width={40}
              height={20}
            />
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd6Qu6JmBmRPFRlIwOeay0u2zXQWYmfB7lAA&s"
              alt="Payment"
              width={40}
              height={20}
            />
            <Image
              src="https://www.bankofabyssinia.com/wp-content/uploads/2023/10/BoA-LOGO-1-1-scaled.jpg"
              alt="Payment"
              width={40}
              height={20}
            />
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/3/33/Dashen_Bank.png"
              alt="Payment"
              width={40}
              height={20}
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-12 border-t border-gray-700 pt-6">
        <div>© 2025 BYY Shop</div>
        <div className="flex flex-col md:flex-row gap-6">
          <div>
            <span className="text-gray-400 mr-2">Language:</span>
            <span className="font-medium">
              Amharic | Ethiopia - English | UK, USA
            </span>
          </div>
          <div>
            <span className="text-gray-400 mr-2">Currency:</span>
            <span className="font-medium">ETB / USD</span>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 z-10 right-6 md:bottom-10 md:right-10 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition duration-300"
          aria-label="Back to Top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default Footer;
