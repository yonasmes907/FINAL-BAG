"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";

const products = [
  {
    id: 1,
    name: "ካኪ የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/kaki1.jpg",
    img2: "/kaki2.jpg",
  },
  {
    id: 2,
    name: "ካኪ የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/kaki3.jpg",
    img2: "/kaki4.jpg",
  },
  {
    id: 3,
    name: "ካኪ የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/kaki17.jpg",
    img2: "/kaki6.jpg",
  },
  {
    id: 4,
    name: "ካኪ የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/kaki7.jpg",
    img2: "/kaki8.jpg",
  },
  {
    id: 5,
    name: "ካኪ የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/kaki20.jpg",
    img2: "/kaki10.jpg",
  },
  {
    id: 6,
    name: "ካኪ የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/kaki19.jpg",
    img2: "/kaki12.jpg",
  },
  {
    id: 7,
    name: "ካኪ የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/kaki13.jpg",
    img2: "/kaki14.jpg",
  },
  {
    id: 8,
    name: "ካኪ የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/kaki15.jpg",
    img2: "/kaki16.jpg",
  },
  {
    id: 9,
    name: "ካኪ የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/kaki18.jpg",
    img2: "/kaki19.jpg",
  },
  {
    id: 10,
    name: "ካኪ የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/kaki21.jpg",
    img2: "/kaki20.jpg",
  },
  {
    id: 11,
    name: "ካኪ የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/kaki22.jpg",
    img2: "/kaki23.jpg",
  },
  {
    id: 12,
    name: "ካኪ የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/kaki24.jpg",
    img2: "/kaki25.jpg",
  },
  {
    id: 13,
    name: "ካኪ የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/kaki26.jpg",
    img2: "/kaki27.jpg",
  },
  {
    id: 14,
    name: "ካኪ የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/kaki28.jpg",
    img2: "/kaki29.jpg",
  },
  {
    id: 15,
    name: "ካኪ የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/kaki30.jpg",
    img2: "/kaki31.jpg",
  },
  {
    id: 16,
    name: "ካኪ የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/kaki32.jpg",
    img2: "/kaki33.jpg",
  },
  // Add more products as needed
];

const Products = () => {
  const [orderedItem, setOrderedItem] = useState(null);

  const handleOrder = (item: any) => {
    setOrderedItem(item);
    const message = encodeURIComponent(
      `ሰላም! ማዘዝ እፈልጋለሁ\n\n🛍  የምርት ስም:- ${item.name}\n💰 ዋጋ:- $${item.price}\n📦 የምርት ዓይነት:- ${item.quality}\n\nተጨማሪ ዝርዝሮችን እፈልጋለሁ::`
    );
    const telegramLink = `https://t.me/Tnksgod12?text=${message}`;
    window.open(telegramLink, "_blank");
  };
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="mt-28 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">
          የ<span className="text-red-600">ካኪ</span> የወረቀት ቦርሳዎች
        </h1>
        <p className="text-lg text-gray-500 mt-2">
          Explore high-quality, stylish, and affordable paper bags for every
          occasion.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <React.Fragment key={product.id}>
            <div className="border-x-2 border-zinc-950 rounded-md p-3 w-full flex flex-col gap-4">
              <div className="relative w-full h-80">
                <Image
                  src={product.img1}
                  alt={product.name}
                  fill
                  sizes="23vw"
                  className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500"
                />
                <Image
                  src={product.img2}
                  alt={product.name}
                  fill
                  sizes="23vw"
                  className="absolute object-cover rounded-md"
                />
              </div>
              <div className="flex justify-between">
                <span className="text-xl font-bold">{product.name}</span>
                <span className="text-xl font-bold text-black">
                  ${product.price}
                </span>
              </div>
              <div className="text-lg text-gray-500">{product.quality}</div>
              <button
                onClick={() => handleOrder(product)}
                className="rounded-2xl bg-red-600 text-white py-2 w-max px-4 text-xs transition-all duration-300 ease-in-out hover:bg-red-700 hover:ring-red-500"
              >
                Order This Item
              </button>
            </div>

            {/* Ad Banner After 4 Products on Mobile and 8 on Desktop */}
            {(index + 1) % (isMobile ? 4 : 8) === 0 && (
              <div className="col-span-2 lg:col-span-4 flex justify-center items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold text-xl rounded-md h-10 shadow-lg mt-5 mb-5">
                📢 ልዩ ቅናሽ፡ በጅምላ ትእዛዝ 10% ቅናሽ ያግኙ! አሁን ይዘዙ!{" "}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Products;
