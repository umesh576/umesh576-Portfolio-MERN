"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";

const images = ["/backgroung.jpg", "/bg.png", "/logo.png"];
const MyProject = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleBack = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="flex  h-screen px-4">
      <div className="flex items-center border w-1/3 max-w-5xl">
        {/* Prev Button */}
        <button
          className="cursor-pointer  sm:p-3 rounded-md bg-white shadow hover:bg-gray-100"
          onClick={handlePrev}
        >
          <FaArrowLeftLong className=" sm:w-6 sm:h-6" />
        </button>

        {/* Image Container */}
        <div className="relative top-0 w-1/2 h-[100px] sm:h-[400px] md:h-[500px] flex justify-center">
          <Image
            src={images[index] || "/backgoung.jpg"}
            alt="image"
            fill
            className="object-contain border-black  border rounded-md"
            priority
          />
        </div>

        {/* Next Button */}
        <button
          onClick={handleBack}
          className="cursor-pointer  p-2 sm:p-3 rounded-md bg-transparent shadow hover:bg-gray-100"
        >
          <FaArrowRight className=" sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  );
};

export default MyProject;
