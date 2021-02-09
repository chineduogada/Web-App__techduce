import { Box } from "@chakra-ui/react";

const Section = ({ children, ...rest }) => {
  return (
    <Box as="section" py={20} mx="auto" maxW="900px" border="1px" {...rest}>
      {children}
    </Box>
  );
};

export default Section;
