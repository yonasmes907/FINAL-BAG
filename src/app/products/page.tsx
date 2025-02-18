"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";

const products = [
  {
    id: 1,
    name: "ካኪ የወረቀት ቦርሳ 1",
    price: "38",
    quality: "መካከለኛ",
    img1: "/kaki10.jpg",
    img2: "/kaki9.jpg",
  },
  {
    id: 2,
    name: "ካኪ የወረቀት ቦርሳ 2",
    price: "38",
    quality: "መካከለኛ",
    img1: "/dup10.jpg",
    img2: "/dup9.jpg",
  },
  {
    id: 3,
    name: "ካኪ የወረቀት ቦርሳ 3",
    price: "38",
    quality: "መካከለኛ",
    img1: "/kaki12.jpg",
    img2: "/kaki11.jpg",
  },
  {
    id: 4,
    name: "ካኪ የወረቀት ቦርሳ 4",
    price: "38",
    quality: "መካከለኛ",
    img1: "/dup12.jpg",
    img2: "/dup11.jpg",
  },
  {
    id: 5,
    name: "ካኪ የወረቀት ቦርሳ 5",
    price: "38",
    quality: "መካከለኛ",
    img1: "/dup55.jpg",
    img2: "/dup60.jpg",
  },
  {
    id: 6,
    name: "ካኪ የወረቀት ቦርሳ 6",
    price: "38",
    quality: "መካከለኛ",
    img1: "/dup6.jpg",
    img2: "/dup5.jpg",
  },
  {
    id: 7,
    name: "ካኪ የወረቀት ቦርሳ 7",
    price: "38",
    quality: "መካከለኛ",
    img1: "/kaki6.jpg",
    img2: "/kaki5.jpg",
  },
  {
    id: 8,
    name: "ካኪ የወረቀት ቦርሳ 8",
    price: "38",
    quality: "መካከለኛ",
    img1: "/dup8.jpg",
    img2: "/dup7.jpg",
  },
  {
    id: 9,
    name: "ካኪ የወረቀት ቦርሳ 9",
    price: "38",
    quality: "መካከለኛ",
    img1: "/kaki8.jpg",
    img2: "/kaki7.jpg",
  },

  {
    id: 10,
    name: "ካኪ የወረቀት ቦርሳ 10",
    price: "38",
    quality: "መካከለኛ",
    img1: "/dup36.jpg",
    img2: "/dup37.jpg",
  },
  {
    id: 11,
    name: "ካኪ የወረቀት ቦርሳ 11",
    price: "38",
    quality: "መካከለኛ",
    img1: "/dup52.jpg",
    img2: "/dup50.jpg",
  },
  {
    id: 12,
    name: "ካኪ የወረቀት ቦርሳ 12",
    price: "38",
    quality: "መካከለኛ",
    img1: "/kaki28.jpg",
    img2: "/kaki29.jpg",
  },
  {
    id: 13,
    name: "ካኪ የወረቀት ቦርሳ 13",
    price: "38",
    quality: "መካከለኛ",
    img1: "/dup40.jpg",
    img2: "/dup41.jpg",
  },
  {
    id: 14,
    name: "ካኪ የወረቀት ቦርሳ 14",
    price: "38",
    quality: "መካከለኛ",
    img1: "/kaki32.jpg",
    img2: "/kaki31.jpg",
  },
  {
    id: 15,
    name: "ካኪ የወረቀት ቦርሳ 15",
    price: "38",
    quality: "መካከለኛ",
    img1: "/dup14.jpg",
    img2: "/dup13.jpg",
  },
  {
    id: 16,
    name: "ካኪ የወረቀት ቦርሳ 16",
    price: "38",
    quality: "መካከለኛ",
    img1: "/kaki14.jpg",
    img2: "/kaki13.jpg",
  },
  {
    id: 17,
    name: "ካኪ የወረቀት ቦርሳ 17",
    price: "38",
    quality: "መካከለኛ",
    img1: "/dup16.jpg",
    img2: "/dup15.jpg",
  },
  {
    id: 18,
    name: "ካኪ የወረቀት ቦርሳ 18",
    price: "38",
    quality: "መካከለኛ",
    img1: "/kaki16.jpg",
    img2: "/kaki15.jpg",
  },

  {
    id: 19,
    name: "ካኪ የወረቀት ቦርሳ 19",
    price: "38",
    quality: "መካከለኛ",
    img1: "/kaki22.jpg",
    img2: "/kaki1.jpg",
  },
  {
    id: 20,
    name: "ካኪ የወረቀት ቦርሳ 20",
    price: "38",
    quality: "መካከለኛ",
    img1: "/dup50.jpg",
    img2: "/dup1.jpg",
  },
  {
    id: 21,
    name: "ካኪ የወረቀት ቦርሳ 21",
    price: "38",
    quality: "መካከለኛ",
    img1: "/kaki33.jpg",
    img2: "/kaki3.jpg",
  },
  {
    id: 22,
    name: "ካኪ የወረቀት ቦርሳ 22",
    price: "38",
    quality: "መካከለኛ",
    img1: "/dup4.jpg",
    img2: "/dup3.jpg",
  },
  {
    id: 23,
    name: "ካኪ የወረቀት ቦርሳ 23",
    price: "38",
    quality: "መካከለኛ",
    img1: "/dup32.jpg",
    img2: "/dup33.jpg",
  },
  {
    id: 24,
    name: "ካኪ የወረቀት ቦርሳ 24",
    price: "38",
    quality: "መካከለኛ",
    img1: "/kaki20.jpg",
    img2: "/kaki21.jpg",
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
          Discover Our Unique Collection
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
                📢 ልዩ ቅናሽ፡ በጅምላ ትእዛዝ 10% ቅናሽ ያግኙ! አሁን ይዘዙ!
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Products;
