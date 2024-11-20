import { Flex, Image, Text, Card } from "@chakra-ui/react";

import { GradLine } from "@/components/icons";
import { TitleText } from "@/components/texts";

import { processSteps } from "@/data/features";

export const WorkflowSection = () => {
  return (
    <Flex
      direction="column"
      w="100%"
      py="89px"
      borderBottom="1px solid #E7DAED"
    >
      <Flex direction="column" alignItems="center" justifyContent="center">
        <GradLine />

        <TitleText textAlign="center" pb="38px">
          How development <br />
          <Text as="span" fontWeight="700">
            through KeY2Moon works
          </Text>
        </TitleText>

        <Flex
          position="relative"
          w="80%"
          mx="10%"
          my="220px"
          justifyContent="center"
          alignItems="center"
        >
          <Flex h="2px" w="100%" bg="#F76680" />
          {processSteps.map((step, index) => (
            <Flex
              key={index}
              direction="column"
              position="absolute"
              alignItems="center"
              gap="15px"
              left={`calc(50% - ${(Math.floor(index / 2) - 1) * 35 + "%"} - 160px + ${index % 2 === 0 ? "-30px" : "30px"})`}
              top={index % 2 === 0 ? "-193px" : "20px"}
            >
              {index % 2 !== 0 && <Flex w="2px" h="40px" bg="#F76680" />}
              <Card.Root
                maxW="320px"
                h="160px"
                direction="column"
                p="22px 24px"
                border="1px solid #E7DAED"
                borderRadius="lg"
              >
                <Card.Header p="0">
                  <Flex gap="10px">
                    <Text
                      fontSize="18px"
                      fontWeight="700"
                      className="gradient-detail"
                    >
                      {step.id}
                    </Text>
                    <Text fontSize="18px" fontWeight="700">
                      {step.title}
                    </Text>
                  </Flex>
                </Card.Header>
                <Card.Body p="0" pt="15px">
                  <Text
                    fontSize="14px"
                    color="#718096"
                    fontWeight="400"
                    lineHeight="20px"
                  >
                    {step.description}
                  </Text>
                </Card.Body>
              </Card.Root>
              {index % 2 === 0 && <Flex w="2px" h="40px" bg="#F76680" />}
            </Flex>
          ))}
          <Image src="/img/icons/cup.png" alt="workflow" w="42px" h="42px" />
        </Flex>
      </Flex>
    </Flex>
  );
};
