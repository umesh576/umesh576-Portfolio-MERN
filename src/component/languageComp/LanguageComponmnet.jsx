import React from "react";
import { FaNodeJs } from "react-icons/fa6";
import { RiReactjsFill, RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiTypescript, SiCplusplus } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const LanguageComponmnet = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-10 animate-fade">
        {/* NodeJs */}
        <div className="p-4 cursor-pointer flex flex-col items-center">
          <FaNodeJs className="w-16 h-16 sm:w-20 sm:h-20 text-green-500 transition-transform duration-300 hover:scale-110 hover:text-red-500" />
          <p className="text-sm sm:text-base md:text-lg text-center mt-2 font-medium">
            NodeJs
          </p>
        </div>

        {/* ReactJs */}
        <div className="p-4 cursor-pointer flex flex-col items-center">
          <RiReactjsFill className="w-16 h-16 sm:w-20 sm:h-20 text-blue-500 transition-transform duration-300 hover:scale-110 hover:text-red-500" />
          <p className="text-sm sm:text-base md:text-lg text-center mt-2 font-medium">
            ReactJs
          </p>
        </div>

        {/* ExpressJs */}
        <div className="p-4 cursor-pointer flex flex-col items-center">
          <SiExpress className="w-16 h-16 sm:w-20 sm:h-20 text-gray-800 transition-transform duration-300 hover:scale-110 hover:text-red-500" />
          <p className="text-sm sm:text-base md:text-lg text-center mt-2 font-medium">
            ExpressJs
          </p>
        </div>

        {/* NextJs */}
        <div className="p-4 cursor-pointer flex flex-col items-center">
          <RiNextjsFill className="w-16 h-16 sm:w-20 sm:h-20 text-gray-900 transition-transform duration-300 hover:scale-110 hover:text-red-500" />
          <p className="text-sm sm:text-base md:text-lg text-center mt-2 font-medium">
            NextJs
          </p>
        </div>

        {/* Java */}
        <div className="p-4 cursor-pointer flex flex-col items-center">
          <FaJava className="w-16 h-16 sm:w-20 sm:h-20 text-red-500 transition-transform duration-300 hover:scale-110 hover:text-red-600" />
          <p className="text-sm sm:text-base md:text-lg text-center mt-2 font-medium">
            Java
          </p>
        </div>

        {/* Javascript */}
        <div className="p-4 cursor-pointer flex flex-col items-center">
          <IoLogoJavascript className="w-16 h-16 sm:w-20 sm:h-20 text-yellow-400 transition-transform duration-300 hover:scale-110 hover:text-red-500" />
          <p className="text-sm sm:text-base md:text-lg text-center mt-2 font-medium">
            JavaScript
          </p>
        </div>

        {/* Typescript */}
        <div className="p-4 cursor-pointer flex flex-col items-center">
          <SiTypescript className="w-16 h-16 sm:w-20 sm:h-20 text-blue-600 transition-transform duration-300 hover:scale-110 hover:text-red-500" />
          <p className="text-sm sm:text-base md:text-lg text-center mt-2 font-medium">
            TypeScript
          </p>
        </div>

        {/* C++ */}
        <div className="p-4 cursor-pointer flex flex-col items-center">
          <SiCplusplus className="w-16 h-16 sm:w-20 sm:h-20 text-blue-500 transition-transform duration-300 hover:scale-110 hover:text-red-500" />
          <p className="text-sm sm:text-base md:text-lg text-center mt-2 font-medium">
            C++
          </p>
        </div>
      </div>
    </div>
  );
};

export default LanguageComponmnet;
