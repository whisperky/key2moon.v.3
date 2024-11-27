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
      transition="all 0.3s ease-in-out"
      _hover={{
        transform: "translateY(-2px)",
        boxShadow: "0px 8px 49px 0px #00000040",
        background: "linear-gradient(225deg, #7785FF 0%, #68008F 100%)",
      }}
      _active={{
        transform: "translateY(1px)",
        boxShadow: "0px 2px 25px 0px #00000026",
        background: "linear-gradient(225deg, #5565E7 0%, #460067 100%)",
      }}
      {...props}
    >
      {children}
    </Button>
  );
};
