"use client";

import { Flex, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { GradBtn } from "@/components/buttons";
import { GradCircle } from "@/components/icons/GradCircle";

const MotionFlex = motion.create(Flex);
const MotionText = motion.create(Text);
const MotionImage = motion.create(Image);

export const Banner = () => {
  return (
    <Flex
      position="relative"
      pt={{ base: "40px", lg: "69px" }}
      pb={{ base: "60px", lg: "106px" }}
      alignItems="center"
      direction={{ base: "column", lg: "row" }}
      px={{ base: "4", lg: "10" }}
    >
      <Flex direction="column" gap={{ base: "40px", lg: "75px" }}>
        <Flex
          direction="column"
          gap={{ base: "20px", lg: "28px" }}
          maxWidth="540px"
        >
          <MotionText
            fontSize={{ base: "32px", lg: "45px" }}
            fontWeight="700"
            className="gradient-primary"
            textAlign={{ base: "center", lg: "left" }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Text as="span" fontWeight="300">
              Creative
            </Text>{" "}
            <Text as="span" className="gradient-title">
              {" "}
              Web3
            </Text>{" "}
            <Text as="span" fontWeight="300">
              Agency{" "}
            </Text>
            <Text as="span">for your next </Text>{" "}
            <Text as="span" className="gradient-title">
              Project
            </Text>
          </MotionText>
          <MotionText
            fontSize={{ base: "16px", md: "18px" }}
            fontWeight="400"
            lineHeight={{ base: "28px", md: "36px" }}
            color="#4A5568"
            textAlign={{ base: "center", md: "left" }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Hands-on advisory firm helping projects to enter and evolve in the
            web3 industry
          </MotionText>
        </Flex>
        <MotionFlex
          justifyContent={{ base: "center", md: "flex-start" }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <GradBtn p={{ base: "16px 24px", md: "19px 30px" }}>
            Let&apos;s get started!
          </GradBtn>
        </MotionFlex>
      </Flex>
      <MotionImage
        src="/img/web-development-1.png"
        objectFit="contain"
        width={{ base: "100%", md: "auto" }}
        mt={{ base: "40px", md: "0" }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      />

      <GradCircle
        bottom={{ base: "-20px", md: "-36px" }}
        left={{ base: "50%", md: "350px" }}
        transform={{ base: "translateX(-50%)", md: "none" }}
      />
    </Flex>
  );
};
