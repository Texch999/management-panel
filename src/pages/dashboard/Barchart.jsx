import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
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
      label: " Dataset",
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
    <div className="w-100 h-100 sidebar-bg home-border-radius p-2">
      <div className="w-100 d-flex justify-content-between th-color">
        <div className="w-50 small-font">
          <span>Spending Statistics</span>
        </div>
        <div className="w-45 d-flex justify-content-around th-color">
          <div className="day-button rounded-pill small-font height px-2 ">
            Day
          </div>
          <div className="day-button rounded-pill small-font height px-2 ">
            Week
          </div>
          <div className="day-button rounded-pill small-font height px-2 ">
            Month
          </div>
        </div>
      </div>
      <div className="th-color small-font">
        <span>Total Revenue</span>
        <h6 className="small-font">203.378</h6>
        <span>Total Income in week</span>
      </div>
      <div className="chat-margin">
        <Bar data={data}></Bar>
      </div>
    </div>
  );
}

export default Barchart;
