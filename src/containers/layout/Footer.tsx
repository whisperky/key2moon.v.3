import { Flex, Text, Image } from "@chakra-ui/react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";

import { LinkIcon } from "@/components/icons";

export const Footer = () => {
  return (
    <Flex direction="column" py="8">
      <Flex
        justify="space-between"
        align="start"
        w="90%"
        minH="300px"
        mx="auto"
        pb="81px"
      >
        {/* Logo Section */}
        <Flex direction="column" align="flex-start" maxW="400px" gap="34px">
          <Flex alignItems="center" gap="10px" flex={1}>
            <Image src="/img/logo.png" h="40px" />
            <Text className="font-rancho" fontSize="24px" color="#4A5568">
              KeY2Moon Solutions
            </Text>
          </Flex>

          <Text
            fontSize="18px"
            color="#718096"
            fontWeight="400"
            lineHeight="30px"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
          <Image src="/img/google-speed.png" alt="Google PageSpeed" h="53px" />
        </Flex>

        {/* Links Section */}
        <Flex direction="column" align="flex-start">
          <Text fontSize="md" fontWeight="bold" mb="2">
            Links
          </Text>
          <Flex
            direction="column"
            align="flex-start"
            fontSize="16px"
            fontWeight="400"
            lineHeight="38px"
            color="#718096"
          >
            <Link href="#">Portfolio</Link>
            <Link href="#">About</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Contact</Link>
          </Flex>
        </Flex>

        {/* Contact Section */}
        <Flex direction="column" align="flex-start" maxW="300px" gap="24px">
          <Text fontSize="18px" fontWeight="700" lineHeight="30px">
            Contact us
          </Text>
          <Text fontSize="18px" color="#718096" lineHeight="30px">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
          <Text fontSize="18px" color="#718096" lineHeight="30px">
            +9876543210
          </Text>
        </Flex>
        <Flex alignSelf="end" mt="8">
          <Flex gap={4}>
            <LinkIcon icon={<FaFacebookF />} href="https://www.facebook.com" />
            <LinkIcon icon={<FaInstagram />} href="https://www.instagram.com" />
            <LinkIcon icon={<FaTwitter />} href="https://www.twitter.com" />
            <LinkIcon icon={<FaLinkedinIn />} href="https://www.linkedin.com" />
          </Flex>
        </Flex>
      </Flex>

      {/* Social Links Section */}

      {/* Footer Bottom */}
      <Flex justify="center" mt="4" borderTop="1px solid #CBD5E0" pt="8">
        <Text fontSize="14px" color="#4A5568">
          © 2023 Copyright by KeY2Moon Solutions. All rights reserved.
        </Text>
      </Flex>
    </Flex>
  );
};
