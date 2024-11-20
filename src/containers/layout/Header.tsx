import { Flex, Image, Text } from "@chakra-ui/react";

import { GradBtn } from "@/components/buttons";
import { LinkText } from "@/components/texts";

export const Header = () => {
  return (
    <Flex
      position="sticky"
      top={0}
      zIndex={100}
      px="25px"
      py="18px"
      bg="white"
      justifyContent="space-between"
      alignItems="center"
      boxShadow="0px 4px 40px 0px #0000001A"
    >
      <Flex alignItems="center" gap="10px" flex={1}>
        <Image src="/img/logo.png" h="40px" />
        <Text className="font-rancho" fontSize="24px" color="#4A5568">
          KeY2Moon Solutions
        </Text>
      </Flex>
      <Flex gap="60px" fontSize="16px">
        <LinkText href="#portfolio">Portfolio</LinkText>
        <LinkText href="#about">About</LinkText>
        <LinkText href="#blog">Blog</LinkText>
        <LinkText href="#contact">Contact</LinkText>
      </Flex>

      <Flex flex={1} justifyContent="flex-end">
        <GradBtn p="14px 25px">Contact us</GradBtn>
      </Flex>
    </Flex>
  );
};
