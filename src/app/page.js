import HeroPage from "@/component/HeroPage";
import Image from "next/image";
import BackgroundPage from "./../component/BackgroundPage";

export default function Home() {
  return (
    <div className="text-black relative">
      <div className="w-full flex">
        <div className="w-1/2">
          <HeroPage />
        </div>
        <div className="text-white w-1/2">
          <BackgroundPage />
        </div>
      </div>
    </div>
  );
}
