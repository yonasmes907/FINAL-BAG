import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="py-24 px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* top */}
      <div className="flex md:flex-row flex-col justify-between gap-24">
        {/* left */}
        <div className="lg:w-1/4 md:w-1/2 w-full md:w flex flex-col gap-8">
          <Link href="/">
            {" "}
            <div className="text-2xl font-bold tracking-wide">BYY</div>
          </Link>
          <p>Brown Paper Shopping Bag With Black Handles Mockup</p>
          <span className="font-semibold">yonasmes331505@gmail.com</span>
          <span className="font-semibold">(+251)982 299 164</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="" width={16} height={16} />
            <Image src="/instagram.png" alt="" width={16} height={16} />
            <Image src="/youtube.png" alt="" width={16} height={16} />
            <Image src="/pinterest.png" alt="" width={16} height={16} />
            <Image src="/x.png" alt="" width={16} height={16} />
          </div>
        </div>
        {/* center  */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href="">AboutUs</Link>
              <Link href="">Careers</Link>
              <Link href="">Afiilaiates</Link>
              <Link href="">Blog</Link>
              <Link href="">Conatct Us</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href="">AboutUs</Link>
              <Link href="">Careers</Link>
              <Link href="">Afiilaiates</Link>
              <Link href="">Blog</Link>
              <Link href="">Conatct Us</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href="">AboutUs</Link>
              <Link href="">Careers</Link>
              <Link href="">Afiilaiates</Link>
              <Link href="">Blog</Link>
              <Link href="">Conatct Us</Link>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="lg:w-1/4 md:w-1/2 w-full md:w flex flex-col gap-8">
          <h1 className="font-medium text-lg "></h1>
          <p>
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-lama text-white">JOIN</button>
          </div>
          <span className="font-semibold">Secure Payments</span>
          <div className="flex gap-8">
            <Image src="/discover.png" alt="" width={40} height={20} />
            <Image src="/skrill.png" alt="" width={40} height={20} />
            <Image src="/paypal.png" alt="" width={40} height={20} />
            <Image src="/mastercard.png" alt="" width={40} height={20} />
            <Image src="/visa.png" alt="" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16 ">
        <div className="">© 2025 BYY Shop</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">United States | Engish</span>
          </div>
          <div className="">
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">$ USD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
