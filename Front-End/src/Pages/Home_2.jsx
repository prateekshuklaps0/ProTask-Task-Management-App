import React, { useRef, useState } from "react";
import { BsCheckAll } from "react-icons/bs";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { BiCustomize } from "react-icons/bi";
import { AiOutlineCheck } from "react-icons/ai";
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
} from "@chakra-ui/react";

const Home_2 = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [color, setColor] = useState("");
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
  };

  return (
    <div className={`${color}`}>
      <h1 className="flex justify-between p-3 font-medium">
        Home{" "}
        <button
          onClick={onOpen}
          className=" border-1 p-2 rounded-md text-xs bg-slate-100 inline-flex items-center space-x-1"
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
          <ul className="flex justify-evenly space-x-8 text-xs md:text-sm lg:text-xs xl:text-lg 2xl:text-sm  bg-slate-100 p-3 m-auto w-96 sm:w-96 md:w-2/3 lg:w-96 xl:w-1/2 2xl:w-96 rounded-3xl">
            <li className="cursor-pointer">My Month ▾ </li>
            <li className="flex items-center space-x-1 cursor-pointer">
              <BsCheckAll fontSize={"18px"} /> <span>0 tasks completed</span>{" "}
            </li>
            <li className="cursor-pointer flex items-center space-x-1">
              {" "}
              <MdOutlinePeopleAlt fontSize={"18px"} />{" "}
              <span>1 collaborator</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-flow-row grid-cols-2 gap-7 place-items-center m-auto mt-10">
        <div className="w-5/6 h-80 rounded-lg bg-slate-100"></div>
        <div className="w-5/6 h-80 rounded-lg bg-slate-100"></div>
        <div className="w-5/6 h-80 rounded-lg bg-slate-100"></div>
        <div className="w-5/6 h-80 rounded-lg bg-slate-100"></div>
      </div>
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
                {color==="bg-red-300" && <AiOutlineCheck size={"sm"} />}
              </Button>
              <Button
                borderRadius={"50%"}
                bgColor="blue.300"
                _hover={{ bgColor: "blue.300" }}
                onClick={() => handleColor("bg-blue-300")}
              >
                {color==="bg-blue-300" && <AiOutlineCheck size={"sm"} />}
                
              </Button>
              <Button
                borderRadius={"50%"}
                bgColor="green.300"
                _hover={{ bgColor: "green.300" }}
                onClick={() => handleColor("bg-green-300")}
              >
                {color==="bg-green-300" && <AiOutlineCheck size={"sm"} />}
                
              </Button>
              <Button
                borderRadius={"50%"}
                bgColor="purple.300"
                _hover={{ bgColor: "purple.300" }}
                onClick={() => handleColor("bg-purple-300")}
              >

                {color==="bg-purple-300" && <AiOutlineCheck size={"sm"} />}
                
              </Button>
              <Button
                borderRadius={"50%"}
                bgColor="whiteAlpha"
                _hover={{ bgColor: "whiteAlpha" }}
                onClick={() => handleColor("bg-blue-100")}
              >
                {color==="bg-blue-100" && <AiOutlineCheck size={"sm"} />}
                
              </Button>
              <Button
                borderRadius={"50%"}
                bgColor="pink.300"
                _hover={{ bgColor: "pink.300" }}
                onClick={() => handleColor("bg-pink-300")}
              >
                {color==="bg-pink-300" && <AiOutlineCheck size={"sm"} />}
                
              </Button>
              <Button
                borderRadius={"50%"}
                bgColor="teal.200"
                _hover={{ bgColor: "teal.200" }}
                onClick={() => handleColor("bg-teal-200")}
              >
                {color==="bg-teal-200" && <AiOutlineCheck size={"sm"} />}
                
              </Button>
              <Button
                borderRadius={"50%"}
                bgColor="blackAlpha.300"
                _hover={{ bgColor: "blackAlpha.300" }}
                onClick={() => handleColor("bg-zinc-300")}
              >
                {color==="bg-zinc-300" && <AiOutlineCheck size={"sm"} />}
                
              </Button>
              <Button
                borderRadius={"50%"}
                bgColor="cyan.400"
                _hover={{ bgColor: "cyan.400" }}
                onClick={() => handleColor("bg-cyan-400")}
              >
                {color==="bg-cyan-400" && <AiOutlineCheck size={"sm"} />}
                
              </Button>
              <Button
                borderRadius={"50%"}
                bgColor="greenyellow"
                _hover={{ bgColor: "greenyellow" }}
                onClick={() => handleColor("bg-lime-400")}
              >
                {color==="bg-lime-400" && <AiOutlineCheck size={"sm"} />}
                
              </Button>
              <Button
                borderRadius={"50%"}
                bgColor="pink.100"
                _hover={{ bgColor: "pink.100" }}
                onClick={() => handleColor("bg-pink-100")}
              >
                {color==="bg-pink-100" && <AiOutlineCheck size={"sm"} />}
                
              </Button>
              <Button
                borderRadius={"50%"}
                bgColor="yellow.300"
                _hover={{ bgColor: "yellow.300" }}
                onClick={() => handleColor("bg-yellow-300")}
              >
                {color==="bg-yellow-300" && <AiOutlineCheck fontSize={"20px"} />}
                
              </Button>
            </Grid>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Home_2;
