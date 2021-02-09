import { Heading as HeadingUI } from "@chakra-ui/react";

const Heading = ({ children, ...rest }) => {
  return (
    <HeadingUI
      {...rest}
      sx={{
        "&": {
          wordSpacing: "-5px",
        },
      }}
    >
      {children}
    </HeadingUI>
  );
};

export default Heading;
