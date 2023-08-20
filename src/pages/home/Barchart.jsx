import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import "./style.css";
const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My Dataset",
      backgroundColor: "#313351",
      borderColor: "",
      borderRadius: 40,
      // borderRadius:'15px',
      data: [16, 10, 5, 2, 20, 30, 45],
    },
    {
      label: "My Dataset",
      backgroundColor: "#696cff",
      borderColor: "",
      borderRadius: 40,
      // borderRadius:'15px',
      data: [16, 30, 15, 10, 20, 30, 45],
    },
  ],
};

function Barchart() {
  return (
    <div className="w-45 grapgheight sidebar-bg home-border-radius p-2">
      <div className="w-100 d-flex justify-content-between text-white">
        <div className="w-50 medium-font">
          <span>Spending Statistics</span>
        </div>
        <div className="w-50 d-flex justify-content-around text-white">
          <div className="day-button rounded-pill medium-font p-1 height px-2 ">Day</div>
          <div className="day-button rounded-pill medium-font p-1 height px-2 ">Week</div>
          <div className="day-button rounded-pill medium-font p-1 height px-2 ">Month</div>
        </div>
      </div>
      <div className="text-white medium-font">
        <span>Total Revenue</span>
        <h6 className="medium-font">203.378</h6>
        <span>Total Income in week</span>
      </div>
      <Bar data={data}></Bar>
    </div>
  );
}

export default Barchart;
