"use client";

import { useEffect, useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import Slider from "@ant-design/react-slick";

import { ProgressBar, ProgressRoot } from "@/components/ui/progress";
import { ServiceCard } from "@/components/cards";

import { slides } from "@/data/features";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const CardSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    console.log(activeSlide);
  }, [activeSlide]);

  var settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    arrows: false,
    className: "center",
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 3,
          centerPadding: "150px",
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: "0",
        },
      },
    ],
    centerMode: true,
    speed: 800,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchThreshold: 10,
    appendDots: (dots: any) => (
      <Flex justifyContent="space-between" width="100%">
        <Flex flex="1" justifyContent="center">
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </Flex>
        <Flex position="absolute" right="100px" alignItems="center" gap="10px">
          <Text
            fontSize="16px"
            fontWeight="500"
            lineHeight="25px"
            textAlign="left"
            textDecorationSkipInk="none"
          >
            {String(activeSlide + 1).padStart(2, "0")}
          </Text>
          <ProgressRoot
            size="xs"
            colorPalette="purple"
            value={activeSlide + 1}
            max={slides.length}
          >
            <ProgressBar w="100px" />
          </ProgressRoot>
          <Text
            fontSize="16px"
            fontWeight="500"
            lineHeight="25px"
            textAlign="left"
            textDecorationSkipInk="none"
          >
            {String(slides.length).padStart(2, "0")}
          </Text>
        </Flex>
      </Flex>
    ),
    afterChange: (current: number) => setActiveSlide(current),
  };
  return (
    <Slider {...settings} className="slider-container w-full h-[430px]">
      {slides.map((slide, i) => (
        <Flex key={i}>
          <ServiceCard {...slide} isActive={activeSlide === i} />
        </Flex>
      ))}
    </Slider>
  );
};
