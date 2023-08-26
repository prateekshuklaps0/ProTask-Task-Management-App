import { AddIcon } from "@chakra-ui/icons";
import React from "react";
import SideBar from "../Components/SideBar";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const Dashboard = () => {
    const data = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [12, 19, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
             
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
             
            ],
            borderWidth: 1,
          },
        ],
      };
    

  return (
    <div>
      <button className="bg-white p-1 font-medium text-sm rounded-md flex items-center space-x-1">
        {" "}
        <AddIcon fontSize={"xs"} /> <span>Add Chart</span>{" "}
      </button>

      <div className="grid mt-5 grid-flow-row gap-9 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
        <div className="bg-white text-center text-xl pl-2 pt-3 pr-2 pb-10 shadow-lg rounded-md">
          <h1>Completed tasks</h1>
          <h1 className="text-5xl pt-4">0</h1>
        </div>
        <div className="bg-white text-center text-xl pl-2 pt-3 pr-2 pb-10 shadow-lg rounded-md">
          <h1>Incomplete tasks</h1>
          <h1 className="text-5xl pt-4">0</h1>
        </div>
        <div className="bg-white text-center text-xl pl-2 pt-3 pr-2 pb-10 shadow-lg rounded-md">
          <h1>Overdue tasks</h1>
          <h1 className="text-5xl pt-4">0</h1>
        </div>
        <div className="bg-white text-center text-xl pl-2 pt-3 pr-2 pb-10 shadow-lg rounded-md">
          <h1>Total tasks</h1>
          <h1 className="text-5xl pt-4">0</h1>
        </div>
      </div>

      <div className="w-1/2 mt-7 rounded-lg text-md bg-white">
        <Bar data={data}  />
      </div>
    </div>
  );
};

export default Dashboard;
