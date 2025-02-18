import Image from "next/image";
import Link from "next/link";
import React from "react";

const Products = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href="/"
        className=" bg-slate-300 rounded-md p-3 w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://i.pinimg.com/736x/a5/94/44/a594444d2cf48468541563d2142a8213.jpg"
            alt=""
            fill
            sizes="23vw"
            className="absolute  object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://i.pinimg.com/736x/7c/88/d2/7c88d29ee4e11151a623843f806a900b.jpg"
            alt=""
            fill
            sizes="23vw"
            className="absolute object-cover rounded-md"
          />{" "}
        </div>
        <div className="flex justify-between">
          <span className="text-xl font-bold">ካኪ የወረቀት ቦርሳ</span>
          <span className="text-xl font-bold text-black">38</span>
        </div>
        <div className="text-ልግ text-gray-500">መካከለኛ</div>
        <button
          className="rounded-2xl  bg-red-600 text-white py-2 w-max px-4 text-xs transition-all duration-300 ease-in-out 
               hover:bg-red-700 hover:ring-red-500"
        >
          Order This Item
        </button>
      </Link>

      <Link
        href="/"
        className=" bg-slate-300 rounded-md p-3 w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://i.pinimg.com/736x/53/fa/9b/53fa9b8ce3f11519ef6ea8ba6c5eb3db.jpg"
            alt=""
            fill
            sizes="23vw"
            className="absolute  object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://i.pinimg.com/236x/81/7c/43/817c4306b3c1425c1eadf103826594c2.jpg"
            alt=""
            fill
            sizes="23vw"
            className="absolute object-cover rounded-md"
          />{" "}
        </div>
        <div className="flex justify-between">
          <span className="text-xl font-bold">Duplex የወረቀት ቦርሳ</span>
          <span className="text-xl font-bold text-black">38</span>
        </div>
        <div className="text-ልግ text-gray-500">መካከለኛ</div>
        <button
          className="rounded-2xl  bg-red-600 text-white py-2 w-max px-4 text-xs transition-all duration-300 ease-in-out 
               hover:bg-red-700 hover:ring-red-500"
        >
          Order This Item
        </button>
      </Link>

      <Link
        href="/"
        className=" bg-slate-300 rounded-md p-3 w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://i.pinimg.com/736x/ad/90/d1/ad90d11c807afbd824c013c12cc242ff.jpg"
            alt=""
            fill
            sizes="23vw"
            className="absolute  object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://i.pinimg.com/236x/77/45/11/774511435cf7ce5c76cbec159c465996.jpg"
            alt=""
            fill
            sizes="23vw"
            className="absolute object-cover rounded-md"
          />{" "}
        </div>
        <div className="flex justify-between">
          <span className="text-xl font-bold">ካኪ የወረቀት ቦርሳ</span>
          <span className="text-xl font-bold text-black">38</span>
        </div>
        <div className="text-ልግ text-gray-500">መካከለኛ</div>
        <button
          className="rounded-2xl  bg-red-600 text-white py-2 w-max px-4 text-xs transition-all duration-300 ease-in-out 
               hover:bg-red-700 hover:ring-red-500"
        >
          Order This Item
        </button>
      </Link>

      <Link
        href="/"
        className=" bg-slate-300 rounded-md p-3 w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://i.pinimg.com/736x/0b/68/23/0b6823a50ebbab85dda696e11eba1fc4.jpg"
            alt=""
            fill
            sizes="23vw"
            className="absolute  object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://i.pinimg.com/736x/64/20/90/642090d66cc8c03f4b278ac22e14bf3e.jpg"
            alt=""
            fill
            sizes="23vw"
            className="absolute object-cover rounded-md"
          />{" "}
        </div>
        <div className="flex justify-between">
          <span className="text-xl font-bold">ካኪ የወረቀት ቦርሳ</span>
          <span className="text-xl font-bold text-black">38</span>
        </div>
        <div className="text-ልግ text-gray-500">መካከለኛ</div>
        <button
          className="rounded-2xl  bg-red-600 text-white py-2 w-max px-4 text-xs transition-all duration-300 ease-in-out 
               hover:bg-red-700 hover:ring-red-500"
        >
          Order This Item
        </button>
      </Link>
    </div>
  );
};

export default Products;
