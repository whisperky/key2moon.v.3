import { Flex, Text, Image } from "@chakra-ui/react";

import { GradBtn } from "@/components/buttons";

export const Banner = () => {
  return (
    <Flex pt="69px" pb="106px" alignItems="center">
      <Flex direction="column" gap="75px">
        <Flex direction="column" gap="28px" maxWidth="540px">
          <Text fontSize="45px" fontWeight="700" className="gradient-primary">
            <Text as="span" fontWeight="300">
              Creative
            </Text>{" "}
            <Text as="span" className="gradient-detail">
              {" "}
              Web3
            </Text>{" "}
            <Text as="span" fontWeight="300">
              Agency{" "}
            </Text>
            <Text as="span">for your next </Text>{" "}
            <Text as="span" className="gradient-detail">
              Project
            </Text>
          </Text>
          <Text
            fontSize="18px"
            fontWeight="400"
            lineHeight="36px"
            color="#4A5568"
          >
            Hands-on advisory firm helping projects to enter and evolve in the
            web3 industry
          </Text>
        </Flex>
        <Flex>
          <GradBtn p="19px 30px">Let’s get started!</GradBtn>
        </Flex>
      </Flex>
      <Image src="/img/web-development-1.png" objectFit="fit" />
    </Flex>
  );
};
