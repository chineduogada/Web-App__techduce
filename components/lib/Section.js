import { Box } from "@chakra-ui/react";

const Section = ({ children, ...rest }) => {
  return (
    <Box as="section" p={36} {...rest}>
      {children}
    </Box>
  );
};

export default Section;
