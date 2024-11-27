"use client";

import { useState, useRef } from "react";
import { Flex, Image, Text, Grid } from "@chakra-ui/react";
import Slider from "@ant-design/react-slick";

import { customers } from "@/data/features";
import { ArrowBtn } from "@/components/buttons";

export const CustomerSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
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
          centerPadding: "200px",
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          centerPadding: "0",
        },
      },
    ],
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchThreshold: 10,
    afterChange: (current: number) => setActiveSlide(current),
  };

  return (
    <Flex alignItems="center" gap={{ base: "10px", md: "50px" }}>
      <ArrowBtn onClick={slickPrev} arrowMode="left" mb="120px" />

      <Flex direction="column" w="100%" alignItems="center">
        <Flex w="100%" justifyContent="center" position="relative" maxW="727px">
          <Text
            fontSize="18px"
            color="#718096"
            fontWeight="400"
            lineHeight="36px"
            textAlign="center"
            maxW="535px"
            h={{ base: "330px", sm: "180px" }}
            transition="all 0.3s ease"
          >
            {customers[activeSlide].description}
          </Text>

          <Image
            position="absolute"
            display={{ base: "none", md: "block" }}
            left="-70px"
            src="/img/icons/left-dot.png"
            alt="left-dot"
          />
          <Image
            position="absolute"
            display={{ base: "none", md: "block" }}
            right="-70px"
            bottom="10px"
            src="/img/icons/right-dot.png"
            alt="right-dot"
          />
        </Flex>

        <Slider
          ref={sliderRef}
          {...settings}
          className="w-[60vw] h-[202px] py-[60px] z-10 border-1 border-solid border-[#E7DAED]"
        >
          {customers.map((customer, i) => (
            <Flex key={i}>
              <Flex
                direction="column"
                alignItems="center"
                opacity={activeSlide === i ? "1" : "0.5"}
                transition="all 0.3s ease"
              >
                <Image
                  src={customer.avatar}
                  alt={customer.name}
                  w={activeSlide === i ? "100px" : "80px"}
                  h={activeSlide === i ? "100px" : "80px"}
                  my={activeSlide === i ? "0px" : "10px"}
                  boxShadow={
                    activeSlide === i ? "0px 4px 30px 0px #0000000D" : "none"
                  }
                  transition="all 0.3s ease"
                  borderRadius="50%"
                  objectFit="cover"
                />

                <Grid templateColumns="repeat(5, 1fr)" gap="5px" py="15px">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Image key={i} src="/img/icons/star.png" alt="star" />
                  ))}
                </Grid>

                <Text
                  fontSize="18px"
                  fontWeight="700"
                  lineHeight="22px"
                  color={activeSlide === i ? "#57007B" : "#718096"}
                  transition="all 0.3s ease"
                  pb="2px"
                >
                  {customer.name}
                </Text>
                <Text fontSize="14px" fontWeight="400" lineHeight="22px">
                  {customer.role}
                </Text>
              </Flex>
            </Flex>
          ))}
        </Slider>
      </Flex>

      <ArrowBtn onClick={slickNext} arrowMode="right" mb="120px" />
    </Flex>
  );
};
