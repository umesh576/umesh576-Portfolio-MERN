import React from "react";
import { FaNodeJs } from "react-icons/fa6";
import { RiReactjsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

const LanguageComponmnet = () => {
  return (
    <div>
      <div>
        <div className="flex justify-center flex-wrap gap-10 animate-fade">
          <div className="p-5 cursor-pointer">
            <FaNodeJs className="size-30 text-green-500 transition-transform duration-300 ease-in-out hover:animate-bounce  hover:text-red-500" />
            <p className="text-lg text-center py-1">NodeJs</p>
          </div>
          <div className="p-5 cursor-pointer">
            <RiReactjsFill className="size-30 text-blue-500 hover:text-red-500 hover:animate-bounce " />
            <p className="text-lg text-center py-1">ReactJs</p>
          </div>
          <div className="p-5 cursor-pointer">
            <SiExpress className="size-30 text-black-500 hover:text-red-500 hover:animate-bounce " />
            <p className="text-lg text-center py-1">ExpressJs</p>
          </div>
          <div className="p-5 cursor-pointer">
            <RiNextjsFill className="size-30 text-black-500 hover:text-red-500 hover:animate-bounce " />
            <p className="text-lg text-center py-1">ExpressJs</p>
          </div>
          <div className="p-5 cursor-pointer">
            <FaJava className="size-30 text-red-500 hover:text-red-500 hover:animate-bounce " />
            <p className="text-lg text-center py-1">Java</p>
          </div>
          <div className="p-5 cursor-pointer">
            <IoLogoJavascript className="size-30 text-yellow-400 hover:text-red-500 hover:animate-bounce " />

            <p className="text-lg text-center py-1">Javascript</p>
          </div>
          <div className="p-5 cursor-pointer">
            <SiTypescript className="size-30 text-blue-500 hover:text-red-500 hover:animate-bounce " />

            <p className="text-lg text-center py-1">Javascript</p>
          </div>
          <div className="p-5 cursor-pointer">
            <SiCplusplus className="size-30 text-blue-500 hover:text-red-500 hover:animate-bounce " />
            <p className="text-lg text-center py-1">Javascript</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageComponmnet;
