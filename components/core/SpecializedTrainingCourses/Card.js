import { Box } from "@chakra-ui/react";
import Heading from "@components/lib/Heading";
import Text from "@components/lib/Text";
import { AiOutlineUngroup } from "react-icons/ai";

const Card = ({ data, ...rest }) => {
  return (
    <Box
      flexShrink={0}
      flexGrow={0}
      shadow="lg"
      w="320px"
      p={5}
      bg="white"
      {...rest}
    >
      <Box h="60px" w="60px" mb={8} transform="scale(2) translate(40%, 40%)">
        <AiOutlineUngroup />
      </Box>

      <Heading fontSize="xl" textTransform="capitalize" mb={3}>
        useful articles
      </Heading>

      <Text>What should be the structure of an effective web designs.</Text>
    </Box>
  );
};

export default Card;
