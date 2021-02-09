import { Box, Flex } from "@chakra-ui/react";
import Button from "@components/lib/Button";
import Heading from "@components/lib/Heading";
import Section from "@components/lib/Section";
import Text from "@components/lib/Text";

const LearnFromExperts = () => {
  return (
    <Section>
      <Flex alignItems="center">
        <Box flex="1" border="1px" minH="400px"></Box>

        <Box flexBasis="400px">
          <Heading>Learn from approved experts at your own pace.</Heading>

          <Text my={5}>9/10 users reported better learning outcomes.</Text>

          <Button>get stater</Button>
        </Box>
      </Flex>
    </Section>
  );
};

export default LearnFromExperts;
