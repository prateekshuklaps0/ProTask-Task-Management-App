import { AddIcon } from "@chakra-ui/icons";
import React from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

const Dashboard = () => {
  const Piedata = [
    { name: "Todo", value: 400 },
    { name: "in Progress", value: 300 },
    { name: "Completed", value: 300 },
  ];

  const Bardata = [
    {
      name: "Todo",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "in Progress",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Completed",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
  ];

  const COLORS = ["#0088FE", "#FFBB28", "#00C49F"];
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

      {/* <div className="w-1/2 mt-7 rounded-lg text-md bg-white">
        <Bar data={data}  />
      </div> */}

      <div className="grid grid-flow-col grid-cols-2 p-5 mt-6 j place-items-center">
        <div className="bg-white w-96 rounded-lg p-4 h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={700}
              height={400}
              data={Bardata}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              barSize={20}
            >
              <XAxis
                dataKey="name"
                scale="point"
                padding={{ left: 10, right: 10 }}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar dataKey="pv" fill="#8884d8" background={{ fill: "#eee" }} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white w-96 flex justify-center  h-72 rounded-lg ">
          <PieChart width={200} height={300}>
            <Pie
              data={Piedata}
              innerRadius={61}
              outerRadius={100}
              fill="#8884d8"
              paddingAngle={2}
              dataKey="value"
            >
              {Piedata.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
