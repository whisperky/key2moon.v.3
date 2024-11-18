import { Flex, Text, Image, Button } from "@chakra-ui/react";

export const StudyCard = ({ study }: { study: any }) => {
  return (
    <Flex
      gap="20px"
      border="1px solid #E7DAED"
      bg={study.color}
      borderRadius="lg"
    >
      <Image src={study.image} alt={study.title} w="600px" borderRadius="lg" />
      <Flex direction="column" gap="10px" px="51px" justifyContent="center">
        <Text fontSize="28px" fontWeight="600" lineHeight="38px">
          {study.title}
        </Text>
        <Text fontSize="14px" fontWeight="400" lineHeight="23px" py="30px">
          {study.description}
        </Text>

        <Flex justifyContent="flex-end" pt="30px">
          <Button className="gradient-detail">Read More &gt;</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
