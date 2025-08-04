import React from "react";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="w-full sticky top-0 bg-white/10 backdrop-blur-md p-3">
      <div className="flex justify-around text-white cursor-pointer">
        <div>
          <Image src={"/logo.png"} width={200} height={100} alt="logo" />
        </div>
        <div className="flex gap-20 px-10 text-black ">
          <nav>
            <ul className=" flex gap-15 p-3">
              <li className="">
                <a href="#" className="hover:text-gray-400 hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 hover:underline">
                  Project
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gray-400 hover:underline">
                  About
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <button className=" bg-white rounded-2xl text-center text-black cursor-pointer hover:bg-gray-300 "></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
