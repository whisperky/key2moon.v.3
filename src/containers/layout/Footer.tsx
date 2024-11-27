import { Flex, Text, Image } from "@chakra-ui/react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";

import { Rancho } from "next/font/google";

import { LinkIcon } from "@/components/icons";
import { LinkText } from "@/components/texts";

const rancho = Rancho({
  subsets: ["latin"],
  variable: "--font-rancho",
  weight: "400",
});

export const Footer = ({ id }: { id: string }) => {
  return (
    <Flex direction="column" py="8" id={id}>
      <Flex
        direction={{ base: "column", lg: "row" }}
        justify="space-between"
        align={{ base: "center", lg: "start" }}
        gap={12}
        w={{ base: "90%", xl: "80%" }}
        minH="300px"
        mx="auto"
        pb={{ base: 5, lg: 20 }}
      >
        {/* Logo Section */}
        <Flex
          direction="column"
          align={{ base: "center", lg: "flex-start" }}
          w={{ base: "100%", lg: "400px" }}
          gap="34px"
        >
          <Flex alignItems="center" gap="10px" flex={1}>
            <Image src="/img/logo.png" h="40px" />
            <Text className={rancho.className} fontSize="24px" color="#4A5568">
              KeY2Moon Solutions
            </Text>
          </Flex>

          <Text
            fontSize="18px"
            color="#718096"
            fontWeight="400"
            lineHeight="30px"
            textAlign={{ base: "center", lg: "left" }}
          >
            Empowering businesses with innovative Web3 solutions and creative
            digital experiences. Your trusted partner in blockchain technology
            and web development.
          </Text>
          <Image
            src="/img/google-speed.png"
            alt="Google PageSpeed"
            h="53px"
            display={{ base: "none", lg: "block" }}
          />
        </Flex>

        {/* Links Section */}
        <Flex direction="column" align={{ base: "center", lg: "flex-start" }}>
          <Text fontSize="md" fontWeight="bold" mb="2">
            Links
          </Text>
          <Flex
            direction={{ base: "row", lg: "column" }}
            align="flex-start"
            gap={{ base: "20px", lg: "0" }}
          >
            <LinkText
              href="#"
              fontWeight="400"
              lineHeight="38px"
              color="#718096"
            >
              Portfolio
            </LinkText>
            <LinkText
              href="#"
              fontWeight="400"
              lineHeight="38px"
              color="#718096"
            >
              About
            </LinkText>
            <LinkText
              href="#"
              fontWeight="400"
              lineHeight="38px"
              color="#718096"
            >
              Blog
            </LinkText>
            <LinkText
              href="#"
              fontWeight="400"
              lineHeight="38px"
              color="#718096"
            >
              Contact
            </LinkText>
          </Flex>
        </Flex>

        {/* Contact Section */}
        <Flex
          direction="column"
          align={{ base: "center", lg: "flex-start" }}
          maxW={{ base: "700px", lg: "300px" }}
          gap="24px"
        >
          <Text fontSize="18px" fontWeight="700" lineHeight="30px">
            Contact us
          </Text>
          <Text fontSize="18px" color="#718096" lineHeight="30px">
            Ready to transform your digital presence? Let&apos;s discuss your
            next Web3 project.
          </Text>
          <Text fontSize="18px" color="#718096" lineHeight="30px">
            +9876543210
          </Text>
        </Flex>

        <Flex
          justifyContent={{ base: "center", lg: "end" }}
          alignSelf={{ base: "center", lg: "end" }}
        >
          <Flex gap={4}>
            <LinkIcon icon={<FaFacebookF />} href="https://www.facebook.com" />
            <LinkIcon icon={<FaInstagram />} href="https://www.instagram.com" />
            <LinkIcon icon={<FaTwitter />} href="https://www.twitter.com" />
            <LinkIcon
              icon={<FaLinkedinIn />}
              href="https://www.linkedin.com/company/key2moon/"
            />
          </Flex>
        </Flex>
      </Flex>

      {/* Social Links Section */}

      {/* Footer Bottom */}
      <Flex justify="center" mt="4" borderTop="1px solid #CBD5E0" pt="8">
        <Text fontSize="14px" color="#4A5568">
          © 2024 Copyright by KeY2Moon Solutions. All rights reserved.
        </Text>
      </Flex>
    </Flex>
  );
};
