import HeroPage from "@/component/HeroPage";

import BackgroundPage from "./../component/BackgroundPage";

export default function Home() {
  return (
    <div className="text-black relative">
      <div className="w-full  flex items-center">
        <div className=" text-black w-1/2 h-full">
          <HeroPage />
        </div>
        <div className="text-black w-1/2 h-full">
          <BackgroundPage />
        </div>
      </div>
    </div>
  );
}
