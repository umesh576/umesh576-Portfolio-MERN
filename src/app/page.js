"use client";
import "./globals.css";
import "animate.css";
import HeroPage from "@/component/HeroPage";
import BackgroundPage from "./../component/BackgroundPage";

export default function Home() {
  return (
    <div className="text-black min-h-screen">
      <div className="w-full flex flex-col lg:flex-row relative">
        <div className="text-black w-full lg:w-1/2">
          <HeroPage />
        </div>
        <div className="text-black w-full lg:w-1/2">
          <BackgroundPage />
        </div>
      </div>
    </div>
  );
}
