import React from "react";
import Image from "next/image";

const BackgroundPage = () => {
  return (
    <div className="w-full h-screen relative flex items-center">
      <div className="w-full flex justify-center">
        {/* <Image src={"/bg.png"} width={800} height={800} alt={"admin"} /> */}
        <div>
          <div className="border-1 rounded-full p-5">
            <div className="p-0 border-1 rounded-full">
              <Image
                className="rounded-full object-cover"
                src={"/ownbg.jpeg"}
                width={400}
                height={400}
                alt="Image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundPage;
