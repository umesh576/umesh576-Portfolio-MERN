"use client";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import ProjectCounter from "./animate-component/ProjectCounter";

const HeroPage = () => {
  return (
    <div className="w-full flex ">
      <div className="w-full px-5">
        <div className="w-full p-10 flex justify-baseline ">
          <div>
            <h3 className="font-bold text-2xl animate-bounce">
              Hey,I'm Umesh🖖
            </h3>
            <h1 className="text-7xl font-extrabold">
              <span className="text-violet-700">Fullstack</span>
              <br />
              Developer
            </h1>
            <div className="py-4 text-lg">
              <p>
                I'm Fullstack web developer based in nepal, I'll help you to
                build beautiful, safe , secure and responsive website your user
                will love the product.
              </p>
              <div>
                Worked on <ProjectCounter className="inline-block " />
                <span className="text-violet-400 text-2xl font-bold">
                  +
                </span>{" "}
                project
              </div>
            </div>
            <div className="flex p-1 gap-3">
              <div>
                <button className="px-4 py-2 bg-black text-white rounded-lg shadow-lg shadow-gray-400 cursor-pointer relative  hover:top-1">
                  Get in touch
                </button>
              </div>
              <div>
                <button className="px-4 py-2 bg-gray-300 text-black border-2 border-gray-100 rounded-lg shadow-lg shadow-gray-300 cursor-pointer font-bold relative hover:top-1">
                  Browse project
                </button>
              </div>
            </div>
            <div className="flex p-2 gap-7">
              <div className="flex justify-center items-center p-2 border-1 bg-gray-300 cursor-pointer hover:animate-bounce rounded-lg  shadow-black shadow-md">
                <a href="https://www.facebook.com/umesh.joshi.184877">
                  <FaFacebook />
                </a>
              </div>
              <div className="flex justify-center items-center p-2 border-1 bg-gray-300 cursor-pointer hover:animate-bounce rounded-lg  shadow-black shadow-md">
                <a href="https://www.instagram.com/umesh_joshi7/">
                  <FaInstagramSquare />
                </a>
              </div>
              <div className="flex justify-center items-center p-2 border-1 bg-gray-300 cursor-pointer hover:animate-bounce rounded-lg  shadow-black shadow-md">
                <a href="https://www.linkedin.com/in/umesh-joshi-475b81304/">
                  <FaLinkedin />
                </a>
              </div>
              <div className="flex justify-center items-center p-2 border-1 bg-gray-300 cursor-pointer hover:animate-bounce rounded-lg  shadow-black shadow-md">
                <a href="https://github.com/umesh576">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
