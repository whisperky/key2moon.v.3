import { Flex } from "@chakra-ui/react";

import { Header, Footer } from "@/containers/layout";
import {
  Banner,
  Services,
  TrustedSection,
  RecommendSection,
  ImpactSection,
  StudySection,
  SolutionsSection,
  ApproachSection,
  TechSection,
  WorkflowSection,
} from "@/containers/home";

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
        <TrustedSection />
        <RecommendSection />
        <ImpactSection />
        <StudySection />
        <SolutionsSection />
        <ApproachSection />
        <TechSection />
        <WorkflowSection />
      </Flex>

      <Footer />
    </Flex>
  );
}
