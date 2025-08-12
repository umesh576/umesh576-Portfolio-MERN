"use client";
import React from "react";
import Image from "next/image";
import { BsChatTextFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="w-full fixed top-0 bg-white/10 backdrop-blur-md p-3 z-10">
      <div className="flex justify-between text-white cursor-pointer">
        <div className="w-1/2">
          <Image src={"/logo.png"} width={200} height={100} alt="logo" />
        </div>
        <div className="w-1/2 flex justify-around px-10 text-black ">
          <nav>
            <ul className=" flex gap-15 p-3">
              <li>
                <a
                  href="/"
                  className="px-3 py-1 rounded-2xl hover:text-white hover:bg-black hover:underline font-bold"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/my-project"
                  className="px-3 py-1 rounded-2xl hover:text-white hover:bg-black hover:underline font-bold"
                >
                  Project
                </a>
              </li>

              <li>
                <a
                  href="/about-me"
                  className="px-3 py-1 rounded-2xl hover:text-white hover:bg-black hover:underline font-bold"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/services-me"
                  className="px-3 py-1 rounded-2xl hover:text-white hover:bg-black hover:underline font-bold"
                >
                  services
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex justify-center items-center ">
            <button
              className=" bg-white text-2xl rounded-full text-center text-black cursor-pointer   hover:bg-gray-300 "
              onClick={() => {
                router.push("/contact-me");
              }}
            >
              <div className="p-2 bg-black rounded-full ">
                <BsChatTextFill className="text-white cursor-pointer hover:p-1" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
