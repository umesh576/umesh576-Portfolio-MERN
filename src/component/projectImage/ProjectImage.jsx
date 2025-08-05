import React, { Component } from "react";
import Slider from "react-slick";
// import { baseUrl } from "./config";
import Image from "next/image";

function LazyLoad() {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };

  const imageLink = [
    "/project/1.png",
    "/project/2.png",
    "/project/3.png",
    "/project/4.png",
  ];
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <Image src="/project/1.png" width={100} height={100} alt="project" />
        </div>
        <div>
          <Image src="/project/1.png" width={100} height={100} alt="project" />
        </div>
        <div>
          <Image src="/project/1.png" width={100} height={100} alt="project" />
        </div>
        <div>
          <Image src="/project/1.png" width={100} height={100} alt="project" />
        </div>
      </Slider>
    </div>
  );
}

export default LazyLoad;
