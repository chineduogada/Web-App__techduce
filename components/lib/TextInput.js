import { Input } from "@chakra-ui/react";
import PropTypes from "prop-types";

const TextInput = ({ dark, ...rest }) => {
  const theme = !dark
    ? {
        bg: "brand.400",
        textColor: "brand.900",
        _hover: {
          bg: "brand.500",
        },
      }
    : {
        bg: "brand.800",
        textColor: "brand.400",
        _hover: {
          bg: "brand.700",
        },
      };

  return (
    <Input
      rounded="sm"
      w="250px"
      h="45px"
      px={6}
      fontSize="sm"
      border="none"
      {...theme}
      {...rest}
      sx={{
        "::placeholder": {
          color: dark ? "brand.400" : "brand.900",
        },
      }}
    />
  );
};

TextInput.propTypes = {
  dark: PropTypes.bool,
  uppercase: PropTypes.bool,
};

export default TextInput;
