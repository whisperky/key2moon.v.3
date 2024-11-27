import { Flex, Text, Image, Highlight } from "@chakra-ui/react";
import type { ServiceFeatureProps } from "@/data/features";

interface FeatureCardProps {
  feature: ServiceFeatureProps;
}

export const FeatureCard = ({ feature }: FeatureCardProps) => {
  const { title, description, icon, highlight, color1, color2 } = feature;

  return (
    <Flex
      p="59px 33px 39px 33px"
      bg="white"
      gap="25px"
      border="1px solid #E7DAED"
    >
      <Image
        src={icon}
        alt={title}
        width="59px"
        height="56px"
        p="12px 10px"
        bg={`linear-gradient(225deg, ${color1} 0.01%, ${color2} 100%)`}
        borderRadius="lg"
        objectFit="contain"
      />

      <Flex direction="column" align="start" gap="10px">
        <Text fontSize="20px" fontWeight="600" color="#1A202C">
          {title}
        </Text>

        <Text
          fontSize="14px"
          fontWeight="400"
          lineHeight="23px"
          color="#4A5568"
        >
          <Highlight
            query={highlight}
            styles={{
              color: color1,
              fontWeight: "medium",
            }}
          >
            {description}
          </Highlight>
        </Text>
      </Flex>
    </Flex>
  );
};
