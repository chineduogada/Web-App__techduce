import { Heading as HeadingUI } from "@chakra-ui/react";

const Heading = ({ children, ...rest }) => {
  return (
    <HeadingUI
      {...rest}
      sx={{
        "&": {
          wordSpacing: "-6px",
        },
      }}
    >
      {children}
    </HeadingUI>
  );
};

export default Heading;
