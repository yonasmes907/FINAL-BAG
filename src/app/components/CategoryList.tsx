import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryList = () => {
  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-2 md:gap-8">
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 mr-12 sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-72">
            <Image
              src="https://i.pinimg.com/736x/22/94/e9/2294e98d3a2489bf4cab64d2181c0208.jpg"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">All Sizes</h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 mr-12 sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-72">
            <Image
              src="https://i.pinimg.com/236x/72/b4/b9/72b4b94be72b071d5ff24d797ed811fa.jpg"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 mr-12 sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-72">
            <Image
              src="https://png.pngtree.com/png-vector/20240827/ourlarge/pngtree-brown-paper-shopping-bag-with-black-handles-mockup-png-image_13625928.png"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 mr-12 sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-72">
            <Image
              src="https://png.pngtree.com/png-vector/20240827/ourlarge/pngtree-brown-paper-shopping-bag-with-black-handles-mockup-png-image_13625928.png"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 mr-12 sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-72">
            <Image
              src="https://png.pngtree.com/png-vector/20240827/ourlarge/pngtree-brown-paper-shopping-bag-with-black-handles-mockup-png-image_13625928.png"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 mr-12 sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-72">
            <Image
              src="https://png.pngtree.com/png-vector/20240827/ourlarge/pngtree-brown-paper-shopping-bag-with-black-handles-mockup-png-image_13625928.png"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 mr-12 sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-72">
            <Image
              src="https://png.pngtree.com/png-vector/20240827/ourlarge/pngtree-brown-paper-shopping-bag-with-black-handles-mockup-png-image_13625928.png"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">
            Category Name
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
