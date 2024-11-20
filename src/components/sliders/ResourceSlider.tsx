"use client";

import { useRef, useState } from "react";
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import Slider from "@ant-design/react-slick";

import { IoMdArrowForward } from "react-icons/io";

import { resources } from "@/data/features";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ResourceSlider = () => {
  var settings = {
    dots: false,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    arrows: false,
    centerMode: true,
    centerPadding: "300px",
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
      <Slider {...settings} className="w-full py-[60px] z-10 mx-auto">
        {resources.map((resource, i) => (
          <Flex key={i}>
            <Flex gap="20px" w="254px" direction="column" justifySelf="center">
              <Image
                key={i}
                src={resource.image}
                alt={resource.title}
                w="254px"
                h="175px"
                borderRadius="lg"
                objectFit="cover"
              />
              <Text fontSize="16px" fontWeight="500" lineHeight="25px">
                {resource.description}
              </Text>
              <Flex justifyContent="flex-end">
                <Button color="#57007B" lineHeight="25px">
                  Read More <IoMdArrowForward />
                </Button>
              </Flex>
            </Flex>
          </Flex>
        ))}
      </Slider>
    </Flex>
  );
};
