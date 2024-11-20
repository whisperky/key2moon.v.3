import { Flex, Text } from "@chakra-ui/react";

import { TitleText } from "@/components/texts";
import { GradLine } from "@/components/icons";
import { SolutionCard } from "@/components/cards";
import { solutions } from "@/data/features";
export const SolutionsSection = () => {
  return (
    <Flex direction="column" w="100%" py="89px" px="15%">
      <Flex
        position="relative"
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <GradLine />

        <TitleText textAlign="center" pb="51px">
          Way of building <br />
          <Text as="span" fontWeight="700">
            Great Solutions
          </Text>
        </TitleText>
      </Flex>

      <Flex
        direction="column"
        gap="95px"
        justifyContent="center"
        alignItems="center"
      >
        {solutions.map((solution, i) => (
          <SolutionCard solution={solution} key={i} index={i} />
        ))}
      </Flex>
    </Flex>
  );
};
