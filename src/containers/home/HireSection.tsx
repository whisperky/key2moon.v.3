import { Flex, Image, Text, Button } from "@chakra-ui/react";

export const HireSection = () => {
  return (
    <Flex
      w="90%"
      mx="auto"
      px={84}
      py={47}
      mb={100}
      justifyContent="space-between"
      alignItems="center"
      bg="linear-gradient(225deg, #F1F1F5 0%, #E4ECF7 100%)"
      borderRadius="2xl"
    >
      <Text fontSize="35px" fontWeight="700" lineHeight="55px" maxW="530px">
        Hire the best developers and designers around!
      </Text>

      <Flex direction="column" gap={27}>
        <Image
          src="/img/grad-light.png"
          alt="light1"
          h={10}
          objectFit="contain"
        />
        <Button
          h="100%"
          p="18px 43px"
          background="linear-gradient(225deg, #FFC656 0%, #F16063 100%)"
        >
          <Text
            color="white"
            fontSize="18px"
            fontWeight="700"
            lineHeight="22px"
          >
            Hire Top Developers
          </Text>
        </Button>
        <Image
          src="/img/grad-light.png"
          alt="light2"
          transform="scaleY(-1)"
          h={10}
          objectFit="contain"
        />
      </Flex>
    </Flex>
  );
};
