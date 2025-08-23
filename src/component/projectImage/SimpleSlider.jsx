import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/Slider.css";
import Image from "next/image";

const SimpleSlider = ({ images }) => {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          dots: true,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-2 sm:px-4 md:px-6">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-1 sm:px-2">
            <div className="relative aspect-video sm:aspect-[16/9] md:aspect-[21/9]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 70vw"
                className="object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                priority={index === 2}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
