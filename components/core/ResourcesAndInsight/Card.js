import { Box, Image } from "@chakra-ui/react";
import Heading from "@components/lib/Heading";
import Text from "@components/lib/Text";

const Card = ({ data, index, ...rest }) => {
  return (
    <Box
      flexShrink={0}
      w="350px"
      h="490px"
      p={9}
      bg="white"
      {...rest}
      mx={index === 2 ? 6 : 0}
    >
      <Box h="230px" mb={8}>
        <Image src={`/img/card-${index}.jpg`} h="100%" w="100%" />
      </Box>

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
