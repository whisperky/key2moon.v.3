import { Flex, Text } from "@chakra-ui/react";

import { ResourceSlider } from "@/components/sliders";
import { GradLine } from "@/components/icons";
import { TitleText } from "@/components/texts";

export const ResourceSection = ({ id }: { id: string }) => {
  return (
    <Flex direction="column" w="100%" py="89px" id={id}>
      <Flex
        position="relative"
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <GradLine />

        <TitleText textAlign="center" pb="51px">
          Featured <br />
          <Text as="span" fontWeight="700">
            Resources
          </Text>
        </TitleText>
      </Flex>

      <ResourceSlider />
    </Flex>
  );
};
