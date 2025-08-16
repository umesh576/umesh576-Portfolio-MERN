import React from "react";
import Image from "next/image";

const SlideImage = () => {
  const images = ["/backgroung.jpg", "bg.png", "logo.png"];
  return (
    <div className="relative">
      <div className="border">
        {images.map((image, index) => {
          <div key={index}>
            <Image src={image} width={1000} height={1000} alt="image" />;
          </div>;
        })}
      </div>
    </div>
  );
};

export default SlideImage;
