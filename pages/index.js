import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Header from "@components/core/Header/Header";
import Footer from "@components/core/Footer/Footer";
import TrustedBy from "@components/core/TrustedBy/TrustedBy";
import LearnFromExperts from "@components/core/LearnFromExperts/LearnFromExperts";
import BoostYourKnowledge from "@components/core/BoostYourKnowledge/BoostYourKnowledge";
import MostPopularCourses from "@components/core/MostPopularCourses/MostPopularCourses";
import MostPopularTeachers from "@components/core/MostPopularTeachers/MostPopularTeachers";
import ResourcesAndInsight from "@components/core/ResourcesAndInsight/ResourcesAndInsight";
import SpecializedTrainingCourses from "@components/core/SpecializedTrainingCourses/SpecializedTrainingCourses";
import Testimonials from "@components/core/Testimonials/Testimonials";

export default function Home() {
  return (
    <Box p={2} maxW="1280px" mx="auto">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Box as="main">
        <TrustedBy />
        <LearnFromExperts />
        <BoostYourKnowledge />
        <MostPopularCourses />
        <MostPopularTeachers />
        <ResourcesAndInsight />
        <SpecializedTrainingCourses />
        <Testimonials />
      </Box>

      <Footer />
    </Box>
  );
}
