import { Icon } from "@chakra-ui/react";
import Link from "next/link";

export const LinkIcon = ({
  icon,
  href,
}: {
  icon: React.ReactNode;
  href: string;
}) => {
  return (
    <Link href={href} target="_blank">
      <Icon
        w="34px"
        h="34px"
        p="11px"
        color="#1A202C"
        borderRadius="full"
        boxShadow="0px 4px 14px 0px #00000026"
      >
        {icon}
      </Icon>
    </Link>
  );
};
