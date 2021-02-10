import { Box } from "@chakra-ui/react";
import Heading from "@components/lib/Heading";
import Text from "@components/lib/Text";

const Card = ({ data, ...rest }) => {
  return (
    <Box
      flexShrink={0}
      border="1px"
      w="330px"
      h="490px"
      p={9}
      bg="white"
      {...rest}
    >
      <Box h="230px" border="1px" mb={8}></Box>

      <Heading fontSize="xl" mb={3}>
        Increasing engagement with instagram
      </Heading>

      <Text mb={6} fontSize="14px">
        Take your dev skills to the next level with this lorem ipsum.
      </Text>

      <Text fontSize="14px">December 2, 2020</Text>
    </Box>
  );
};

export default Card;
