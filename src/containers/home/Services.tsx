import { Flex, Text } from "@chakra-ui/react";
import { CardSlider } from "@/components/sliders";

export const Services = () => {
  return (
    <Flex
      direction="column"
      w="100%"
      align="center"
      bg="#F9F9FF"
      pt="50px"
      pb="85px"
      zIndex="10"
    >
      <Text fontSize="35px" lineHeight="55px" fontWeight="700">
        Services we offer
      </Text>

      <CardSlider />
    </Flex>
  );
};