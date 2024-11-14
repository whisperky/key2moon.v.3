import { Flex } from "@chakra-ui/react";

import { Banner, Footer, Header, Services } from "@/containers/layout";

export default function Home() {
  return (
    <Flex direction="column" minHeight="100vh" bgColor="white">
      <Header />

      <Flex
        direction="column"
        minHeight="100vh"
        bgColor="white"
        alignItems="center"
      >
        <Banner />
        <Services />
      </Flex>

      <Footer />
    </Flex>
  );
}
