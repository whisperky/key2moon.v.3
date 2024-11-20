"use client";

import { Flex, Text, Image } from "@chakra-ui/react";

import { GradLine } from "@/components/icons";
import { TitleText } from "@/components/texts";
import { CustomerSlider } from "@/components/sliders";

export const ImpactSection = () => {
  return (
    <Flex direction="column" py="124px">
      <Flex direction="column" alignItems="center" justifyContent="center">
        <GradLine />

        <TitleText textAlign="center" pb="51px">
          Why customers love <br />
          <Text as="span" fontWeight="700">
            working with us
          </Text>
        </TitleText>

        <CustomerSlider />
      </Flex>
    </Flex>
  );
};
