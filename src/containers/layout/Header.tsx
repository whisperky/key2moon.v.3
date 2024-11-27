"use client";

import {
  Flex,
  Image,
  Text,
  IconButton,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { Rancho } from "next/font/google";

import { GradBtn } from "@/components/buttons";

const rancho = Rancho({
  subsets: ["latin"],
  variable: "--font-rancho",
  weight: "400",
});

export const Header = () => {
  const { open, onToggle } = useDisclosure();

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Flex
      position="sticky"
      top={0}
      zIndex={100}
      px={{ base: "15px", md: "25px" }}
      py="18px"
      bg="white"
      justifyContent="space-between"
      alignItems="center"
      boxShadow="0px 4px 40px 0px #0000001A"
      flexWrap={{ base: "wrap", md: "nowrap" }}
    >
      <Flex alignItems="center" gap="10px" flex={{ base: 1, md: 1 }}>
        <Image src="/img/logo.png" h="40px" />
        <Text className={rancho.className} fontSize="24px" color="#4A5568">
          KeY2Moon Solutions
        </Text>
      </Flex>

      {/* Mobile menu button */}
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onToggle}
        variant="ghost"
        aria-label="Toggle Navigation"
      >
        {open ? <RxCross1 /> : <RxHamburgerMenu />}
      </IconButton>

      {/* Navigation links */}
      <Box
        display={{ base: open ? "block" : "none", md: "block" }}
        width={{ base: "full", md: "auto" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          gap={{ base: "20px", md: "60px" }}
          fontSize="16px"
          direction={{ base: "column", md: "row" }}
          align={{ base: "center", md: "center" }}
          pt={{ base: 4, md: 0 }}
          pb={{ base: 4, md: 0 }}
        >
          <Text
            fontSize="16px"
            fontWeight="500"
            color="#4A5568"
            lineHeight="24px"
            onClick={() => handleScroll("portfolio")}
            _hover={{ transform: "scale(1.05)", cursor: "pointer" }}
          >
            Portfolio
          </Text>
          <Text
            fontSize="16px"
            fontWeight="500"
            color="#4A5568"
            lineHeight="24px"
            onClick={() => handleScroll("about")}
            _hover={{ transform: "scale(1.05)", cursor: "pointer" }}
          >
            About
          </Text>

          <Text
            fontSize="16px"
            fontWeight="500"
            color="#4A5568"
            lineHeight="24px"
            onClick={() => handleScroll("blog")}
            _hover={{ transform: "scale(1.05)", cursor: "pointer" }}
          >
            Blog
          </Text>
          <Text
            fontSize="16px"
            fontWeight="500"
            color="#4A5568"
            lineHeight="24px"
            onClick={() => handleScroll("contact")}
            _hover={{ transform: "scale(1.05)", cursor: "pointer" }}
          >
            Contact
          </Text>
        </Flex>
      </Box>

      <Flex
        flex={1}
        justifyContent="flex-end"
        display={{ base: "none", md: "flex" }}
      >
        <GradBtn p="14px 25px" onClick={() => handleScroll("contact")}>
          Contact us
        </GradBtn>
      </Flex>
    </Flex>
  );
};
