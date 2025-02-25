import CategoryList from "./components/CategoryList";
import NewProducts from "./components/NewProducts";
import ProductList from "./components/ProductList";
import React, { Component } from "react";

import Slider from "./components/Slider";

const HomePage = () => {
  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-center text-4xl font-bold text-gray-800 mb-8">
          <span className="text-red-500"> Featured </span>Products
        </h1>
        <ProductList />
      </div>
      <div className="w-full my-6 border-t border-black" />
      <div className="mt-24 ">
        {/* <h1 className="text-2xl font-bold px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">
          Categories
        </h1> */}
        <CategoryList />
      </div>
      <div className="w-full my-6 border-t border-black" />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-center text-4xl font-bold text-gray-800 mb-8">
          <span className="text-red-500">New</span> Products
        </h1>
        <NewProducts />
      </div>
    </div>
  );
};

export default HomePage;
