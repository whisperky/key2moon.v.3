import { Text } from "@chakra-ui/react";
import Link from "next/link";

interface LinkTextProps {
  href: string;
  children: React.ReactNode;
}

export const LinkText = ({ href, children }: LinkTextProps) => {
  return (
    <Link href={href}>
      <Text
        fontSize="16px"
        fontWeight="500"
        color="#4A5568"
        lineHeight="24px"
        _hover={{ transform: "scale(1.05)" }}
      >
        {children}
      </Text>
    </Link>
  );
};
