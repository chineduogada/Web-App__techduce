import { Button as ButtonUI } from "@chakra-ui/react";
import PropTypes from "prop-types";

const Button = ({ theme = "light", uppercase, children, ...rest }) => {
  theme =
    theme === "light"
      ? {
          bg: "brand.400",
          textColor: "brand.900",
          _hover: {
            bg: "brand.500",
          },
        }
      : {
          bg: "brand.900",
          textColor: "brand.400",
          _hover: {
            bg: "brand.800",
          },
        };

  return (
    <ButtonUI
      textTransform={uppercase ? "uppercase" : "capitalize"}
      height={45}
      rounded="sm"
      px={7}
      {...theme}
      {...rest}
    >
      {children}
    </ButtonUI>
  );
};

Button.propTypes = {
  theme: PropTypes.oneOf(["light", "dark"]),
  uppercase: PropTypes.bool,
};

export default Button;
