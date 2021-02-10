import { Box, Flex, Image } from "@chakra-ui/react";
import { MdStars } from "react-icons/md";
import Heading from "@components/lib/Heading";
import Text from "@components/lib/Text";

const Card = ({ data, index, ...rest }) => {
  return (
    <Box
      flexShrink={0}
      w="425px"
      h="477px"
      p={8}
      mx={index === 1 ? 6 : 0}
      bg="white"
      {...rest}
    >
      <Box h="200px" mb={8}>
        <Image src={`/img/card-${index}.jpg`} h="100%" w="100%" />
      </Box>

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
