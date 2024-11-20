import { Text, TextProps } from "@chakra-ui/react";

interface TitleTextProps extends TextProps {
  children: React.ReactNode;
}

export const TitleText = ({ children, ...props }: TitleTextProps) => {
  return (
    <Text
      maxW="495px"
      fontSize="35px"
      color="#1A202C"
      fontWeight="400"
      lineHeight="55px"
      mb={2}
      {...props}
    >
      {children}
    </Text>
  );
};
