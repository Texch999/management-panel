import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { FaLocationDot, FaTrophy } from "react-icons/fa6";
import { MdStadium } from "react-icons/md";
import Table from "../table/Table";
import {MdDateRange} from "react-icons/md";
import {BiTimeFive} from "react-icons/bi";
import {MdOutlineEdit} from "react-icons/md";
function Creatematch() {
  const top_cricket_countries = [
    "India",
    "Australia",
    "England",
    "New Zealand",
    "Pakistan",
    "South Africa",
    "Sri Lanka",
    "West Indies",
    "Bangladesh",
    "Zimbabwe",
  ];
  const sportsDropdowns = [
    {
      headName: "Sports Name",
      options: <option>Cricket</option>,
    },
    {
      headName: "Team1",
      options: top_cricket_countries.map((item, index) => {
        return <option key={index}>{item}</option>;
      }),
    },
    {
      headName: "Team2",
      options: top_cricket_countries.map((item, index) => {
        return <option key={index}>{item}</option>;
      }),
    },
  ];
  const MatchTypeDropdown = [
    {
      heading: "Macth Type",
      cspan: "col",
    },
    {
      heading: "1st Inn",
      cspan: "col",
    },
    {
      heading: "2nd Inn",
      cspan: "col",
    },
  ];
  const CREATEMATCH_DETAILS = [
    {
      seriesname:"T20 World Cup",
      team: "Newziland  vs  SriLanka",
      sportsname: "Cricket, Male",
      livescoreboard: <div className="empty-bg-br d-flex align-items-center text-center m-auto"></div>,
      matchplace: "One Day Amhadabad Stadium",
      date: "01/08/2023 ",
      time: "11:46:00 AM",
      icon: <MdOutlineEdit className="eye-icon-size" />,
    },
    {
      seriesname:"T20 World Cup",
      team: "Newziland  vs  SriLanka",
      sportsname: "Cricket, Male",
      livescoreboard: <div className="empty-bg-br d-flex align-items-center text-center m-auto"></div>,
      matchplace: "One Day Amhadabad Stadium",
      date: "01/08/2023 ",
      time: "11:46:00 AM",
      icon: <MdOutlineEdit className="eye-icon-size" />,
    },
    {
      seriesname:"T20 World Cup",
      team: "Newziland  vs  SriLanka",
      sportsname: "Cricket, Male",
      livescoreboard: <div className="empty-bg-br d-flex align-items-center text-center m-auto"></div>,
      matchplace: "One Day Amhadabad Stadium",
      date: "01/08/2023 ",
      time: "11:46:00 AM",
      icon: <MdOutlineEdit className="eye-icon-size" />,
    },
    {
      seriesname:"T20 World Cup",
      team: "Newziland  vs  SriLanka",
      sportsname: "Cricket, Male",
      livescoreboard: <div className="empty-bg-br d-flex align-items-center text-center m-auto"></div>,
      matchplace: "One Day Amhadabad Stadium",
      date: "01/08/2023 ",
      time: "11:46:00 AM",
      icon: <MdOutlineEdit className="eye-icon-size" />,
    },
    {
      seriesname:"T20 World Cup",
      team: "Newziland  vs  SriLanka",
      sportsname: "Cricket, Male",
      livescoreboard: <div className="empty-bg-br d-flex align-items-center text-center m-auto"></div>,
      matchplace: "One Day Amhadabad Stadium",
      date: "01/08/2023 ",
      time: "11:46:00 AM",
      icon: <MdOutlineEdit className="eye-icon-size" />,
    },
  ];

  const cols = [
    {
      header: "SERIES NAME",
      field: "seriesname",
    },
    {
      header: "TEAM",
      field: "team",
    },
    {
      header: "SPORTS NAME",
      field: "sportsname",
    },
    {
      header: "LINK LIVE SCOREBOARD",
      field: "livescoreboard",
    },
    {
      header: "MATCH PLACE",
      field: "matchplace",
    },
    {
      header: "DATE & TIME",
      field: "dateAndTime",
    },
    {
      header: "",
      field: "icon",
    },
  ];

  const modifiedCreatematchDetails = CREATEMATCH_DETAILS.map(
    (item) => ({
      ...item,
      team: (
        <div className="role-color">
          <span className="role-color">{item?.team}</span>{" "}
        </div>
      ),
      dateAndTime: (
        <div>
          {item?.date} <br /> <span>{item?.time}</span>{" "}
        </div>
      ),
    })
  );
  
  // const handleSubmitMatch = () => {
  //   setCreateMacthSubmit(true);
  // };

   
  return (
    <div className="p-4 w-100">
    <h6 className="h6 font-grey p-2">CREATE MATCH</h6>
    <div className="sidebar-bg rounded">
    <div className="row gutter-1rem p-2">
    <div className="col">
      <div className="th-color small-font">Series Name</div>
      <div className="sport-management-input d-flex ">
        <input placeholder="Enter" className="w-90 th-color small-font p-1" />
      
      </div>
    </div>
    {sportsDropdowns.map((item, index) => {
      return (
        <div key={index} className="col">
          <div className="th-color small-font">{item.headName}</div>
          <select className="sport-management-input d-flex p-1 th-color small-font w-100 sport-management-select">
            {item.options}
          </select>
        </div>
      );
    })}
    <div className="col">
      <div className="th-color small-font">Series Name</div>
      <div className="sport-management-input d-flex justify-content-between p-1 th-color small-font">
        <input placeholder="Enter" className="w-90 th-color small-font p-1" />
        <FaLocationDot  className="bluecolor-text medium-font"/>
      </div>
    </div>
  </div>
  <div className="row gutter-1rem mt-3 p-2">
    <div className="col">
      <div className="th-color small-font">Stadium</div>
      <div className="sport-management-input d-flex p-1 th-color small-font">
        <input placeholder="Enter" className="w-90 th-color small-font p-1" />
        
      </div>
    </div>
    <div className="col">
      <div className="th-color small-font">Gender</div>
      <div className="sport-management-input d-flex p-1 th-color small-font p-1">
        <select className="sport-management-input d-flex p-1 th-color small-font w-100 sport-management-select">
          <option>Male</option>
          <option>FeMale</option>
        </select>
      </div>
    </div>
    <div className="col">
      <div className="th-color small-font">Date</div>
      <div className="sport-management-input d-flex p-1 th-color small-font">
        <input className="w-100 m-auto th-color small-font p-1" type="date"></input>
        <MdDateRange className="bluecolor-text medium-font"/>
      </div>
    </div>
    <div className="col">
      <div className="th-color small-font">Time</div>
      <div className="sport-management-input d-flex p-1 th-color small-font">
        <input className="w-100 m-auto th-color small-font p-1" type="time"></input>
        <BiTimeFive className="bluecolor-text medium-font"/>
      </div>
    </div>
    <div className="col"></div>
  </div>
  <div className="row gutter-1rem mt-3 p-2 th-color small-font">
    {MatchTypeDropdown.map((item, index) => {
      return (
        <div className={item.cspan}>
          <div className="th-color small-font">{item.heading}</div>
          <div className="sport-management-input d-flex justify-content-between p-1 th-color small-font">
            <div className="w-90 th-color small-font ">Enter</div>
            <BsChevronDown className="th-color medium-font fw-bold"/>
          </div>
        </div>
      );
    })}
    <div className="col d-flex align-items-end th-color small-font">
      <div
        className="sport-management-input w-100 th-color small-font d-flex justify-content-center align-items-center bg-yellow"
        // onClick={() => handleSubmitMatch()}
      >
        Submit
      </div>
    </div>
    <div className="col"></div>
  </div>
<hr className="hr-color"/>
    <div className=" medium-font font-weight-bold px-2 p-2 pt-0 mt-0 th-color">
          Ur Creating Matches
        </div>

        <Table columns={cols} data={modifiedCreatematchDetails} />
    </div>
  </div>
  );
}

export default Creatematch
