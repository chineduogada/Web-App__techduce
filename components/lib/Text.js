import { Text as TextUI } from "@chakra-ui/react";

const Text = ({ children, ...rest }) => {
  return (
    <TextUI lineHeight={2} fontSize="15px" {...rest}>
      {children}
    </TextUI>
  );
};

export default Text;
