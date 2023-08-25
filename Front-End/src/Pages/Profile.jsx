import { Avatar, Button, Textarea } from "@chakra-ui/react";
import React from "react";
import { BiLock } from "react-icons/bi";
import { BsClock, BsMailbox, BsMailbox2 } from "react-icons/bs";
import { MdAllInbox, MdMail } from "react-icons/md";
import SideBar from "../Components/SideBar";

const Profile = () => {
  const Bgcolor = localStorage.getItem("bg-color");

  return (
    <div className="flex ">
      <div>
        <SideBar />
      </div>

      <div className={`flex-1 ${Bgcolor} p-8` }>
        <div className="flex bg-slate-100 p-3 rounded-lg flex-col gap-2 sm:flex-row md:flex-row lg:flex-row xl:flex-row items-center  space-x-7">
          <Avatar name="MOhnish Vishwakarma" size={"2xl"} bgColor="blue.300" />

          <div className=" flex flex-col gap-3">
            <h1 className="text-2xl font-normal">Mohnish Vishwakarma</h1>
            <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row space-x-0 sm:space-x-2 md:space-x-2 lg:space-x-2 xl:space-x-2 items-start ">
              <p className="text-xs flex items-center space-x-1 text-slate-500">
                <BsClock fontSize={"15px"} />{" "}
                <span>{Date().split(" ")[4]} local time</span>{" "}
              </p>
              <p className="text-xs flex items-center space-x-1 text-slate-500">
                <MdMail fontSize={"15px"} /> <span>mohnish201@gmail.com</span>
              </p>
            </div>

            <Button w="80px" size="xs" colorScheme={"telegram"}>
              Edit Profile
            </Button>
          </div>
        </div>

        <div
          id="bottom"
          className="flex-col  items-center gap-5 mt-6 flex sm:flex-col md:flex-row    justify-around"
        >
          <div className="border-2 bg-slate-100  rounded-lg border-slate-300 w-72 p-3">
            <h1 className="font-medium">About me</h1>
            <Textarea
              fontSize={"12px"}
              placeholder="Use this space to tell people about yourself."
            ></Textarea>
          </div>

          <div className="border-2 bg-slate-100  rounded-lg border-slate-300 w-72 p-3">
            <h1 className="font-medium flex items-center space-x-2">
              {" "}
              <span>Frequent Collaborators</span> <BiLock fontSize={"12px"} />{" "}
            </h1>

            <div className="flex flex-wrap gap-3 mt-4">
                <div className="flex items-center space-x-3">
                  <Avatar
                    size={"sm"}
                    name="Prateek"
                    src="https://bit.ly/broken-link"
                  />
                  <span>Prateek</span>
                </div>

                <div className="flex items-center space-x-3">
                  <Avatar
                    size={"sm"}
                    name="Krishna"
                    src="https://bit.ly/broken-link"
                  />
                  <span>Krishna</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Avatar
                    size={"sm"}
                    name="harshit"
                    src="https://bit.ly/broken-link"
                  />
                  <span>Harshit</span>
                </div>

                <div className="flex items-center space-x-3">
                  <Avatar
                    size={"sm"}
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
