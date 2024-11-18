import { Flex, Text, Image } from "@chakra-ui/react";

import { GradLine } from "@/components/icons";
import { TitleText } from "@/components/texts";

export const ImpactSection = () => {
  return (
    <Flex direction="column" py="124px">
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        maxW="727px"
      >
        <GradLine />

        <TitleText textAlign="center" pb="51px">
          Why customers love <Text fontWeight="700">working with us</Text>
        </TitleText>

        <Flex w="100%" justifyContent="center" position="relative">
          <Text
            fontSize="18px"
            color="#718096"
            fontWeight="400"
            lineHeight="36px"
            textAlign="center"
            maxW="535px"
          >
            Without any doubt I recommend Alcaline Solutions as one of the best
            web design and digital marketing agencies. One of the best agencies
            I’ve came across so far. Wouldn’t be hesitated to introduce their
            work to someone else.
          </Text>

          <Image
            position="absolute"
            left="-70px"
            src="/img/icons/left-dot.png"
            alt="left-dot"
          />
          <Image
            position="absolute"
            right="-70px"
            bottom="10px"
            src="/img/icons/right-dot.png"
            alt="right-dot"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
