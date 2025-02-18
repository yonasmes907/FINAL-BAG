import React from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: 1,
    name: "ካኪ ቦርሳ",
    imageUrl: "/kaki26.jpg", // Image stored in the public folder
    description:
      "Explore our stylish and unique paper bags in various colors and designs.",
    route: "/kaki", // Route to navigate when clicked
  },
  {
    id: 2,
    name: "Duplex ቦርሳ",
    imageUrl: "/dup50.jpg", // Image stored in the public folder
    description:
      "Check out our latest collection of high-quality duplex paper bags.",
    route: "/duplex", // Route to navigate when clicked
  },
];

const CategoryList = () => {
  return (
    <div className="mt-0 px-4 m-20">
      <h1 className="text-center -mt-10 text-4xl font-bold text-gray-800 mb-16">
        Explore Our <span className="text-red-500">Categories</span>
      </h1>
      <div className="flex flex-col md:flex-row gap-5">
        <Link href="/kaki">
          <div className="flex flex-col md:flex-row bg-slate-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 ease-in-out rounded-lg overflow-hidden cursor-pointer">
            <div className="md:w-1/2 relative">
              <Image
                src="/kaki26.jpg"
                alt="ካኪ ቦርሳዎች"
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
            <div className="md:w-1/2 p-6 flex flex-col justify-between">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                ካኪ ቦርሳዎች
              </h3>
              <p className="text-gray-600 mb-4">
                የእኛን ቆንጆ እና ልዩ የሆኑ የወረቀት ቦርሳዎችን በተለያዩ ቀለማት እና ንድፎች ያገኛሉ፡፡
              </p>
              <button className="self-start px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </Link>
        <Link href="/duplex">
          <div className="flex flex-col md:flex-row bg-slate-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 ease-in-out rounded-lg overflow-hidden cursor-pointer">
            <div className="md:w-1/2 relative">
              <Image
                src="/dup50.jpg"
                alt="Duplex ቦርሳዎች"
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
            <div className="md:w-1/2 p-6 flex flex-col justify-between">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Duplex ቦርሳዎች
              </h3>
              <p className="text-gray-600 mb-4">
                ከፍተኛ ጥራት ያለው Duplex ወረቀት የቅርብ ጊዜ ስብስባችንን ይመልከቱ!
              </p>
              <button className="self-start px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
