"use client";

import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 mt-20">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-yellow-500 to-orange-500 opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Contact Info */}
      <div className="mt-12 text-gray-800">
        <h2 className="text-3xl font-semibold text-green-800">Get in Touch</h2>
        <p className="mt-4 text-2xl leading-relaxed">
          - Have questions or need support? We’re here to help! Reach out to us
          via phone and email.
        </p>
        <p className="mt-4 text-2xl leading-relaxed">
          - ጥያቄዎች አሉዎት ወይም ድጋፍ ይፈልጋሉ? እኛ ለመርዳት እዚህ ነን! በስልክ እና በኢሜል ያግኙን ::
        </p>

        <div className="mt-6 space-y-4 bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg flex items-center">
            📍{" "}
            <span className="ml-2 font-medium">
              Addis Ababa, Ethiopia / አዲስ አበባ፣ ኢትዮጵያ
            </span>
          </p>
          <p className="text-lg flex items-center">
            📧{" "}
            <span className="ml-2 font-medium">yonasmes331505@gmail.com</span>
          </p>
          <p className="text-lg flex items-center">
            📞{" "}
            <span className="ml-2 font-medium">+251( 982 299 164) - ዮናስ</span>
          </p>
          <p className="text-lg flex items-center">
            📞{" "}
            <span className="ml-2 font-medium">+251( 974 215 051) - ዮሴፍ</span>
          </p>
          <p className="text-lg flex items-center">
            📞{" "}
            <span className="ml-2 font-medium">+251( 935 150 952) - ብንያም</span>
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-12">
        <h2 className="text-3xl font-semibold text-center text-orange-600">
          Send Us a Message
        </h2>
        <form className="mt-6 max-w-3xl mx-auto bg-gray-100 p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full mt-6 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500"
          ></textarea>
          <button
            type="submit"
            className="mt-6 w-full bg-gradient-to-r from-green-500 to-yellow-400 text-white py-3 rounded-md font-semibold hover:scale-105 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
