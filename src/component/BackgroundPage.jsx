import React from "react";
import Image from "next/image";

const BackgroundPage = () => {
  return (
    <div className="w-full relative flex justify-center items-center p-4">
      <div className="w-full flex justify-center">
        <div className="border-2 border-violet-300 rounded-full p-3 sm:p-4 md:p-5 lg:p-6">
          <div className="border-2 border-violet-300 rounded-full overflow-hidden">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80">
              <Image
                className="object-cover"
                src={
                  "https://res.cloudinary.com/dudpopk4h/image/upload/v1755970787/uploads/ownbg-1755970785238.jpg"
                }
                fill
                alt="Profile image"
                sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 256px, (max-width: 1280px) 288px, 320px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundPage;
