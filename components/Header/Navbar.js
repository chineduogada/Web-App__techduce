import { Box, Flex, Text } from "@chakra-ui/react";
import Brand from "@components/lib/Brand";
import Button from "@components/lib/Button";

const Navbar = () => {
  return (
    <Flex alignItems="center" mb={20}>
      <Brand flex={0.3} />

      <Box flex={1}>
        <Flex w={250} alignItems="center" justifyContent="space-between">
          <Text m={2}>Courses</Text>
          <Text m={2}>Blog</Text>
          <Text m={2}>About</Text>
        </Flex>
      </Box>

      <Button>login</Button>
    </Flex>
  );
};

export default Navbar;
