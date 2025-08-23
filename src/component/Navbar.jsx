"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsChatTextFill, BsList, BsX } from "react-icons/bs";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateTo = (path) => {
    router.push(path);
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full sticky top-0 bg-white/10 backdrop-blur-md p-3 z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="w-1/2 md:w-1/4">
          <Image
            src={
              "https://res.cloudinary.com/dudpopk4h/image/upload/v1755970289/uploads/logo-1755970288237.png"
            }
            width={200}
            height={100}
            alt="logo"
            className="w-32 md:w-40 lg:w-48 h-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex w-1/2 justify-end lg:justify-around items-center px-4 lg:px-10 text-black">
          <nav>
            <ul className="flex gap-4 lg:gap-8 xl:gap-15 p-3">
              <li>
                <a
                  href="/"
                  className="px-3 py-1 rounded-2xl hover:text-white hover:bg-black hover:underline font-bold text-sm lg:text-base transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/my-project"
                  className="px-3 py-1 rounded-2xl hover:text-white hover:bg-black hover:underline font-bold text-sm lg:text-base transition-colors duration-200"
                >
                  Project
                </a>
              </li>
              <li>
                <a
                  href="/about-me"
                  className="px-3 py-1 rounded-2xl hover:text-white hover:bg-black hover:underline font-bold text-sm lg:text-base transition-colors duration-200"
                >
                  About
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex justify-center items-center ml-4">
            <button
              className="bg-white text-2xl rounded-full text-center text-black cursor-pointer hover:bg-gray-300 transition-colors duration-200"
              onClick={() => navigateTo("/contact-me")}
              aria-label="Contact me"
            >
              <div className="p-2 bg-black rounded-full">
                <BsChatTextFill className="text-white cursor-pointer hover:p-1 transition-all duration-200" />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-black p-2 rounded-md focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <BsX className="text-2xl" />
            ) : (
              <BsList className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg shadow-lg mt-3 p-4 animate-fadeIn">
          <nav>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="/"
                  className="block px-4 py-2 rounded-2xl hover:text-white hover:bg-black hover:underline font-bold transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/my-project"
                  className="block px-4 py-2 rounded-2xl hover:text-white hover:bg-black hover:underline font-bold transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Project
                </a>
              </li>
              <li>
                <a
                  href="/about-me"
                  className="block px-4 py-2 rounded-2xl hover:text-white hover:bg-black hover:underline font-bold transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
              </li>
              <li className="pt-2 border-t border-gray-200">
                <button
                  className="w-full flex items-center justify-center px-4 py-2 bg-black text-white rounded-2xl font-bold hover:bg-gray-800 transition-colors duration-200"
                  onClick={() => navigateTo("/contact-me")}
                >
                  <BsChatTextFill className="mr-2" />
                  Contact Me
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
