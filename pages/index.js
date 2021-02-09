import Head from "next/head";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box p={2} maxW="1280px" mx="auto">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
      </main>

      <Footer />
    </Box>
  );
}
