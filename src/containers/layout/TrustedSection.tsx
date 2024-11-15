"use client";

import { Flex, Heading, Text, Link, Icon, Image } from "@chakra-ui/react";

import { FaPlayCircle } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";

export const TrustedSection: React.FC = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      align="center"
      justify="space-between"
      alignItems="center"
      mt="15px"
      py="167px"
      px={{ base: 6, md: 20 }}
      gap={24}
      bg="white"
      borderRadius="lg"
    >
      {/* Left Text Section */}
      <Flex direction="column" maxW="535px" mb={{ base: 8, md: 0 }}>
        <Flex
          h="5px"
          w="69px"
          mb="20px"
          bg="linear-gradient(225deg, #F76680 0%, #57007B 100%)"
        />
        <Text
          maxW="495px"
          fontSize="35px"
          color="gray.800"
          fontWeight="400"
          lineHeight="55px"
          mb={2}
        >
          Leading companies trust us{" "}
          <Text
            as="span"
            fontSize="35px"
            color="gray.900"
            fontWeight="700"
            mb={4}
          >
            to develop software
          </Text>
        </Text>
        <Text
          fontSize="18px"
          color="#718096"
          fontWeight="400"
          mb={4}
          lineHeight="36px"
        >
          We{" "}
          <Text as="span" color="#F76680">
            add development capacity
          </Text>{" "}
          to tech teams. Our value isn't limited to building teams but is
          equally distributed across the project lifecycle. We are a custom
          software development company that guarantees the successful delivery
          of your project.
        </Text>
        <Link
          href="#"
          color="#57007B"
          display="flex"
          alignItems="center"
          fontWeight="semibold"
          pt="51px"
        >
          See more Informations <IoMdArrowForward />
        </Link>
      </Flex>

      {/* Right Video Section */}
      <Flex
        position="relative"
        width={{ base: "100%", md: "45%" }}
        align="center"
        justify="center"
      >
        {/* Background Image */}
        <Image
          src="/img/teamwork.png"
          alt="Team Collaboration"
          width="600px"
          objectFit="cover"
          className="rounded-lg"
        />

        {/* Play Button Icon */}
        <Flex
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          align="center"
          justify="center"
        >
          <Icon
            w="58px"
            h="58px"
            color="#57007B"
            cursor="pointer"
            bg="white"
            borderRadius="full"
            outline="15px solid #FFFFFF6E"
            _hover={{
              bg: "#57007B",
              color: "white",
            }}
          >
            <FaPlayCircle />
          </Icon>
        </Flex>
      </Flex>
    </Flex>
  );
};
