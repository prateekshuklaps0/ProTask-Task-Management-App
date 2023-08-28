import {
  VStack, Box, Image, Text, HStack, Heading, Tabs, TabList, TabPanels, Tab, TabPanel,
  AvatarGroup, Avatar, Menu, MenuButton, MenuItem, MenuList, Button
} from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { ListTemplate } from "./ListTemplate";
import { BoardTemplate } from "./BoardTemplate";
import { FaCalendarCheck, FaChevronDown } from "react-icons/fa";

import Dashboard from "../Pages/Dashboard";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Context } from "../Redux/Context";
import { get_projects } from "../Redux/ProjectReducer/action";


export const NavTemplate = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const { token, loggedInUser } = useContext(Context)
  let projects = useSelector((store) => store.projectReducer.projects)


  const handleDelete = () => {

  }

  useEffect(() => {
    dispatch(get_projects(token))
  }, [])


  let currProject = projects?.filter((el) => el._id === id)

  return (
    <VStack>
      <Box w={"full"}>
        <Box display={"flex"} justifyContent={"space-between"} w={"full"} alignItems={"center"}>
          <HStack>

            <FaCalendarCheck size={"20px"} color="#8D6E63" />

            <Heading size={"sm"} color="gray.700">
              {currProject[0]?.title ? currProject[0]?.title : "Project"}
            </Heading>
            <Box ml={"10px"} >

              <Menu>
                {({ isOpen }) => (
                  <>
                    <MenuButton size={"sm"} isActive={isOpen} as={Button} bgColor={"white"}>
                      <FaChevronDown color="gray" />
                    </MenuButton>
                    <MenuList>
                      <MenuItem onClick={handleDelete}>Delete this project</MenuItem>
                    </MenuList>
                  </>
                )}
              </Menu>
            </Box>


          </HStack>
          <Box>
            <AvatarGroup size="sm" max={2} mr={"20px"}>
              <Avatar name="Krishna Vaishnav" src="https://bit.ly/broken-link" />
              <Avatar name="Mohnish Vishwakarma" src="https://bit.ly/broken-link" />
              <Avatar name="Prateek Shukla" src="https://bit.ly/broken-link" />
              <Avatar name="Harshit Kumar" src="https://bit.ly/broken-link" />
            </AvatarGroup>
          </Box>
        </Box>
      </Box>
      <Box w={"full"}>
        <Tabs variant="enclosed" defaultIndex={1} size={"sm"} >
          <TabList fontWeight={"bold"}>
            <Tab _selected={{ bgColor: "white", border: "1px solid #E2E8F0" }}>Overview</Tab>
            <Tab _selected={{ bgColor: "white", border: "1px solid #E2E8F0" }}>List</Tab>
            <Tab _selected={{ bgColor: "white", border: "1px solid #E2E8F0" }}>Board</Tab>
            <Tab _selected={{ bgColor: "white", border: "1px solid #E2E8F0" }}>Dashboard</Tab>
          </TabList>


          <TabPanels>
            <TabPanel>
              <p>Overview!</p>
            </TabPanel>

            <TabPanel>
              <ListTemplate />
            </TabPanel>

            <TabPanel>
              <BoardTemplate />

            </TabPanel>

            <TabPanel>
              <Dashboard />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </VStack>
  );
};
