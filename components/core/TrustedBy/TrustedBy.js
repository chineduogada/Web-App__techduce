import { Box, Flex, Heading } from "@chakra-ui/react";
import Button from "@components/lib/Button";
import Section from "@components/lib/Section";
import Text from "@components/lib/Text";

const TrustedBy = () => {
  return (
    <Section d="flex" justifyContent="center">
      <Box>
        <Heading mb={5} fontSize="2xl">
          Trusted By
        </Heading>

        <Flex justifyContent="space-between" alignItems="flex-end" w="500px">
          <Box maxW="260px">
            <Text lineHeight="2">
              Thousands of students already add more focus to their work with{" "}
              <Text as="b">Quillow</Text>.
            </Text>
          </Box>

          <Button>see more</Button>
        </Flex>

        <Flex flexWrap="wrap" border="1px" p={10} mt={8}></Flex>
      </Box>
    </Section>
  );
};

export default TrustedBy;
