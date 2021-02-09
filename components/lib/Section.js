import { Box } from "@chakra-ui/react";

const Section = ({ children, ...rest }) => {
  return (
    <Box
      as="section"
      py={16}
      my={10}
      mx="auto"
      maxW="900px"
      border="1px"
      {...rest}
    >
      {children}
    </Box>
  );
};

export default Section;
