"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
const products = [
  {
    id: 1,
    name: "ካኪ የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "https://i.pinimg.com/736x/a5/94/44/a594444d2cf48468541563d2142a8213.jpg",
  },
  {
    id: 2,
    name: "Duplex የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "https://i.pinimg.com/736x/53/fa/9b/53fa9b8ce3f11519ef6ea8ba6c5eb3db.jpg",
  },
  {
    id: 3,
    name: "ካኪ የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/dup50.jpg",
  },
  {
    id: 4,
    name: "Duplex የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/kaki33.jpg",
  },
  {
    id: 5,
    name: "ካኪ የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/kaki15.jpg",
  },
  {
    id: 6,
    name: "Duplex የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "https://i.pinimg.com/736x/53/fa/9b/53fa9b8ce3f11519ef6ea8ba6c5eb3db.jpg",
  },
  {
    id: 7,
    name: "ካኪ የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "https://i.pinimg.com/736x/7c/88/d2/7c88d29ee4e11151a623843f806a900b.jpg",
  },
  {
    id: 8,
    name: "Duplex የወረቀት ቦርሳ",
    price: "38",
    quality: "መካከለኛ",
    img1: "/kaki13.jpg",
  },

  // Add more products here...
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

  // const handleOrder = (item: any) => {
  //   const message = encodeURIComponent(
  //     `ሰላም! ማዘዝ እፈልጋለሁ\n\n🛍  የምርት ስም:- ${item.name}\n💰 ዋጋ:- $${item.price}\n📦 የምርት ዓይነት:- ${item.quality}\n\nተጨማሪ ዝርዝሮችን እፈልጋለሁ::`
  //   );
  //   const telegramLink = `https://t.me/Tnksgod12?text=${message}`;
  //   window.open(telegramLink, "_blank");
  // };
  const handleOrder = (item: any) => {
    const message = encodeURIComponent(
      `ሰላም! ማዘዝ እፈልጋለሁ\n\n🛍  የምርት ስም:- ${item.name}\n💰 ዋጋ:- $${item.price}\n📦 የምርት ዓይነት:- ${item.quality}\n\nተጨማሪ ዝርዝሮችን እፈልጋለሁ::`
    );

    const telegramLink = `https://t.me/Tnksgod12?text=${message}`;

    setTimeout(() => {
      window.open(telegramLink, "_blank");
    }, 100); // Small delay to avoid pop-up blocking issues
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
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg w-full hover:bg-red-700 transition"
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
