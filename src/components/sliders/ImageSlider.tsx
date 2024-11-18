"use client";

import { useRef, useState } from "react";
import { Flex, Text, Image, Icon, Button } from "@chakra-ui/react";
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";
import Slider from "@ant-design/react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBtn } from "../buttons";

export const ImageSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const slickNext = () => {
    sliderRef.current?.slickNext();
  };

  const slickPrev = () => {
    sliderRef.current?.slickPrev();
  };

  var settings = {
    dots: false,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    arrows: false,
    centerMode: true,
    centerPadding: "413px",
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchThreshold: 10,
  };
  return (
    <Flex position="relative" w="100%">
      <Flex position="absolute" top="-76px" right="100px" gap="22px">
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
