import { Button, Flex, Text, Image } from "@chakra-ui/react";

import { TitleText } from "@/components/texts";
import { GradLine, ArrowUpIcon, ArrowDownIcon } from "@/components/icons";

import { studies, StudyProps } from "@/data/features";
import { StudyCard } from "@/components/cards/StudyCard";

export const StudySection = () => {
  return (
    <Flex
      direction="column"
      w="100%"
      py="89px"
      bg="#F7F7FA"
      borderY="1px solid #E7DAED"
      px="15%"
    >
      <Flex
        position="relative"
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Flex position="absolute" top="-200px" left="-50px" alignItems="end">
          <ArrowUpIcon />
          <Flex
            w="18px"
            h="18px"
            bg="linear-gradient(225deg, #F76680 0%, #57007B 100%)"
            borderRadius="50%"
          />
        </Flex>
        <Flex position="absolute" top="-240px" right="-50px">
          <ArrowDownIcon />
        </Flex>
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
          <StudyCard study={study} key={i} />
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
