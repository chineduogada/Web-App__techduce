import { Flex } from "@chakra-ui/react";

const CardCarousel = ({ children }) => {
  return (
    <Flex
      border="1px"
      pos="absolute"
      bottom={20}
      width="calc(100% - 190px)"
      overflowX="scroll"
    >
      {children}
    </Flex>
  );
};

export default CardCarousel;
