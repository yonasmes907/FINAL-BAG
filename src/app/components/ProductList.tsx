"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "ካኪ የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/kaki22.jpg",
    img2: "/kaki1.jpg",
  },
  {
    id: 2,
    name: "ካኪ የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/dup50.jpg",
    img2: "/dup1.jpg",
  },
  {
    id: 3,
    name: "ካኪ የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/kaki33.jpg",
    img2: "/kaki3.jpg",
  },
  {
    id: 4,
    name: "ካኪ የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/dup4.jpg",
    img2: "/dup3.jpg",
  },
  {
    id: 5,
    name: "ካኪ የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/dup6.jpg",
    img2: "/dup5.jpg",
  },
  {
    id: 6,
    name: "ካኪ የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/kaki6.jpg",
    img2: "/kaki5.jpg",
  },
  {
    id: 7,
    name: "ካኪ የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/dup8.jpg",
    img2: "/dup7.jpg",
  },
  {
    id: 8,
    name: "ካኪ የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/kaki8.jpg",
    img2: "/kaki7.jpg",
  },
  {
    id: 9,
    name: "ካኪ የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/kaki10.jpg",
    img2: "/kaki9.jpg",
  },
  {
    id: 10,
    name: "ካኪ የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/dup10.jpg",
    img2: "/dup9.jpg",
  },
  {
    id: 11,
    name: "ካኪ የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/kaki12.jpg",
    img2: "/kaki11.jpg",
  },
  {
    id: 12,
    name: "ካኪ የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/dup12.jpg",
    img2: "/dup11.jpg",
  },
  {
    id: 13,
    name: "ካኪ የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/dup14.jpg",
    img2: "/dup13.jpg",
  },
  {
    id: 14,
    name: "ካኪ የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/kaki14.jpg",
    img2: "/kaki13.jpg",
  },
  {
    id: 15,
    name: "ካኪ የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/dup16.jpg",
    img2: "/dup15.jpg",
  },
  {
    id: 16,
    name: "ካኪ የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/kaki16.jpg",
    img2: "/kaki15.jpg",
  },
  {
    id: 17,
    name: "ካኪ የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/dup32.jpg",
    img2: "/dup33.jpg",
  },
  {
    id: 18,
    name: "ካኪ የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/kaki20.jpg",
    img2: "/kaki21.jpg",
  },
  {
    id: 19,
    name: "ካኪ የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/dup34.jpg",
    img2: "/dup35.jpg",
  },
  {
    id: 20,
    name: "ካኪ የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/kaki26.jpg",
    img2: "/kaki27.jpg",
  },
  {
    id: 21,
    name: "ካኪ የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/dup36.jpg",
    img2: "/dup37.jpg",
  },
  {
    id: 22,
    name: "ካኪ የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/kaki28.jpg",
    img2: "/kaki29.jpg",
  },
  {
    id: 23,
    name: "ካኪ የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/dup40.jpg",
    img2: "/dup41.jpg",
  },
  {
    id: 24,
    name: "ካኪ የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/kaki32.jpg",
    img2: "/kaki31.jpg",
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
    <div className="container mx-auto px-4 py-8">
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
