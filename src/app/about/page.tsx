"use client";

import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16  -mb-24">
      {/* Hero Section */}
      <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-xl">
        <Image
          src="https://i.pinimg.com/736x/a8/d0/5b/a8d05b28394899ee1e699c847ea652c7.jpg"
          alt="About Us"
          layout="responsive"
          width={1200}
          height={675}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="mt-12 text-gray-800">
        <h2 className="text-3xl font-semibold text-purple-800">Who We Are?</h2>
        <p className="mt-4 text-lg leading-relaxed">
          We are a passionate team dedicated to providing top-quality products
          and services. Our mission is to bring innovation and customer
          satisfaction to the forefront of everything we do.
        </p>

        <h2 className="text-3xl font-semibold mt-8 text-blue-800">
          Our Journey
        </h2>
        <p className="mt-4 text-lg leading-relaxed">
          Started in 2023, our company has grown to become a trusted name in the
          industry. From humble beginnings, we have expanded our reach, serving
          thousands of satisfied customers worldwide.
        </p>

        <div className="w-full my-6 border-t border-black" />

        <h2 className="text-3xl font-semibold text-purple-800">እኛ ማን ነን?</h2>
        <p className="mt-4 text-lg leading-relaxed">
          እኛ ከፍተኛ ጥራት ያላቸውን ምርቶች እና አገልግሎቶችን እናቀርባለን። የእኛ ተልእኮ ፈጠራን እና ደንበኛን
          ማምጣት ነው።
        </p>

        <h2 className="text-3xl font-semibold mt-8 text-blue-800">ጉዟችን</h2>
        <p className="mt-4 text-lg leading-relaxed">
          በ2015 የጀመረው ኩባንያችን በኢንዱስትሪው ውስጥ የታመነ ስም ለመሆን በቅቷል። ተደራሽነታችንን አስፍተናል፣
          በዓለም ዙሪያ በሺዎች የሚቆጠሩ ደስተኛ ደንበኞችን አፍርተናል።
        </p>

        <div className="w-full my-6 border-t border-black" />
      </div>

      {/* Company Values Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-semibold text-center text-green-700">
          Our Values
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Integrity",
              description:
                "We believe in honesty and transparency in all aspects of our business.",
            },
            {
              title: "Innovation",
              description:
                "We constantly push the boundaries to bring cutting-edge solutions to our customers.",
            },
            {
              title: "Customer First",
              description:
                "Our customers are at the heart of everything we do. We strive for excellence in customer satisfaction.",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {value.title}
              </h3>
              <p className="text-gray-600 mt-2">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="w-full my-6 border-t border-black" />

        <h2 className="text-3xl font-semibold text-center text-green-700">
          እሴቶች
        </h2>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "ታማኝነት",
              description: "በሁሉም የንግድ ስራዎቻችን ውስጥ በታማኝነት እና ግልጽነት እናምናለን።",
            },
            {
              title: "ፈጠራ",
              description: "ለደንበኞቻችን እጅግ በጣም ጥሩ መፍትሄዎችን ለማምጣት እንተጋለን።",
            },
            {
              title: "ቅድሚያ ለደንበኛ ",
              description:
                "ደንበኞቻችን ለምናደርገው ነገር ሁሉ የልብ ምት ናቸው። በደንበኛ እርካታ ውስጥ የላቀ ውጤት ለማግኘት እንተጋለን።",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {value.title}
              </h3>
              <p className="text-gray-600 mt-2">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
