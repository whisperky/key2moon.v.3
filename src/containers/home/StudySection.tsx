import { Button, Flex, Text, Image } from "@chakra-ui/react";

import { TitleText } from "@/components/texts";
import { GradLine } from "@/components/icons";

import { studies, StudyProps } from "@/data/features";

export const StudySection = () => {
  return (
    <Flex
      direction="column"
      w="100%"
      py="89px"
      bg="#F7F7FA"
      borderTop="1px solid #E7DAED"
      px="15%"
    >
      <Flex direction="column" alignItems="center" justifyContent="center">
        <GradLine />

        <TitleText textAlign="center" pb="51px">
          Our recent <br />
          <Text as="span" fontWeight="700">
            Case studies
          </Text>
        </TitleText>
      </Flex>

      <Flex
        direction="column"
        gap="35px"
        justifyContent="center"
        alignItems="center"
      >
        {studies.map((study, i) => (
          <Flex
            key={i}
            gap="20px"
            border="1px solid #E7DAED"
            bg={study.color}
            borderRadius="lg"
          >
            <Image
              src={study.image}
              alt={study.title}
              w="600px"
              borderRadius="lg"
            />
            <Flex
              direction="column"
              gap="10px"
              px="51px"
              justifyContent="center"
            >
              <Text fontSize="28px" fontWeight="600" lineHeight="38px">
                {study.title}
              </Text>
              <Text
                fontSize="14px"
                fontWeight="400"
                lineHeight="23px"
                py="30px"
              >
                {study.description}
              </Text>

              <Flex justifyContent="flex-end" pt="30px">
                <Button className="gradient-detail">Read More &gt;</Button>
              </Flex>
            </Flex>
          </Flex>
        ))}
      </Flex>

      <Flex justifyContent="flex-end" pt="30px">
        <Button
          className="gradient-detail"
          fontSize="20px"
          fontWeight="600"
          lineHeight="27px"
        >
          Read more case studies &gt;
        </Button>
      </Flex>
    </Flex>
  );
};
