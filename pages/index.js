import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Header from "@components/core/Header/Header";
import Footer from "@components/core/Footer/Footer";
import TrustedBy from "@components/core/TrustedBy/TrustedBy";
import LearnFromExperts from "@components/core/LearnFromExperts/LearnFromExperts";
import BoostYourKnowledge from "@components/core/BoostYourKnowledge/BoostYourKnowledge";

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
      </Box>

      <Footer />
    </Box>
  );
}
