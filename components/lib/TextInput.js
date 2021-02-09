import { Input } from "@chakra-ui/react";

const TextInput = ({ ...rest }) => {
  return (
    <Input
      bg="white"
      rounded="sm"
      w="250px"
      h="45px"
      px={6}
      fontSize="sm"
      border="none"
      {...rest}
      sx={{
        "::placeholder": {
          color: "brand.900",
        },
      }}
    />
  );
};

export default TextInput;
