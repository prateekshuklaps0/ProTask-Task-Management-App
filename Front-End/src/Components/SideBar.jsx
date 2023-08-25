import React, { useState } from "react";
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
// import { GoProjectSymNavLink } from "react-icons/go";
import { BiSolidSquareRounded } from "react-icons/bi";
import { MdAddBox } from "react-icons/md";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  //   const btnRef = React.useRef();
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="hidden sm:hidden md:hidden lg:flex xl:flex h-screen text-sm   ">
      <div
        className={`${
          isOpen ? "w-48" : "w-0"
        } bg-white min-h-screen border-r border-t overflow-hidden transition-width duration-500`}
      >
        {/* <button onClick={toggleSidebar} className="flex ml-auto mr-3">❌</button> */}
        <div className="p-2">
          <ul className="space-y-2">
            <NavLink to="/home">
              {" "}
              <li className="flex items-center space-x-2 pl-2 pt-2 pr-1 pb-2 box-border cursor-pointer hover:bg-slate-200 rounded-md active:bg-slate-200">
                <BiHomeAlt2 fontSize={"16px"} />
                <span>Home</span>
              </li>
            </NavLink>
            <NavLink to="/task">
              <li className="flex items-center space-x-2 pl-2 pt-2 pr-1 pb-2 box-border cursor-pointer hover:bg-slate-200 rounded-md active:bg-slate-50 ">
                <RiCheckboxCircleLine fontSize={"16px"} />
                <span>My tasks</span>
              </li>{" "}
            </NavLink>
            <NavLink>
              <li className="flex items-center space-x-2 pl-2 pt-2 pr-1 pb-2 box-border cursor-pointer hover:bg-slate-200 rounded-md active:bg-slate-50">
                <RiNotification3Line fontSize={"16px"} />
                <span>Inbox</span>
              </li>
            </NavLink>
            <li className="border-t mt-4 pt-4 flex items-center space-x-8">
              <span className="text-gray-600 font-semibold ml-2">
                Projects{" "}
              </span>
              <MdAddBox fontWeight={"bold"} cursor="pointer" color="gray" />
            </li>
            <NavLink to="/temp">
              {" "}
              <li className="flex items-center space-x-2 mt-3 pl-2 pt-1 pr-1 pb-1 box-border cursor-pointer hover:bg-slate-200 rounded-md active:bg-slate-50">
                <BiSolidSquareRounded className="text-orange-300" />
                <span>Project-1</span>
              </li>
            </NavLink>
            <li className="flex items-center space-x-2 pl-2 pt-1 pr-1 pb-1 box-border cursor-pointer hover:bg-slate-200 rounded-md active:bg-slate-50">
              <BiSolidSquareRounded className="text-teal-400" />
              <span>Project-2</span>
            </li>
            <li className="flex items-center space-x-2 pl-2 pt-1 pr-1 pb-1 box-border cursor-pointer hover:bg-slate-200 rounded-md active:bg-slate-50">
              <BiSolidSquareRounded className="text-purple-500" />
              <span>Project-3</span>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="flex-1 p-8">
        <button onClick={toggleSidebar}>Toggle Sidebar</button>
      </div> */}
    </div>
    // <Box>
    //   <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
    //     Open
    //   </Button>
    //   <Drawer
    //     isOpen={isOpen}
    //     placement="left"
    //     onClose={onClose}
    //     finalFocusRef={btnRef}
    //     size="xs"

    //   >
    //     <DrawerOverlay />
    //     <DrawerContent>
    //       <DrawerCloseButton />

    //       <DrawerBody>
    //         <List fontSize={"13px"} spacing="2">
    //           <ListItem>
    //             <ListIcon as={BiHomeAlt2} fontSize="18px" />
    //             Home
    //           </ListItem>

    //           <ListItem>
    //             <ListIcon as={RiCheckboxCircleLine} fontSize="18px" />
    //             My tasks
    //           </ListItem>

    //           <ListItem>
    //             <ListIcon as={RiNotification3Line} fontSize="18px" />
    //             Inbox
    //           </ListItem>

    //           <Divider />
    //           <ListItem>
    //             <ListIcon as={GoProjectSymNavLink} fontSize="18px" />
    //             Projects
    //           </ListItem>

    //           <ListItem>
    //             <ListIcon
    //               as={BiSolidSquareRounded}
    //               fontSize="18px"
    //               color={"orange.300"}
    //             />
    //             Project-1
    //           </ListItem>

    //           <ListItem>
    //             <ListIcon
    //               as={BiSolidSquareRounded}
    //               fontSize="18px"
    //               color={"teal.400"}
    //             />
    //             Project-2
    //           </ListItem>

    //           <ListItem>
    //             <ListIcon
    //               as={BiSolidSquareRounded}
    //               fontSize="18px"
    //               color={"purple.500"}
    //             />
    //             Project-3
    //           </ListItem>
    //         </List>
    //       </DrawerBody>
    //     </DrawerContent>
    //   </Drawer>
    // </Box>
  );
};

export default SideBar;
