import { Flex, Text, Icon, Card, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { SlideProps } from "@/data/features";

const MotionFlex = motion.create(Flex);

export const ServiceCard = ({
  title,
  description,
  icon,
  isActive,
}: SlideProps) => (
  <MotionFlex
    initial={{ y: 0 }}
    animate={{ y: isActive ? 30 : 0 }}
    transition={{ duration: 0.3 }}
    mx="30px"
    my="50px"
    p="1px"
    borderRadius="lg"
    shadow="lg"
    className={`${
      isActive
        ? "border-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 p-[2px]"
        : "border border-transparent"
    }`}
  >
    <Card.Root
      direction="column"
      gap={4}
      w="100%"
      p="39px 16px"
      className="bg-white rounded-lg"
    >
      <Card.Header p="0">
        <Icon
          w="58px"
          h="58px"
          borderRadius="full"
          border="1px solid #f76680"
          // className="gradient-purple"
        >
          <Image src={icon.src} alt={icon.alt} p={icon.p} />
        </Icon>
      </Card.Header>
      <Card.Body gap="20px" p="0">
        <Text
          fontWeight="600"
          fontSize="20px"
          lineHeight="27px"
          color={isActive ? "purple.700" : "gray.700"}
        >
          {title}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {description}
        </Text>
      </Card.Body>
    </Card.Root>
  </MotionFlex>
);
