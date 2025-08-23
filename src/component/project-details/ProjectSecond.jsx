"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = ["/backgroung.jpg", "/bg.png", "/logo.png"];

const ProjectSecond = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="flex justify-center items-center w-full px-4 py-6">
      <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl rounded-lg shadow-lg overflow-hidden group">
        {/* Image Container with Aspect Ratio */}
        <div className="relative w-full aspect-video">
          <Image
            key={index}
            src={images[index] || "/backgroung.jpg"}
            alt="Project image"
            fill
            className="object-cover rounded-lg animate-fadeIn"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 70vw, 60vw"
          />
        </div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10"></div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition z-10"
          aria-label="Previous image"
        >
          <FaArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
        </button>

        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition z-10"
          aria-label="Next image"
        >
          <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
        </button>

        {/* Indicator Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === index ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSecond;
