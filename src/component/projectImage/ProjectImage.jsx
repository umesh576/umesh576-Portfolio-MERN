import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styles from "./project.module.css"; // CSS Module import

function LazyLoad() {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    dotsClass: `slick-dots ${styles.dots}`,
    prevArrow: <div className={styles.arrow} />,
    nextArrow: <div className={styles.arrow} />,
  };

  const images = [
    { src: "/project/1.png", alt: "Project 1" },
    { src: "/project/2.png", alt: "Project 2" },
    { src: "/project/3.png", alt: "Project 3" },
    { src: "/project/4.png", alt: "Project 4" },
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-2">
            {" "}
            {/* Add some padding between slides */}
            <div className="relative w-full h-96">
              {" "}
              {/* Set a fixed height for all slides */}
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover border border-black rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default LazyLoad;
