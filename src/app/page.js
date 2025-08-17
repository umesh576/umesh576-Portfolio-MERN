"use client";
import "./globals.css";
import "animate.css";
import HeroPage from "@/component/HeroPage";

import BackgroundPage from "./../component/BackgroundPage";
<head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
</head>;
export default function Home() {
  return (
    <div className="text-black h-screen">
      <div className="w-full  flex relative ">
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
