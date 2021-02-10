import { Box, Flex, Image } from "@chakra-ui/react";
import Button from "@components/lib/Button";
import Heading from "@components/lib/Heading";
import Section from "@components/lib/Section";
import Text from "@components/lib/Text";

const LearnFromExperts = () => {
  return (
    <Section>
      <Flex alignItems="center">
        <Flex justifyContent="flex-end" flex="1" minH="300px">
          <Image src="/img/learn-from.jpg" />
        </Flex>

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
