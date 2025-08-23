"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const ImageCard = ({ imagees }) => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev === imagees.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? imagees.length - 1 : prev - 1));
  };

  return (
    <div className="flex justify-center items-center px-2 sm:px-4 py-4 sm:py-6 w-full">
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-48 sm:h-60 md:h-72 lg:h-80 shadow-lg cursor-pointer group rounded-xl overflow-hidden">
        {/* Image */}
        <Image
          src={imagees[index] || "/backgoung.jpg"}
          alt="image"
          fill
          className="object-cover animate-fadeIn"
          priority
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10"></div>

        {/* Prev Button */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-2 -translate-y-1/2 p-2 sm:p-3 md:p-4 rounded-full bg-black/50 text-white hover:bg-black/70 transition z-10"
        >
          <FaArrowLeft className="w-4 h-4 sm:w-5 sm:h-6 md:w-6 md:h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 -translate-y-1/2 p-2 sm:p-3 md:p-4 rounded-full bg-black/50 text-white hover:bg-black/70 transition z-10"
        >
          <FaArrowRight className="w-4 h-4 sm:w-5 sm:h-6 md:w-6 md:h-6" />
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
