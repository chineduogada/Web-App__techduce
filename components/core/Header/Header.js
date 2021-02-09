import {
  Box,
  Flex,
  List,
  ListItem,
  ListIcon,
  Progress,
  Grid,
  GridItem,
  IconButton,
} from "@chakra-ui/react";
import Brand from "@components/lib/Brand";
import Button from "@components/lib/Button";
import Heading from "@components/lib/Heading";
import Text from "@components/lib/Text";
import TextInput from "@components/lib/TextInput";
import { FaCheckCircle } from "react-icons/fa";
import { ImRadioChecked } from "react-icons/im";
import { VscDebugRestart } from "react-icons/vsc";
import { BsFillPlayFill, BsFillVolumeMuteFill } from "react-icons/bs";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <Box roundedTop="lg" bg="brand.600" py={5} px={20} pb={20}>
      <Navbar />

      <Flex pl={10}>
        <Box flex={1.2}>
          <Heading fontSize="6xl" mb={10} lineHeight={1}>
            Launch your own online learning platform
          </Heading>

          <List spacing={5} mb={16}>
            <ListItem>
              <ListIcon color="white" fontSize="2xl" mr={6}>
                <FaCheckCircle />
              </ListIcon>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </ListItem>
            <ListItem>
              <ListIcon color="white" fontSize="2xl" mr={6}>
                <FaCheckCircle />
              </ListIcon>
              Assumenda, quia temporibus eveniet a libero incidunt suscipit
            </ListItem>
          </List>

          <Flex as="form" mb={16}>
            <TextInput mr={3} placeholder="Enter your email..." type="email" />
            <Button uppercase dark>
              start learning
            </Button>
          </Flex>

          <Flex>
            <Brand logoOnly="round" pr={5} />

            <Text w="400px">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
              Assumenda, quia temporibus eveniet a libero.
            </Text>
          </Flex>
        </Box>

        <Box
          flex={0.8}
          // border="1px"
          pos="relative"
        >
          <Flex
            flexDir="column"
            justifyContent="space-between"
            pos="absolute"
            bottom={0}
            right={0}
            pt={8}
            pb={5}
            px={5}
            w="250px"
            h="170px"
            bg="white"
            rounded="sm"
            boxShadow={`
              30px 30px 0 rgba(255, 255, 255, 0.5),
              -30px -30px 0 rgba(255, 255, 255, 0.2)
            `}
          >
            <Grid templateColumns="auto 1fr">
              <GridItem mr={3}>
                <ImRadioChecked />
              </GridItem>

              <GridItem
                d="flex"
                flexDir="column"
                justifyContent="space-between"
              >
                <Progress value={80} colorScheme="gray" size="xs" />
                <Progress value={0} size="xs" />
              </GridItem>
            </Grid>

            <Progress value={50} colorScheme="gray" size="sm" />

            <Flex alignItems="center" justifyContent="space-between">
              <IconButton isRound>
                <BsFillPlayFill />
              </IconButton>
              <IconButton isRound>
                <BsFillVolumeMuteFill />
              </IconButton>
              <IconButton isRound>
                <VscDebugRestart />
              </IconButton>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
