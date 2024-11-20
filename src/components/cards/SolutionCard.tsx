import { Flex, Image, Text } from "@chakra-ui/react";

import { SolutionProps } from "@/data/features";
import { GradLine } from "../icons";

interface SolutionCardProps {
  solution: SolutionProps;
  index: number;
}

export const SolutionCard = ({ solution, index }: SolutionCardProps) => {
  return (
    <Flex direction={index % 2 === 0 ? "row" : "row-reverse"} gap="124px">
      <Flex direction="column" gap="20px" justifyContent="center">
        <Text fontSize="28px" fontWeight="600" lineHeight="38px">
          {solution.title}
        </Text>
        <Text fontSize="18px" fontWeight="400" lineHeight="30px" maxW="534px">
          {solution.description}
        </Text>
        <Flex direction="column" gap="10px">
          <Text fontSize="18px" fontWeight="400" lineHeight="30px">
            {solution.evaluation.description}
          </Text>
          <Flex gap="15px" py="20px">
            <GradLine w="3px" h="100%" />
            <Text
              fontSize="18px"
              fontWeight="400"
              lineHeight="30px"
              maxW="453px"
              className="gradient-detail"
            >
              "{solution.evaluation.comment}"
            </Text>
          </Flex>
          <Flex alignItems="center" gap="10px">
            <Image
              src={solution.evaluation.avatar}
              alt={solution.evaluation.name}
              w="40px"
              h="40px"
              borderRadius="50%"
            />
            <Flex direction="column" justifyContent="center" gap="5px">
              <Text
                fontSize="16px"
                fontWeight="400"
                lineHeight="19px"
                color="#1A202C"
              >
                {solution.evaluation.name}
              </Text>
              <Text
                fontSize="13px"
                fontWeight="400"
                lineHeight="16px"
                color="#718096"
              >
                {solution.evaluation.role}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        position="relative"
        w="575px"
        justifyContent="center"
        alignItems="center"
      >
        <Image
          src={solution.image}
          alt={solution.title}
          borderRadius="md"
          zIndex="1"
        />

        <Flex
          position="absolute"
          w={solution.icons.yellow.size}
          h={solution.icons.yellow.size}
          {...solution.icons.yellow}
          bg="linear-gradient(225deg, #FFEF5E 0%, #F7936F 100%)"
          borderRadius="50%"
        />
        <Flex
          position="absolute"
          w={solution.icons.pink.size}
          h={solution.icons.pink.size}
          {...solution.icons.pink}
          bg="linear-gradient(225deg, #F76680 0%, #57007B 100%)"
          borderRadius="50%"
        />
      </Flex>
    </Flex>
  );
};
