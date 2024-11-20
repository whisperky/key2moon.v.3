import { Flex, FlexProps } from "@chakra-ui/react";

export const GradCircle = ({ ...props }: FlexProps) => {
  return (
    <Flex
      position="absolute"
      w="72px"
      h="72px"
      borderRadius="full"
      bg="linear-gradient(225deg, #F76680 0%, #57007B 100%)"
      {...props}
    />
  );
};
