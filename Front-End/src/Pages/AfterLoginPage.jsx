import React from "react";
import SideBar from "../Components/SideBar";
import Home_2 from "./Home_2";

const AfterLoginPage = () => {
  return (
    <div className="flex ">
      <div className="flex-none">
        <SideBar />
      </div>

      <div className="flex-1">
        <Home_2/>
      </div>
    </div>
  );
};

export default AfterLoginPage;
