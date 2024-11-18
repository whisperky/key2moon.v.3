import { Flex, Text } from "@chakra-ui/react";

import { ImageSlider } from "@/components/sliders";
import { TitleText } from "@/components/texts";
import { GradLine, GradCircle } from "@/components/icons";

export const RecommendSection = () => {
  return (
    <Flex direction="column" alignItems="center" justify="center" w="100%">
      <GradLine />

      <Flex
        position="relative"
        direction="column"
        alignItems="center"
        justify="center"
        w="100%"
      >
        <TitleText textAlign="center" pb="72px">
          Meet the People
          <br />
          <Text as="span" fontWeight="700">
            We are Working With
          </Text>
        </TitleText>

        <GradCircle bottom="-36px" left="90px" />
      </Flex>

      <ImageSlider />
    </Flex>
  );
};
