"use client";
import "./globals.css";
import HeroPage from "@/component/HeroPage";

import BackgroundPage from "./../component/BackgroundPage";

export default function Home() {
  return (
    <div className="text-black relative  h-screen mt-10">
      <div className="w-full  flex relative top-20">
        <div className=" text-black w-1/2 ">
          <HeroPage />
        </div>
        <div className="text-black w-1/2 ">
          <BackgroundPage />
        </div>
      </div>
    </div>
  );
}
