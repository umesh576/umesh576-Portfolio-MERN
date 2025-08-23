"use client";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import ProjectCounter from "./animate-component/ProjectCounter";

const HeroPage = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="w-full py-8 sm:py-12 md:py-16 lg:p-10 flex justify-center lg:justify-start">
          <div className="text-center lg:text-left">
            {/* Greeting */}
            <h3 className="font-bold text-xl sm:text-2xl md:text-3xl animate-bounce mb-2 sm:mb-3">
              Hey, I'm Umesh 🖖
            </h3>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6">
              <span className="text-violet-700 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-2 sm:pr-3 md:pr-4 text-3xl sm:text-4xl md:text-5xl font-bold block lg:inline-block mb-2 lg:mb-0 lg:mr-2">
                Fullstack
              </span>
              <span className="block lg:inline-block mt-2 lg:mt-0">
                Developer
              </span>
            </h1>

            {/* Description */}
            <div className="py-3 sm:py-4 text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0">
              <p className="mb-3 sm:mb-4">
                I'm a Fullstack web developer based in Nepal. I'll help you
                build beautiful, secure, and responsive websites that your users
                will love.
              </p>
              <div className="font-medium">
                Worked on <ProjectCounter className="inline-block" />
                <span className="text-violet-400 text-xl sm:text-2xl font-bold">
                  +
                </span>{" "}
                projects
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 p-1 mb-4 sm:mb-6 justify-center lg:justify-start">
              <div>
                <button className="px-4 py-2 sm:px-5 sm:py-3 bg-black text-white rounded-lg shadow-lg shadow-gray-400 cursor-pointer relative hover:top-1 transition-all duration-200 text-sm sm:text-base w-full sm:w-auto">
                  Get in touch
                </button>
              </div>
              <div>
                <button className="px-4 py-2 sm:px-5 sm:py-3 bg-gray-300 text-black border-2 border-gray-100 rounded-lg shadow-lg shadow-gray-300 cursor-pointer font-bold relative hover:top-1 transition-all duration-200 text-sm sm:text-base w-full sm:w-auto">
                  Browse projects
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 sm:gap-5 md:gap-6 p-2">
              {[
                {
                  icon: <FaFacebook />,
                  href: "https://www.facebook.com/umesh.joshi.184877",
                },
                {
                  icon: <FaInstagram />,
                  href: "https://www.instagram.com/umesh_joshi7/",
                },
                {
                  icon: <FaLinkedin />,
                  href: "https://www.linkedin.com/in/umesh-joshi-475b81304/",
                },
                { icon: <FaGithub />, href: "https://github.com/umesh576" },
              ].map((social, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center p-2 sm:p-3 bg-gray-300 cursor-pointer hover:animate-bounce rounded-lg shadow-md shadow-black transition-all duration-300 hover:shadow-lg"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Social media link"
                  >
                    {social.icon}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
