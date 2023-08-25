import {
  Avatar,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Button,
  Image,
  Text,
  FormLabel,
  FormControl,
  Input,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import React from "react";
import SideBar from "../Components/SideBar";
import check from "../Images/check.png";
import { GoTasklist } from "react-icons/go";
import { HiViewBoards } from "react-icons/hi";
import { MdAdd, MdDateRange } from "react-icons/md";
import { ListTemplate } from "../Components/ListTemplate";
import { BoardTemplate } from "../Components/BoardTemplate";
import { BiCustomize } from "react-icons/bi";
import AddTask from "../Components/AddTask";

const MyTasks = () => {
  const Bgcolor = localStorage.getItem("bg-color");
  return (
    <div className="flex ">
      <div>
        <SideBar />
      </div>
      {/* MyTasks */}
      <div className={`flex-1 ${Bgcolor}`}>
        <div>
          <div className="flex items-center justify-between space-x-2 ml-4 mt-3 ">
            <div className="items-center flex space-x-2">
              <Avatar w="40px" h="40px" />
              <span className="font-medium">My Tasks ▾</span>
            </div>

           
          </div>

          <Tabs position="relative" variant="unstyled" fontSize={"15px"}>
            <TabList>
              <Tab
                fontSize={"12px"}
                fontWeight="semibold"
                className="flex items-center space-x-2"
              >
                <GoTasklist fontSize={"20px"} /> <span>List</span>
              </Tab>
              <Tab
                fontSize={"12px"}
                fontWeight="semibold"
                className="flex items-center space-x-2"
              >
                <HiViewBoards fontSize={"20px"} /> <span>Board</span>
              </Tab>
              <Tab
                fontSize={"12px"}
                fontWeight="semibold"
                className="flex items-center space-x-2"
              >
                <MdDateRange fontSize={"20px"} /> <span>Calender</span>
              </Tab>
            </TabList>
            <TabIndicator
              mt="-1.5px"
              height="2px"
              bg="blue.500"
              borderRadius="1px"
            />

            <TabPanels>
              <TabPanel>
                {/* <img className="w-24 flex m-auto" src={check} alt="" />
                    <p className="text-center text-slate-500 text-sm mt-2">
                      you don't have any upcoming task
                    </p> */}
                <AddTask/>
                <ListTemplate />
              </TabPanel>
              <TabPanel>
                {/* <img className="w-24 flex m-auto" src={check} alt="" />
                    <p className="text-center text-slate-500 text-sm mt-2">
                      you don't have any overdue task
                    </p> */}
                    <AddTask/>
                <BoardTemplate />
              </TabPanel>
              <TabPanel>
                <img className="w-24 flex m-auto" src={check} alt="" />
                <p className="text-center text-slate-500 text-sm mt-2">
                  you don't have any completed task
                </p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default MyTasks;
