"use client";

import { useRef } from "react";
import { Flex, Image } from "@chakra-ui/react";
import Slider from "@ant-design/react-slick";

import { ArrowBtn } from "@/components/buttons";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ImageSlider = () => {
  const sliderRef = useRef<Slider>(null);

  const slickNext = () => {
    sliderRef.current?.slickNext();
  };

  const slickPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const settings = {
    dots: false,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    arrows: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1921,
        settings: {
          slidesToShow: 3,
          centerPadding: "413px",
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          centerPadding: "213px",
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          centerPadding: "13px",
        },
      },
    ],
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchThreshold: 10,
  };
  return (
    <Flex position="relative" w="100%" borderY="1px solid #E7DAED">
      <Flex
        position="absolute"
        top="-76px"
        right={{ base: "30px", lg: "100px" }}
        gap="22px"
      >
        <ArrowBtn onClick={slickPrev} arrowMode="left" />
        <ArrowBtn onClick={slickNext} arrowMode="right" />
      </Flex>
      <Slider
        ref={sliderRef}
        {...settings}
        className="w-full h-[202px] bg-[#F7F7FA] py-[60px] z-10 border-1 border-solid border-[#E7DAED]"
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <Image
            key={i}
            src={`/img/logos/logo-${i + 1}.png`}
            alt={`Logo ${i + 1}`}
            h={20}
            w="auto"
            objectFit="contain"
          />
        ))}
      </Slider>
    </Flex>
  );
};
