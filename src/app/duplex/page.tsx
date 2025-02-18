"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";

const products = [
  {
    id: 1,
    name: "Duplex የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/dup1.jpg",
    img2: "/dup2.jpg",
  },
  {
    id: 2,
    name: "Duplex የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/dup3.jpg",
    img2: "/dup4.jpg",
  },
  {
    id: 3,
    name: "Duplex የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/dup5.jpg",
    img2: "/dup6.jpg",
  },
  {
    id: 4,
    name: "Duplex የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/dup7.jpg",
    img2: "/dup8.jpg",
  },
  {
    id: 5,
    name: "Duplex የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/dup9.jpg",
    img2: "/dup10.jpg",
  },
  {
    id: 6,
    name: "Duplex የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/dup11.jpg",
    img2: "/dup12.jpg",
  },
  {
    id: 7,
    name: "Duplex የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/dup13.jpg",
    img2: "/dup14.jpg",
  },
  {
    id: 8,
    name: "Duplex የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/dup15.jpg",
    img2: "/dup16.jpg",
  },
  {
    id: 9,
    name: "Duplex የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/dup17.jpg",
    img2: "/dup18.jpg",
  },
  {
    id: 10,
    name: "Duplex የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/dup19.jpg",
    img2: "/dup20.jpg",
  },
  {
    id: 11,
    name: "Duplex የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/dup21.jpg",
    img2: "/dup22.jpg",
  },
  {
    id: 12,
    name: "Duplex የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/dup23.jpg",
    img2: "/dup24.jpg",
  },
  {
    id: 13,
    name: "Duplex የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/dup25.jpg",
    img2: "/dup26.jpg",
  },
  {
    id: 14,
    name: "Duplex የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/dup27.jpg",
    img2: "/dup28.jpg",
  },
  {
    id: 15,
    name: "Duplex የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/dup29.jpg",
    img2: "/dup30.jpg",
  },
  {
    id: 16,
    name: "Duplex የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/dup31.jpg",
    img2: "/dup32.jpg",
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
    <div className="mt-40 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">
          <span className="text-red-600">Duplex</span> የወረቀት ቦርሳዎች
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
