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
  ResourceSection,
  HireSection,
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
        <Services id="portfolio" />
        <TrustedSection />
        <RecommendSection />
        <ImpactSection />
        <StudySection />
        <SolutionsSection id="about" />
        <ApproachSection />
        <TechSection />
        <WorkflowSection />
        <ResourceSection id="blog" />
        <HireSection />
      </Flex>

      <Footer id="contact" />
    </Flex>
  );
}
