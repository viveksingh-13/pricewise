import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Herocorusal = () => {
  const images = [
    { src: "/assets/images/hero-1.svg", alt: "smartwarch" },
    { src: "/assets/images/hero-2.svg", alt: "bag" },
    { src: "/assets/images/hero-3.svg", alt: "lamp" },
    { src: "/assets/images/hero-4.svg", alt: "air fryer" },
    { src: "/assets/images/hero-5.svg", alt: "chair" },
  ];
  return (
    <div className="hero-carousel">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showArrows={false}
        showStatus={false}
      >
        {images?.map((item) => (
          <Image
            key={item.alt}
            src={item.src}
            alt={item.alt}
            height={478}
            width={478}
          />
        ))}
      </Carousel>
      <Image
        src="assets/icons/hand-drawn-arrow.svg"
        alt="arrow"
        width={175}
        height={175}
        className="max-xl:hidden absolute -left-[15%] bottom-0"
      />
    </div>
  );
};

export default Herocorusal;
