"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "የካኪ የወረቀት ቦርሳዎች",
    description: "ሽያጭ! እስከ 50% ቅናሽ!",
    img: "https://i.pinimg.com/736x/ad/6f/e9/ad6fe9b9c301067ddcc039a56294bd78.jpg",
    url: "/",
  },
  {
    id: 2,
    title: "duplex የወረቀት ቦርሳዎች",
    description: "ለአካባቢ ተስማሚ እና የሚያምር",
    img: "https://i.pinimg.com/736x/53/fa/9b/53fa9b8ce3f11519ef6ea8ba6c5eb3db.jpg",
    url: "/",
  },
  {
    id: 3,
    title: "የቅንጦት ወረቀት ቦርሳዎች",
    description: "ለስጦታ፣ ለችርቻሮ፣ ለካፌዎች፣ ...",
    img: "https://i.pinimg.com/736x/01/34/09/013409778f0b3d6f4af99e11630946a7.jpg",
    url: "/",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null); // Ref for the interval

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };

  const startSlideshow = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 5000); // Slide change every 5 seconds
    }
  };

  const stopSlideshow = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startSlideshow();

    // Cleanup interval when the component unmounts or state changes
    return () => {
      stopSlideshow();
    };
  }, []);

  return (
    <div className="h-[calc(100vh-80px)] bg-slate-200 mt-20 w-full flex items-center justify-center overflow-hidden relative ">
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              index === currentIndex
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full"
            }`}
          >
            <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-6 px-6 py-6">
              {/* TEXT CONTAINER */}
              <div className="w-full md:w-1/2 flex items-center justify-center md:items-start md:justify-center text-center md:text-left">
                <div className="text-center md:text-left px-4">
                  <h2 className=" md:text-xl lg:text-2xl ml-4 md:ml-24 text-red-700 font-medium mb-4">
                    {slide.description}
                  </h2>
                  <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-black mb-0 md:mb-8">
                    {slide.title}
                  </h1>
                  <button
                    onClick={() => {
                      const telegramLink = "https://t.me/Tnksgod12";
                      if (window.innerWidth <= 768) {
                        // Mobile: Open in Telegram app
                        window.location.href = telegramLink;
                      } else {
                        // Desktop: Open in new tab
                        window.open(telegramLink, "_blank");
                      }
                    }}
                    className="rounded-md bg-red-600 text-white py-3 px-6 md:mt-6 text-sm md:text-base w-auto mx-auto md:ml-36  transition-all duration-300 ease-in-out 
                  hover:bg-red-700"
                  >
                    አሁኑኑ ይዘዙ
                  </button>
                </div>
              </div>

              {/* IMAGE CONTAINER */}
              <div className="w-full md:w-1/2 flex items-center justify-center bg-transparent">
                <div className="relative w-[250px] md:w-[350px] lg:w-[400px] h-[250px] md:h-[350px] lg:h-[400px]">
                  <Image
                    src={slide.img}
                    alt={slide.title}
                    fill
                    sizes="100%"
                    className="object-cover rounded-lg shadow-none"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`w-8 h-2 rounded-md transition-all duration-300 ease-in-out ${
              currentIndex === index
                ? "bg-black scale-110"
                : "bg-gray-300 scale-90"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
