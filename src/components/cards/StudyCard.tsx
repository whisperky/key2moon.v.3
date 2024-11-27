import { Flex, Text, Image, Button } from "@chakra-ui/react";

import { StudyProps } from "@/data/features";

export const StudyCard = ({ study }: { study: StudyProps }) => {
  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      gap={{ base: "10px", lg: "20px" }}
      border="1px solid #E7DAED"
      bg={study.color}
      borderRadius="xl"
      overflow="hidden"
    >
      <Image
        src={study.image}
        alt={study.title}
        w={{ base: "100%", lg: "50%" }}
        borderRadius="xl"
        objectFit="cover"
      />
      <Flex
        direction="column"
        gap="10px"
        w={{ base: "100%", lg: "50%" }}
        px={{ base: "20px", md: "50px", lg: "51px" }}
        py={{ base: "20px", md: "50px", lg: "30px" }}
        justifyContent="center"
        flexGrow={1}
      >
        <Text
          fontSize={{ base: "24px", md: "28px" }}
          fontWeight="600"
          lineHeight={{ base: "32px", md: "38px" }}
        >
          {study.title}
        </Text>
        <Text
          fontSize="14px"
          fontWeight="400"
          lineHeight="23px"
          py={{ base: "15px", md: "30px" }}
        >
          {study.description}
        </Text>

        <Flex justifyContent="flex-end" pt={{ base: "15px", md: "30px" }}>
          <Button className="gradient-detail">Read More &gt;</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
