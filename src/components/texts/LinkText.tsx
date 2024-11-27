"use client";

import { Text, TextProps } from "@chakra-ui/react";
import Link from "next/link";

interface LinkTextProps extends TextProps {
  href: string;
  children: React.ReactNode;
}

export const LinkText = ({ href, children, ...props }: LinkTextProps) => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Link href={href} onClick={() => handleScroll(href)}>
      <Text
        fontSize="16px"
        fontWeight="500"
        color="#4A5568"
        lineHeight="24px"
        _hover={{ transform: "scale(1.05)" }}
        {...props}
      >
        {children}
      </Text>
    </Link>
  );
};
