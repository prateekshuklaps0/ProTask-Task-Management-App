import { Avatar, Button, Textarea } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { BiLock } from "react-icons/bi";
import { BsClock, BsMailbox, BsMailbox2 } from "react-icons/bs";
import { MdAllInbox, MdMail } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "../Components/SideBar";
import { store } from "../Redux/Store";
import { Context } from "../Redux/Context";
import axios from "axios";
import { useEffect } from "react";
const Profile = () => {
  const Bgcolor = localStorage.getItem("bg-color");
  const dispatch = useDispatch();
 const {loggedInUser, token, userNameLogged} = useContext(Context)

  
//  useEffect(()=> {
//     console.log(loggedInUser)
//  },[loggedInUser])

   return (
    <div className="flex ">
      <div>
        <SideBar />
      </div>

      <div className={`flex-1 ${Bgcolor} p-8` }>
        <div className="flex bg-slate-100 p-3 rounded-lg flex-col gap-2 sm:flex-row md:flex-row lg:flex-row xl:flex-row items-center  space-x-7">
          <Avatar name={loggedInUser.name} size={"2xl"} w="200px" h="200px" bgColor="blue.300" />

          <div className=" flex flex-col gap-3">
            <h1 className="text-3xl font-normal">{loggedInUser?.name}</h1>
            <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row space-x-0 sm:space-x-2 md:space-x-2 lg:space-x-2 xl:space-x-2 items-start ">
              <p className="text-sm flex items-center space-x-1 text-slate-500">
                <BsClock fontSize={"20px"} />{" "}
                <span>{Date().split(" ")[4]} local time</span>{" "}
              </p>
              <p className="text-sm flex items-center space-x-1 text-slate-500">
                <MdMail fontSize={"20px"} /> <span>{loggedInUser?.email}</span>
              </p>
            </div>

            <Button w="100px" size="md"colorScheme={"telegram"}>
              Edit Profile
            </Button>
          </div>
        </div>

        <div
          id="bottom"
          className="flex-col  items-center gap-5 mt-6 flex sm:flex-col md:flex-row    justify-around"
        >
          <div className="border-2 text-lg bg-slate-100  rounded-lg border-slate-300 w-96 h-48 p-3">
            <h1 className="font-medium">About me</h1>
            <Textarea
              fontSize={"15px"}
              placeholder="Use this space to tell people about yourself."
            ></Textarea>
          </div>

          <div className="border-2 bg-slate-100  text-lg rounded-lg border-slate-300 w-96 p-3">
            <h1 className="font-medium flex  items-center space-x-2">
              {" "}
              <span>Frequent Collaborators</span> <BiLock fontSize={"15px"} />{" "}
            </h1>

            <div className="flex flex-wrap gap-8 mt-4">
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
      </div>
    </div>
  );
};

export default Profile;
