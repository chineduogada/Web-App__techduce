import { Box, Flex, Image } from "@chakra-ui/react";
import Button from "@components/lib/Button";
import Section from "@components/lib/Section";
import Text from "@components/lib/Text";
import Heading from "@components/lib/Heading";

const TrustedBy = () => {
  return (
    <Section maxW="500px">
      <Box>
        <Heading mb={5} fontSize="2xl">
          Trusted By
        </Heading>

        <Flex justifyContent="space-between" alignItems="flex-end">
          <Box maxW="260px">
            <Text lineHeight="2">
              Thousands of students already add more focus to their work with{" "}
              <Text as="b">Quillow</Text>.
            </Text>
          </Box>

          <Button>see more</Button>
        </Flex>

        <Flex p={10} mt={8}>
          <Image src="/img/trusted.jpg" />
        </Flex>
      </Box>
    </Section>
  );
};

export default TrustedBy;
