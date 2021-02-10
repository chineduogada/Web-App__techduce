import { Box, Flex, Image } from "@chakra-ui/react";
import Button from "@components/lib/Button";
import Heading from "@components/lib/Heading";
import Section from "@components/lib/Section";
import Text from "@components/lib/Text";

const BoostYourKnowledge = () => {
  return (
    <Section>
      <Flex alignItems="center">
        <Box flexBasis="400px">
          <Heading>Boost your knowledge, and have fun doing it.</Heading>

          <Text my={5}>80% users reported better learning outcomes.</Text>

          <Button>get stater</Button>
        </Box>

        <Box flex="1" minH="350px">
          <Image src="/img/boost-knowledge.jpg" />
        </Box>
      </Flex>
    </Section>
  );
};

export default BoostYourKnowledge;
