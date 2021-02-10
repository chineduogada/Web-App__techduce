import { Box } from "@chakra-ui/react";

const Section = ({ children, ...rest }) => {
  return (
    <Box as="section" py={16} px={2} my={10} mx="auto" maxW="900px" {...rest}>
      {children}
    </Box>
  );
};

export default Section;
