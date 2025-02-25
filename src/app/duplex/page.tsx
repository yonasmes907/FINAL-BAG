"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleOrder = (item: any) => {
    const message = encodeURIComponent(
      `ሰላም! ማዘዝ እፈልጋለሁ\n\n🛍  የምርት ስም:- ${item.name}\n💰 ዋጋ:- $${item.price}\n📦 የምርት ዓይነት:- ${item.quality}\n\nተጨማሪ ዝርዝሮችን እፈልጋለሁ::`
    );
    const telegramLink = `https://t.me/Tnksgod12?text=${message}`;
    window.open(telegramLink, "_blank");
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h2 className="text-2xl font-bold underline text-center mb-6">
        Dulex የወረቀት ቦርሳዎች
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item, index) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-between min-h-[400px]"
          >
            <div className="w-full h-48 relative">
              <Image
                src={item.img1}
                alt={item.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="text-center mt-4 flex-grow">
              <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
              <p className="text-gray-700">💰 ዋጋ: ${item.price}</p>
              <p className="text-gray-700">📦 የምርት ዓይነት: {item.quality}</p>
            </div>
            <button
              onClick={() => handleOrder(item)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700 transition"
            >
              Order Now
            </button>

            {/* Ad Banner After 4 Products on Mobile and 8 on Desktop */}
            {/* {(index + 1) % (isMobile ? 4 : 8) === 0 && (
              <div className="col-span-2 lg:col-span-4 flex justify-center items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold text-lg md:text-xl rounded-md h-12 shadow-lg mt-5 mb-5 px-4 py-2 text-center">
                📢 ልዩ ቅናሽ፡ በጅምላ ትእዛዝ 10% ቅናሽ ያግኙ! አሁን ይዘዙ!
              </div>
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
