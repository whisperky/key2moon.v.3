import { Flex, FlexProps } from "@chakra-ui/react";

export const GradLine = (props: FlexProps) => {
  return (
    <Flex
      h="5px"
      w="69px"
      mb="20px"
      bg="linear-gradient(225deg, #F76680 0%, #57007B 100%)"
      {...props}
    />
  );
};
