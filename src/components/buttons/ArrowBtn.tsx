import { Button, ButtonProps } from "@chakra-ui/react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

interface ArrowBtnProps extends ButtonProps {
  onClick: () => void;
  arrowMode?: "left" | "right";
}

export const ArrowBtn = ({
  onClick,
  arrowMode = "left",
  ...props
}: ArrowBtnProps) => {
  return (
    <Button
      w="45px"
      h="45px"
      borderRadius="50%"
      border="2px solid #57007B"
      color="#57007B"
      p="11px"
      _hover={{
        bg: "#57007B",
        color: "white",
        borderColor: "#57007B",
      }}
      onClick={onClick}
      {...props}
    >
      {arrowMode === "left" ? <IoMdArrowBack /> : <IoMdArrowForward />}
    </Button>
  );
};
