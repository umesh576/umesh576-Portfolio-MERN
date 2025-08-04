import React from "react";
import Image from "next/image";

const BackgroundPage = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="w-full flex justify-center">
        <Image src={"/bg.png"} width={800} height={800} alt={"admin"} />
      </div>
    </div>
  );
};

export default BackgroundPage;
