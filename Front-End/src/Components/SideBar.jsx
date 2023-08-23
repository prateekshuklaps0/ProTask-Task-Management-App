import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Button,
  useDisclosure,
  Input,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Divider,
} from "@chakra-ui/react";
import { BiHomeAlt2 } from "react-icons/bi";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { RiNotification3Line } from "react-icons/ri";
import { GoProjectSymlink } from "react-icons/go";
import { BiSolidSquareRounded } from "react-icons/bi";

const SideBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Box>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <List fontSize={"13px"} spacing="2">
              <ListItem>
                <ListIcon as={BiHomeAlt2} fontSize="18px" />
                Home
              </ListItem>

              <ListItem>
                <ListIcon as={RiCheckboxCircleLine} fontSize="18px" />
                My tasks
              </ListItem>

              <ListItem>
                <ListIcon as={RiNotification3Line} fontSize="18px" />
                Inbox
              </ListItem>

              <Divider />
              <ListItem>
                <ListIcon as={GoProjectSymlink} fontSize="18px" />
                Projects
              </ListItem>

              <ListItem>
                <ListIcon
                  as={BiSolidSquareRounded}
                  fontSize="18px"
                  color={"orange.300"}
                />
                Project-1
              </ListItem>

              <ListItem>
                <ListIcon
                  as={BiSolidSquareRounded}
                  fontSize="18px"
                  color={"teal.400"}
                />
                Project-2
              </ListItem>

              <ListItem>
                <ListIcon
                  as={BiSolidSquareRounded}
                  fontSize="18px"
                  color={"purple.500"}
                />
                Project-3
              </ListItem>
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default SideBar;
