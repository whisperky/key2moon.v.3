"use client";

import { useState } from "react";
import { Flex, Image, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionImage = motion.create(Image);

export const HireSection = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      w={{ base: "90%", xl: "80%" }}
      mx="auto"
      px={84}
      py={47}
      mb={100}
      gap={18}
      justifyContent="space-between"
      alignItems="center"
      bg="linear-gradient(225deg, #F1F1F5 0%, #E4ECF7 100%)"
      borderRadius="2xl"
    >
      <Text
        fontSize="35px"
        fontWeight="700"
        lineHeight="55px"
        maxW="530px"
        textAlign={{ base: "center", lg: "left" }}
      >
        Hire the best developers and designers around!
      </Text>

      <Flex direction="column" gap={27}>
        <MotionImage
          src="/img/grad-light.png"
          alt="light1"
          h={10}
          objectFit="contain"
          animate={
            isHovering
              ? {
                  y: [0, -10, 0],
                  transition: { repeat: Infinity, duration: 1 },
                }
              : {}
          }
        />
        <Button
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          h="100%"
          p="18px 43px"
          background="linear-gradient(225deg, #FFC656 0%, #F16063 100%)"
          transition="all 0.3s ease-in-out"
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "0px 8px 20px rgba(241, 96, 99, 0.4)",
            background: "linear-gradient(225deg, #FFD066 0%, #FF6B6E 100%)",
          }}
          _active={{
            transform: "translateY(1px)",
            boxShadow: "0px 2px 10px rgba(241, 96, 99, 0.3)",
            background: "linear-gradient(225deg, #FFBB46 0%, #E15558 100%)",
          }}
        >
          <Text
            color="white"
            fontSize="18px"
            fontWeight="700"
            lineHeight="22px"
          >
            Hire Top Developers
          </Text>
        </Button>
        <MotionImage
          src="/img/grad-light.png"
          alt="light2"
          h={10}
          objectFit="contain"
          initial={{ scaleY: -1 }}
          animate={
            isHovering
              ? {
                  y: [0, 10, 0],
                  scaleY: [-1, -1, -1],
                  transition: { repeat: Infinity, duration: 1 },
                }
              : {}
          }
        />
      </Flex>
    </Flex>
  );
};
