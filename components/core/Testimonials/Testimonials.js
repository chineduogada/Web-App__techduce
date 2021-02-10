import { Box, Flex } from "@chakra-ui/react";
import Heading from "@components/lib/Heading";
import Section from "@components/lib/Section";
import Text from "@components/lib/Text";

const Testimonials = () => {
  return (
    <Section maxW="500px">
      <Heading mb={10}>Testimonials</Heading>

      <Box mb={7}>
        <Text as="q" fontSize="xl" fontWeight="500">
          After i started learning design with Quillow, i realized that i had
          improved to very advanced levels. While I am studying at my
          university,i design as an additional income and I am sure that i will
          do this professionally.
        </Text>
      </Box>

      <Text mb={10}>
        <Text as="b">Butuhan Kara</Text>, Student @SabanciUniversity
      </Text>

      <Flex w="300px" justifyContent="space-between">
        <Box
          border="1px"
          w="85px"
          h="85px"
          rounded="full"
          border="6px solid white"
          bg="gray.200"
          pos="relative"
          _before={{
            content: '""',
            pos: "absolute",
            w: "100%",
            h: "100%",
            bgGradient: "linear(115deg, brand.900 47%, gray.100 47%)",
            top: 0,
            left: 0,
            zIndex: -1,
            transform: "scale(1.25)",
            rounded: "full",
          }}
        ></Box>
        <Box border="1px" w="85px" h="85px" rounded="full"></Box>
        <Box border="1px" w="85px" h="85px" rounded="full"></Box>
      </Flex>
    </Section>
  );
};

export default Testimonials;
