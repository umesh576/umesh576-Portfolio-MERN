"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// const images = ["/backgroung.jpg", "/bg.png", "/logo.png"];

const ImageCard = ({ imagees }) => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev === imagees.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? imagees.length - 1 : prev - 1));
  };
  console.log("images", imagees);

  return (
    <div className="flex justify-center items-center w-full px-4 py-6">
      <div className="relative w-[250px] h-[180px] sm:w-[350px] sm:h-[240px] md:w-[450px] md:h-[300px] rounded-lg shadow-lg overflow-hidden group">
        {/* Image */}
        <Image
          src={imagees[index] || "/backgoung.jpg"}
          alt="image"
          fill
          className="object-cover rounded-lg animate-fadeIn"
          priority
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10"></div>

        {/* Prev Button */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition z-10"
        >
          <FaArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition z-10"
        >
          <FaArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
