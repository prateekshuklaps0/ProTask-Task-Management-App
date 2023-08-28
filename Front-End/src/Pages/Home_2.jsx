import React, { useEffect, useRef, useState } from "react";
import { BsCheckAll } from "react-icons/bs";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { BiCheckCircle, BiCustomize } from "react-icons/bi";
import { AiOutlineCheck, AiOutlineCheckCircle } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import check from "../Images/check.png";
import project from "../Images/project.webp";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  Button,
  Heading,
  Grid,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Textarea,
  Avatar,
  AvatarBadge,
  AvatarGroup,
} from "@chakra-ui/react";
import SideBar from "../Components/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { get_projects } from "../Redux/ProjectReducer/action";
import { get_tasks } from "../Redux/TaskReducer/action";
import {store} from "../Redux/Store";

const Home_2 = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [color, setColor] = useState(
    localStorage.getItem("bg-color") || "bg-slate-50"
  );
  const dispatch = useDispatch();
  const projects = useSelector((store) => store.projectReducer.projects);
  let tasks = useSelector((store) => store.taskReducer.tasksbyProId)
  

  console.log(tasks)
  
 console.log(projects[0]?._id)
  const token = localStorage.getItem("token")

  // console.log(token)
   

  const projectId = projects[0]?._id || "64e9df3be1cc48d363ff2686";

  const todoTask = tasks?.find((el) => el.status === "todo");

  const inprogressTask = tasks.find((el) => el.status == "inprogress");

  const completedTask = tasks.find((el) => el.status == "completed");


  useEffect(() => {
    dispatch(get_projects(token));
    dispatch(get_tasks(token, projectId));
  }, []);

  const currentDay = Date()?.split(" ")[0];
  const currentMonth = Date()?.split(" ")[1];
  const currentDate = Date()?.split(" ")[2];

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const hours = currentTime.getHours();
  let greeting;

  if (hours < 12) {
    greeting = "Good Morning";
  } else if (hours < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  const handleColor = (col) => {
    setColor(col);

    localStorage.setItem("bg-color", col);
  };

  return (
    <div className="flex ">
      <div className="fixed">
        <SideBar />
      </div>
      {/* Home-2 */}
      <div className="flex-1 pl-0 sm:pl-0 md:pl-0 lg:pl-48 xl:pl-48">
        <div className={`${color} pb-12`}>
          <h1 className="flex justify-between p-3 font-medium">
            Home{" "}
            <button
              onClick={onOpen}
              className=" border-1 p-2 rounded-md text-sm bg-white inline-flex items-center space-x-1"
            >
              <BiCustomize fontSize={"18px"} /> <span> Customize</span>
            </button>
          </h1>

          <div className="text-center pt-7">
            <h3 className="font-medium text-sm sm:text-md md:text-lg lg:text-xl ">
              {currentDay}, {currentMonth} {currentDate}
            </h3>
            <h2 className="text-lg font-medium sm:text-3xl md:text-3xl lg:text-3xl">
              {greeting}, Mohnish
            </h2>

            <div className=" mt-3 pr-2">
              <ul className="flex justify-evenly space-x-8 text-xs md:text-sm lg:text-sm xl:text-lg 2xl:text-sm  bg-white p-3 m-auto w-96 sm:w-96 md:w-2/3 lg:w-2/3 xl:w-2/3 2xl:w-1/3 rounded-3xl">
                <li className="cursor-pointer">My Month ▾ </li>
                <li className="flex items-center space-x-1 cursor-pointer">
                  <BsCheckAll fontSize={"18px"} />{" "}
                  <span>0 tasks completed</span>{" "}
                </li>
                <li className="cursor-pointer flex items-center space-x-1">
                  {" "}
                  <MdOutlinePeopleAlt fontSize={"18px"} />{" "}
                  <span>1 collaborator</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-7 place-items-center m-auto mt-10">
            {/* Notepad */}
            <div className="w-5/6 h-80 rounded-lg bg-white box-border shadow-lg">
              <h1 className="p-3 font-medium flex items-center space-x-1">
                <span>Private Notepad</span> <BiLockAlt fontSize={"12px"} />
              </h1>

              <Textarea
                h={"200px"}
                w={{
                  base: "300px",
                  sm: "300px",
                  md: "300px",
                  lg: "300px",
                  xl: "400px",
                }}
                m={"auto"}
                className="place-items-center flex"
                placeholder="Type anything"
                size="sm"
                resize={"none"}
              />
            </div>
            {/* 
        Tasks */}
            <div className="w-5/6 h-80 rounded-lg bg-white shadow-lg">
              <h1 className="p-3 font-medium flex items-center space-x-1">
                <span>My Tasks</span> <BiLockAlt fontSize={"12px"} />
              </h1>

              <Tabs position="relative" variant="unstyled" fontSize={"20px"}>
                <TabList>
                  <Tab fontSize={"15px"} fontWeight="semibold">
                    Upcoming
                  </Tab>
                  <Tab fontSize={"15px"} fontWeight="semibold">
                    Overdue
                  </Tab>
                  <Tab fontSize={"15px"} fontWeight="semibold">
                    Completed
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
                    {tasks.length === 0 || !todoTask ? (
                      <div>
                        <img
                          className="w-16 flex m-auto mt-2"
                          src={check}
                          alt=""
                        />
                        <p className="text-center text-slate-500 text-sm">
                          you don't have any upcoming task
                        </p>
                      </div>
                    ) : (
                      <ul className="text-base max-h-48 overflow-y-scroll">
                        {tasks.map(
                          (el) =>
                            el.status == "todo" && (
                              <li
                                className="flex items-center space-x-2 border-b-2 p-1"
                                key={el._id}
                              >
                                <AiOutlineCheckCircle /> <span>{el.title}</span>
                              </li>
                            )
                        )}
                      </ul>
                    )}
                  </TabPanel>
                  <TabPanel>
                    {tasks.length === 0 || !inprogressTask ? (
                      <div>
                        <img
                          className="w-16 flex m-auto mt-2"
                          src={check}
                          alt=""
                        />
                        <p className="text-center text-slate-500 text-sm">
                          you don't have any upcoming task
                        </p>
                      </div>
                    ) : (
                      <ul className="text-base max-h-48 overflow-y-scroll">
                        {tasks.map(
                          (el) =>
                            el.status == "inprogress" && (
                              <li
                                className="flex items-center space-x-2 border-b-2 p-1"
                                key={el._id}
                              >
                                <AiOutlineCheckCircle /> <span>{el.title}</span>
                              </li>
                            )
                        )}
                      </ul>
                    )}
                  </TabPanel>
                  <TabPanel>
                   {tasks.length === 0 || !completedTask ? (
                      <div>
                        <img
                          className="w-16 flex m-auto mt-2"
                          src={check}
                          alt=""
                        />
                        <p className="text-center text-slate-500 text-sm">
                          you don't have any upcoming task
                        </p>
                      </div>
                    ) : (
                      <ul className="text-base max-h-48 overflow-y-scroll">
                        {tasks.map(
                          (el) =>
                            el.status == "completed" && (
                              <li
                                className="flex items-center space-x-2 border-b-2 p-1"
                                key={el._id}
                              >
                                <AiOutlineCheckCircle /> <span>{el.title}</span>
                              </li>
                            )
                        )}
                      </ul>
                    )}
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </div>
            {/* Projects */}
            <div className="w-5/6 h-80 rounded-lg bg-white shadow-lg">
              <h1 className="p-3 font-medium flex items-center space-x-3">
                <span>Projects</span>{" "}
                <span className="text-xs ">Recents ▾</span>
              </h1>

              <div className="grid grid-flow-row grid-cols-2 gap-5 place-items-center">
                {projects.map((el) => (
                  <div
                    className="flex items-center space-x-2 mt-3"
                    key={el._id}
                  >
                    <img src={project} className="w-9 rounded-lg" alt="" />
                    <p className="font-medium text-md">{el.title}</p>
                  </div>
                ))}

                {/* <div className="flex items-center space-x-2 mt-3">
                  <img src={project} className="w-9 rounded-lg" alt="" />
                  <p className="font-medium text-md">Project-1</p>
                </div>

                <div className="flex items-center space-x-2 mt-3">
                  <img src={project} className="w-9 rounded-lg" alt="" />
                  <p className="font-medium text-md">Project-2</p>
                </div>

                <div className="flex items-center space-x-2 mt-3">
                  <img src={project} className="w-9 rounded-lg" alt="" />
                  <p className="font-medium text-md">Project-3</p>
                </div> */}
              </div>
            </div>
            {/* People */}
            <div className="w-5/6 h-80 rounded-lg bg-white shadow-lg">
              <h1 className="p-3 font-medium flex items-center space-x-3">
                <span>People</span>{" "}
                <span className="text-xs ">Frequent Collaborators ▾</span>
              </h1>

              <div className="grid grid-flow-row grid-cols-2  mt-5 text-md font-medium p-5 gap-6">
                <div className="flex items-center space-x-3">
                  <Avatar
                    size={"md"}
                    name="Prateek"
                    src="https://bit.ly/broken-link"
                  />
                  <span>Prateek</span>
                </div>

                <div className="flex items-center space-x-3">
                  <Avatar
                    size={"md"}
                    name="Krishna"
                    src="https://bit.ly/broken-link"
                  />
                  <span>Krishna</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Avatar
                    size={"md"}
                    name="harshit"
                    src="https://bit.ly/broken-link"
                  />
                  <span>Harshit</span>
                </div>

                <div className="flex items-center space-x-3">
                  <Avatar
                    size={"md"}
                    name="Mohnish"
                    src="https://bit.ly/broken-link"
                  />
                  <span>Mohnish</span>
                </div>
              </div>
            </div>
          </div>

          {/* drawer */}
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
            size="xs"
          >
            {/* <DrawerOverlay /> */}
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Customize Home</DrawerHeader>

              <DrawerBody p="25px">
                <Heading fontSize={"sm"} fontWeight={"semibold"} mb="20px">
                  Background
                </Heading>

                <Grid templateColumns={"repeat(6,1fr)"} gap="10px">
                  <Button
                    borderRadius={"50%"}
                    bgColor="red.300"
                    _hover={{ bgColor: "red.300" }}
                    onClick={() => handleColor("bg-red-300")}
                    fontSize="60px"
                  >
                    {color === "bg-red-300" && <AiOutlineCheck size={"sm"} />}
                  </Button>
                  <Button
                    borderRadius={"50%"}
                    bgColor="blue.300"
                    _hover={{ bgColor: "blue.300" }}
                    onClick={() => handleColor("bg-blue-300")}
                  >
                    {color === "bg-blue-300" && <AiOutlineCheck size={"sm"} />}
                  </Button>
                  <Button
                    borderRadius={"50%"}
                    bgColor="green.300"
                    _hover={{ bgColor: "green.300" }}
                    onClick={() => handleColor("bg-green-300")}
                  >
                    {color === "bg-green-300" && <AiOutlineCheck size={"sm"} />}
                  </Button>
                  <Button
                    borderRadius={"50%"}
                    bgColor="purple.300"
                    _hover={{ bgColor: "purple.300" }}
                    onClick={() => handleColor("bg-purple-300")}
                  >
                    {color === "bg-purple-300" && (
                      <AiOutlineCheck size={"sm"} />
                    )}
                  </Button>
                  <Button
                    borderRadius={"50%"}
                    bgColor="whiteAlpha"
                    _hover={{ bgColor: "whiteAlpha" }}
                    onClick={() => handleColor("bg-blue-100")}
                  >
                    {color === "bg-blue-100" && <AiOutlineCheck size={"sm"} />}
                  </Button>
                  <Button
                    borderRadius={"50%"}
                    bgColor="pink.300"
                    _hover={{ bgColor: "pink.300" }}
                    onClick={() => handleColor("bg-pink-300")}
                  >
                    {color === "bg-pink-300" && <AiOutlineCheck size={"sm"} />}
                  </Button>
                  <Button
                    borderRadius={"50%"}
                    bgColor="teal.200"
                    _hover={{ bgColor: "teal.200" }}
                    onClick={() => handleColor("bg-teal-200")}
                  >
                    {color === "bg-teal-200" && <AiOutlineCheck size={"sm"} />}
                  </Button>
                  <Button
                    borderRadius={"50%"}
                    bgColor="blackAlpha.300"
                    _hover={{ bgColor: "blackAlpha.300" }}
                    onClick={() => handleColor("bg-zinc-300")}
                  >
                    {color === "bg-zinc-300" && <AiOutlineCheck size={"sm"} />}
                  </Button>
                  <Button
                    borderRadius={"50%"}
                    bgColor="cyan.400"
                    _hover={{ bgColor: "cyan.400" }}
                    onClick={() => handleColor("bg-cyan-400")}
                  >
                    {color === "bg-cyan-400" && <AiOutlineCheck size={"sm"} />}
                  </Button>
                  <Button
                    borderRadius={"50%"}
                    bgColor="greenyellow"
                    _hover={{ bgColor: "greenyellow" }}
                    onClick={() => handleColor("bg-lime-400")}
                  >
                    {color === "bg-lime-400" && <AiOutlineCheck size={"sm"} />}
                  </Button>
                  <Button
                    borderRadius={"50%"}
                    bgColor="pink.100"
                    _hover={{ bgColor: "pink.100" }}
                    onClick={() => handleColor("bg-pink-100")}
                  >
                    {color === "bg-pink-100" && <AiOutlineCheck size={"sm"} />}
                  </Button>
                  <Button
                    borderRadius={"50%"}
                    bgColor="yellow.300"
                    _hover={{ bgColor: "yellow.300" }}
                    onClick={() => handleColor("bg-yellow-300")}
                  >
                    {color === "bg-yellow-300" && (
                      <AiOutlineCheck fontSize={"20px"} />
                    )}
                  </Button>
                </Grid>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Home_2;
