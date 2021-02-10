import { Box, Flex, Image } from "@chakra-ui/react";
import Heading from "@components/lib/Heading";
import Text from "@components/lib/Text";

const Card = ({ data, ...rest }) => {
  return (
    <Flex
      alignItems="flex-end"
      flexShrink={0}
      mr={7}
      w="360px"
      h="477px"
      px={8}
      pb={10}
      bg="white"
      pos="relative"
      {...rest}
    >
      <Box
        h="100%"
        w="100%"
        bg="brand2.800"
        mb={8}
        pos="absolute"
        top={0}
        left={0}
      ></Box>

      <Box pos="relative" zIndex={1} p={5}>
        <Box
          pos="absolute"
          h="100%"
          w="100%"
          bg="rgba(225, 225, 225, .5)"
          boxShadow=".9px .9px 3px rgba(0, 0, 0, .3)"
          border="1px"
          borderLeftColor="gray.100"
          borderTopColor="gray.200"
          borderRightColor="gray.100"
          borderBottomColor="gray.200"
          rounded="sm"
          top={0}
          left={0}
          filter="blur(.5px)"
        ></Box>

        <Box pos="relative" zIndex={1} textColor="white">
          <Heading textTransform="capitalize" mb={3}>
            RichCode JS Stanley
          </Heading>

          <Text my={4}>Exmouth, United Kingdom</Text>
          <Text>513.4k Plays</Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Card;
