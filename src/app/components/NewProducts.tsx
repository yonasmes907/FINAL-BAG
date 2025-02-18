"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

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
  const [orderedItem, setOrderedItem] = useState(null);

  const handleOrder = (item: any) => {
    setOrderedItem(item);
    const message = encodeURIComponent(
      `ሰላም! ማዘዝ እፈልጋለሁ\n\n🛍  የምርት ስም:- ${item.name}\n💰 ዋጋ:- $${item.price}\n📦 የምርት ዓይነት:- ${item.quality}\n\nተጨማሪ ዝርዝሮችን እፈልጋለሁ::`
    );
    const telegramLink = `https://t.me/Tnksgod12?text=${message}`;
    window.open(telegramLink, "_blank");
  };
  return (
    <div className="mt-12 px-4">
      <Link href="/" className="block">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <React.Fragment key={product.id}>
              <div className="border-zinc-950 border-x-2 rounded-md p-2 w-full flex flex-col gap-4">
                <div className="relative w-full h-80">
                  <Image
                    src={product.img1}
                    alt={product.name}
                    fill
                    sizes="23vw"
                    className="absolute object-cover rounded-md z-10 transition-opacity ease-in duration-500"
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
            </React.Fragment>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default Products;
