import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import Button from "@components/lib/Button";
import Heading from "@components/lib/Heading";
import Section from "@components/lib/Section";
import Text from "@components/lib/Text";
import Card from "./Card";

const MostPopularCourses = () => {
  return (
    <Section
      minW="100%"
      border="none"
      bg="brand2.700"
      h="800px"
      pos="relative"
      overflow="hidden"
    >
      <Box maxW="900px" mx="auto">
        <Grid
          templateColumns="1.5fr 3fr 1fr"
          alignItems="center"
          justifyItems="center"
          mb={10}
        >
          <GridItem>
            <Heading>Most popular courses</Heading>
          </GridItem>

          <GridItem mx={10}>
            <Text mx="auto">
              Top instructors from around the world teach millions of students
              on Quillow. Get unlimited access to 5,000+ of Quillow's top
              courses for your team.
            </Text>
          </GridItem>

          <GridItem>
            <Box>
              <Button dark>Explore courses</Button>
            </Box>
          </GridItem>
        </Grid>

        <Flex
          border="1px"
          pos="absolute"
          bottom={20}
          width="calc(100% - 190px)"
          overflowX="scroll"
        >
          <Card />
          <Card />
          <Card />
        </Flex>
      </Box>
    </Section>
  );
};

export default MostPopularCourses;
