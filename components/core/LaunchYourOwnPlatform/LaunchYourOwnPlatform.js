import { Box, Flex } from "@chakra-ui/react";
import Button from "@components/lib/Button";
import Heading from "@components/lib/Heading";
import Section from "@components/lib/Section";
import TextInput from "@components/lib/TextInput";

const LaunchYourOwnPlatform = () => {
  return (
    <Section
      maxW="100%"
      border="none"
      bg="brand.900"
      textColor="white"
      pos="relative"
    >
      <Flex flexDir="column" alignItems="center" textAlign="center" my={5}>
        <Heading mb={10} maxW="500px">
          Launch your own <br /> online learning platform
        </Heading>

        <Flex as="form" mb={10}>
          <TextInput
            dark
            mr={3}
            placeholder="Enter your email..."
            type="email"
          />
          <Button>get started today</Button>
        </Flex>
      </Flex>
    </Section>
  );
};

export default LaunchYourOwnPlatform;
