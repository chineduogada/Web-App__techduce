import PropTypes from "prop-types";
import { Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import { FaFeatherAlt } from "react-icons/fa";

const Brand = ({ logoOnly, ...rest }) => {
  return (
    <Flex alignItems="center" {...rest}>
      {logoOnly === "round" ? (
        <Grid
          w="60px"
          h="60px"
          bg="brand.900"
          textColor="brand.400"
          rounded="full"
          placeItems="center"
        >
          <GridItem fontSize="xl">
            <FaFeatherAlt />
          </GridItem>
        </Grid>
      ) : (
        <FaFeatherAlt />
      )}

      {!logoOnly && (
        <Heading ml={5} fontSize="md" fontWeight="500" textColor="brand.900">
          Quillow
        </Heading>
      )}
    </Flex>
  );
};

Brand.propTypes = {
  logoOnly: PropTypes.oneOfType([PropTypes.oneOf(["round"]), PropTypes.bool]),
};

export default Brand;
