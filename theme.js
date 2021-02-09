import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#161c28",
    800: "#283347",
    700: "#40506e",
    600: "#d0edf5",
    500: "#e0f8ff",
    400: "#effafe",
  },
  brand2: {
    900: "#734c1b",
    800: "#ecddca",
    700: "#f5eee4",
  },
};
const theme = extendTheme({ colors });

export default theme;
