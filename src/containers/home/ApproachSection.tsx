import { Flex, Grid, Text } from "@chakra-ui/react";

import { TitleText } from "@/components/texts";
import { GradLine } from "@/components/icons";
import { FeatureCard } from "@/components/cards";

import { serviceFeatures } from "@/data/features";

export const ApproachSection = () => {
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
        <GradLine />

        <TitleText textAlign="center" pb="51px">
          Our design and <br />
          <Text as="span" fontWeight="700">
            development approach
          </Text>
        </TitleText>
      </Flex>

      <Grid
        templateColumns="repeat(2, 1fr)"
        gap="35px"
        justifyContent="center"
        alignItems="center"
      >
        {serviceFeatures.map((feature, i) => (
          <FeatureCard feature={feature} key={i} />
        ))}
      </Grid>
    </Flex>
  );
};
