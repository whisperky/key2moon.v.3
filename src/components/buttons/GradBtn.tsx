import { Button, ButtonProps } from "@chakra-ui/react";

interface GradBtnProps extends ButtonProps {
  children: React.ReactNode;
}

export const GradBtn = ({ children, ...props }: GradBtnProps) => {
  return (
    <Button
      h="100%"
      color="white"
      fontWeight="600"
      fontSize="14px"
      lineHeight="14px"
      background="linear-gradient(225deg, #6675F7 0%, #57007B 100%)"
      boxShadow="0px 4px 49px 0px #00000026"
      {...props}
    >
      {children}
    </Button>
  );
};
