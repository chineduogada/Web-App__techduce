import { Box, Flex } from "@chakra-ui/react";
import { MdStars } from "react-icons/md";
import Heading from "@components/lib/Heading";
import Text from "@components/lib/Text";

const Card = ({ data }) => {
  return (
    <Box
      flexShrink={0}
      border="1px"
      mr={5}
      w="425px"
      h="477px"
      p={8}
      bg="white"
    >
      <Box minH="200px" border="1px" mb={8}></Box>

      <Heading fontSize="xl" textTransform="capitalize" mb={3}>
        native mac apps in swift tutorial
      </Heading>

      <Text mb={8}>
        Take your dev skills to the next level with this ground-up tutorial on
        native Mac apps. Enjoy your skills!
      </Text>

      <Flex>
        <Box
          border="1px"
          w="45px"
          h="45px"
          mr={5}
          rounded="full"
          pos="relative"
          bg="gray.300"
        >
          <Box
            pos="absolute"
            top="-6px"
            right="-5px"
            transform="scale(1.1)"
            bg="white"
            p=".1875rem"
            rounded="full"
          >
            <MdStars />
          </Box>
        </Box>

        <Box>
          <Heading fontSize="lg">by RichCode JS</Heading>
          <Text>3 lessons</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Card;
