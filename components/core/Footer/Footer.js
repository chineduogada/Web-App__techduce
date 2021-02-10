import { Box, Flex, Grid, GridItem, Link, Stack } from "@chakra-ui/react";
import { BiCopyright } from "react-icons/bi";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Brand from "@components/lib/Brand";
import Heading from "@components/lib/Heading";
import Section from "@components/lib/Section";
import Text from "@components/lib/Text";

export default function Footer() {
  return (
    <Section as="footer">
      <Grid templateColumns="1.2fr .8fr .8fr .8fr" py={16}>
        <GridItem border="1px">
          <Brand logoOnly ml={1} fontSize="4xl" />

          <Heading fontSize="2xl" my={8}>
            A learning platform powered by Quillow
          </Heading>

          <Link
            href="hello@quillow.edu"
            fontSize="xl"
            fontWeight="500"
            textColor="brand2.900"
          >
            hello@quillow.edu
          </Link>
        </GridItem>
        <GridItem border="1px" ml={5}>
          <Heading fontSize="lg" mb={5}>
            Platform
          </Heading>
          <Stack spacing={2}>
            <Text>Quillow for business</Text>
            <Text>Teach on Quillow</Text>
            <Text>Get the App</Text>
          </Stack>
        </GridItem>
        <GridItem border="1px" ml={5}>
          <Heading fontSize="lg" mb={5}>
            Resources
          </Heading>
          <Stack spacing={2}>
            <Text>Careers</Text>
            <Text>Blog</Text>
            <Text>Help and Support</Text>
            <Text>Affiliate</Text>
          </Stack>
        </GridItem>
        <GridItem border="1px" ml={5}>
          <Heading fontSize="lg" mb={5}>
            Company
          </Heading>
          <Stack spacing={2}>
            <Text>About us</Text>
            <Text>Contact us</Text>
            <Text>Terms</Text>
            <Text>Privacy Policy</Text>
          </Stack>
        </GridItem>
      </Grid>

      <Flex
        color="gray.400"
        borderTop="1px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text d="flex" alignItems="center">
          2021{" "}
          <Text as="span" mx={1}>
            <BiCopyright />{" "}
          </Text>{" "}
          Quillow .Inc
        </Text>

        <Flex
          w="90px"
          justifyContent="space-between"
          transform="scale(1.5) translateX(-15%)"
        >
          <AiOutlineInstagram />
          <AiOutlineTwitter />
          <FaLinkedinIn />
        </Flex>
      </Flex>
    </Section>
  );
}
