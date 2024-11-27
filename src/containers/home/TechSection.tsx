"use client";

import { useState } from "react";
import { Flex, Text } from "@chakra-ui/react";

import { TitleText } from "@/components/texts";
import { GradLine } from "@/components/icons";

export const TechSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Backend");

  return (
    <Flex
      direction="column"
      w="100%"
      py={{ base: "40px", md: "89px" }}
      px={{ base: "5%", md: "15%" }}
      borderBottom="1px solid #E7DAED"
    >
      <Flex
        position="relative"
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <GradLine />

        <TitleText textAlign="center" pb={{ base: "24px", md: "38px" }}>
          Our <br />
          <Text as="span" fontWeight="700">
            Tech Stack
          </Text>
        </TitleText>

        <Flex
          gap={{ base: "24px", md: "48px" }}
          flexWrap="wrap"
          justify="center"
          width="100%"
        >
          {[
            "Backend",
            "Frontend",
            "Databases",
            "CMS",
            "CloudTesting",
            "DevOps",
          ].map((category, i) => (
            <Flex key={i} direction="column" align="center">
              <Text
                fontSize="16px"
                cursor="pointer"
                className={`${
                  category === activeCategory ? "gradient-detail" : ""
                }`}
                pb="8px"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Text>
              {category === activeCategory && (
                <Flex
                  w="25px"
                  h="3px"
                  bg="linear-gradient(180deg, #f76680 0%, #57007b 100%)"
                  borderRadius="full"
                />
              )}
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};
