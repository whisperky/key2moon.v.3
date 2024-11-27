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
          direction={{ base: "column", lg: "row" }}
          position="relative"
          w="80%"
          mx="10%"
          my={{ base: 20, lg: "220px" }}
          justifyContent="center"
          alignItems="center"
        >
          <Flex
            h={{ base: "100%", lg: "2px" }}
            w={{ base: "2px", lg: "100%" }}
            bg="#F76680"
          />
          {processSteps.map((step, index) => (
            <Flex
              key={index}
              direction="column"
              position={{ base: "relative", lg: "absolute" }}
              alignItems="center"
              gap={{ base: 0, lg: "15px" }}
              left={{
                base: 0,
                lg: `calc(50% + ${(Math.floor(index / 2) - 1) * 35 + "%"} - 160px + ${index % 2 === 0 ? "-30px" : "30px"})`,
              }}
              top={{ base: 0, lg: index % 2 === 0 ? "-193px" : "30px" }}
            >
              <Flex
                w="2px"
                h="40px"
                bg="#F76680"
                display={{
                  base: "block",
                  lg: index % 2 === 0 ? "none" : "block",
                }}
              />
              <Card.Root
                maxW="300px"
                h="170px"
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
              <Flex
                display={{
                  base: "block",
                  lg: index % 2 === 0 ? "block" : "none",
                }}
                w="2px"
                h="40px"
                bg="#F76680"
              />
            </Flex>
          ))}
          <Image
            src="/img/icons/cup.png"
            alt="workflow"
            w="42px"
            h="42px"
            m="10px"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
