import { Box, Center, Flex, Grid, GridItem } from "@chakra-ui/react";
import Button from "@components/lib/Button";
import Heading from "@components/lib/Heading";
import Section from "@components/lib/Section";
import Text from "@components/lib/Text";
import Card from "./Card";

const SpecializedTrainingCourses = () => {
  return (
    <Section border="none" bg="brand.500" h="560px" pos="relative">
      <Box>
        <Box textAlign="center">
          <Heading mb={5}>Specialized Training Courses</Heading>

          <Text maxW="325px" mx="auto">
            Become a valuable expert with Quillow. Explore your skills and make
            perfect!
          </Text>
        </Box>

        <Flex
          w="1024px"
          justifyContent="space-between"
          pos="absolute"
          left="50%"
          transform="translate(-50%, 35%)"
        >
          <Card />
          <Card />
          <Card />
        </Flex>
      </Box>
    </Section>
  );
};

export default SpecializedTrainingCourses;
