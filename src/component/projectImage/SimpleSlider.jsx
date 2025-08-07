import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/Slider.css";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };

  const images = [
    { src: "/project/1.png", alt: "Project 1" },
    { src: "/project/2.png", alt: "Project 2" },
    { src: "/project/3.png", alt: "Project 3" },
    { src: "/project/4.png", alt: "Project 4" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-2">
            <div className="relative w-full h-96">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover border border-black rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default SimpleSlider;
