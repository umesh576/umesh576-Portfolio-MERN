"use client";
import "./globals.css";
import HeroPage from "@/component/HeroPage";

import BackgroundPage from "./../component/BackgroundPage";

export default function Home() {
  return (
    <div className="text-black  h-screen mt-20">
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
