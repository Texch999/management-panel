import React, { useState } from "react";
import Table from "../table/Table";
import DocTable from "../table/DocTable";
import { BsArrowDown } from "react-icons/bs";
import { MdInsertPhoto, MdUpload } from "react-icons/md";
import ConformBookingTable from "../table/ConformBookingTable";

function ManageTournament() {
  const [activeManageIndex, setActiveManageIndex] = useState(0);
  const manageButtons = [
    "Interested Team",
    "Selected Team",
    "Book Now",
    "Receive Document/Payment",
    "Confirm Booking List",
  ];
  const manageDropdown = [
    {
      head: "Tours",
      options: ["All", "Tour", "Cricket Tour", "Sports Tour", "Casino TOur"],
    },
    {
      head: "Website",
      options: ["All", "w2Call", "texch.com", "ravanna.com"],
    },
    {
      head: "Location",
      options: ["All", "Hongkong", "Goa", "Srilanka", "Japan", "Thailand"],
    },
    {
      head: "Name",
      options: ["All", "jay", "vinod", "ravi", "babu"],
    },
    {
      head: "Role",
      options: [
        "All",
        "Director",
        "Super Admin",
        "Sub Admin",
        "Admin",
        "Super Master",
        "Master",
        "Agent",
      ],
    },
  ];

  const tableHeading = [
    {
      header: "S NO",
      field: "sl",
    },
    {
      header: "WEBSITE",
      field: "website",
    },
    {
      header: "DATE & TIME",
      field: "dateTime",
    },
    {
      header: "NAME",
      field: "name",
    },
    {
      header: "ROLE",
      field: "role",
    },
    {
      header: "TOURS",
      field: "tours",
    },
    {
      header: "SCHEDULE",
      field: "schedule",
    },
    {
      header: "LOCATION",
      field: "location",
    },
    {
      field: "clr",
      clr: true,
    },
  ];

  const tableData = [
    {
      sl: 1,
      website: "we2call.com",
      dateTime: (
        <div>
          31/08/2023
          <br />
          14:51:20 PM
        </div>
      ),
      name: (
        <div>
          Srinivas
          <br />
          Hyderabad
        </div>
      ),
      role: "Super Admin",
      tours: "Sports Tours",
      schedule: "31/08/2023",
      location: "Dubai",
      clr: "Select",
    },
    {
      sl: 2,
      website: "we2call.com",
      dateTime: (
        <div>
          31/08/2023
          <br />
          14:51:20 PM
        </div>
      ),
      name: (
        <div>
          Srinivas
          <br />
          Hyderabad
        </div>
      ),
      role: "Super Admin",
      tours: "Sports Tours",
      schedule: "31/08/2023",
      location: "Dubai",
      clr: "Select",
    },
    {
      sl: 3,
      website: "we2call.com",
      dateTime: (
        <div>
          31/08/2023
          <br />
          14:51:20 PM
        </div>
      ),
      name: (
        <div>
          Srinivas
          <br />
          Hyderabad
        </div>
      ),
      role: "Super Admin",
      tours: "Sports Tours",
      schedule: "31/08/2023",
      location: "Dubai",
      clr: "Select",
    },
    {
      sl: 4,
      website: "we2call.com",
      dateTime: (
        <div>
          31/08/2023
          <br />
          14:51:20 PM
        </div>
      ),
      name: (
        <div>
          Srinivas
          <br />
          Hyderabad
        </div>
      ),
      role: "Super Admin",
      tours: "Sports Tours",
      schedule: "31/08/2023",
      location: "Dubai",
      clr: "Select",
    },
    {
      sl: 4,
      website: "we2call.com",
      dateTime: (
        <div>
          31/08/2023
          <br />
          14:51:20 PM
        </div>
      ),
      name: (
        <div>
          Srinivas
          <br />
          Hyderabad
        </div>
      ),
      role: "Super Admin",
      tours: "Sports Tours",
      schedule: "31/08/2023",
      location: "Dubai",
      clr: "Select",
    },
  ];

  const tableDocHeading = [
    {
      header: "S NO",
      field: "sl",
    },
    {
      header: "WEBSITE",
      field: "website",
    },
    {
      header: "DATE & TIME",
      field: "dateTime",
    },
    {
      header: "NAME & ROLE",
      field: "nameRole",
    },
    {
      header: "GUEST NAME",
      field: "guestName",
    },
    {
      header: "GENDER",
      field: "gender",
    },
    {
      header: "TOUR PACK",
      field: "tourPack",
    },
    {
      header: "TOTAL AMOUNT",
      field: "tatalAmount",
    },
    {
      header: "PAID AMOUNT",
      field: "paidAmount",
    },
    {
      field: "clr",
    },
  ];

  const tableDocData = [
    {
      sl: 1,
      website: "we2call.com",
      dateTime: (
        <div>
          31/08/2023
          <br />
          14:51:20 PM
        </div>
      ),
      nameRole: (
        <div>
          Srinivas
          <br />
          Super Admin
          <br />
          Hyderabad
        </div>
      ),
      guestName: (
        <div>
          10 <BsArrowDown />
        </div>
      ),
      gender: "Male",
      tourPack: "jej",
      tatalAmount: "31/08/2023",
      paidAmount: (
        <div>
          10000
          <br />
          <div className="p-2 download-div">
            id Proof
            <MdInsertPhoto className="ms-1 ions-clr" />
            <BsArrowDown className="ms-1 ions-clr" />
          </div>
        </div>
      ),
      clr: (
        <div>
          Confirm
          <div className="p-2 download-div">
            Payment
            <MdInsertPhoto className="ms-1 ions-clr" />
            <BsArrowDown className="ms-1 ions-clr" />
          </div>
        </div>
      ),
    },
    {
      sl: 2,
      website: "we2call.com",
      dateTime: (
        <div>
          31/08/2023
          <br />
          14:51:20 PM
        </div>
      ),
      nameRole: (
        <div>
          Srinivas
          <br />
          Super Admin
          <br />
          Hyderabad
        </div>
      ),
      guestName: (
        <div>
          10 <BsArrowDown />
        </div>
      ),
      gender: "Male",
      tourPack: "jej",
      tatalAmount: "31/08/2023",
      paidAmount: (
        <div>
          10000
          <br />
          <div className="p-2 download-div">
            id Proof
            <MdInsertPhoto className="ms-1 ions-clr" />
            <BsArrowDown className="ms-1 ions-clr" />
          </div>
        </div>
      ),
      clr: (
        <div>
          Confirm
          <div className="p-2 download-div">
            Payment
            <MdInsertPhoto className="ms-1 ions-clr" />
            <BsArrowDown className="ms-1 ions-clr" />
          </div>
        </div>
      ),
    },
    ,
    {
      sl: 3,
      website: "we2call.com",
      dateTime: (
        <div>
          31/08/2023
          <br />
          14:51:20 PM
        </div>
      ),
      nameRole: (
        <div>
          Srinivas
          <br />
          Super Admin
          <br />
          Hyderabad
        </div>
      ),
      guestName: (
        <div>
          10 <BsArrowDown />
        </div>
      ),
      gender: "Male",
      tourPack: "jej",
      tatalAmount: "31/08/2023",
      paidAmount: (
        <div>
          10000
          <br />
          <div className="p-2 download-div">
            id Proof
            <MdInsertPhoto className="ms-1 ions-clr" />
            <BsArrowDown className="ms-1 ions-clr" />
          </div>
        </div>
      ),
      clr: (
        <div>
          Confirm
          <div className="p-2 download-div">
            Payment
            <MdInsertPhoto className="ms-1 ions-clr" />
            <BsArrowDown className="ms-1 ions-clr" />
          </div>
        </div>
      ),
    },
    ,
    {
      sl: 4,
      website: "we2call.com",
      dateTime: (
        <div>
          31/08/2023
          <br />
          14:51:20 PM
        </div>
      ),
      nameRole: (
        <div>
          Srinivas
          <br />
          Super Admin
          <br />
          Hyderabad
        </div>
      ),
      guestName: (
        <div>
          10 <BsArrowDown />
        </div>
      ),
      gender: "Male",
      tourPack: "jej",
      tatalAmount: "31/08/2023",
      paidAmount: (
        <div>
          10000
          <br />
          <div className="p-2 download-div">
            id Proof
            <MdInsertPhoto className="ms-1 ions-clr" />
            <BsArrowDown className="ms-1 ions-clr" />
          </div>
        </div>
      ),
      clr: (
        <div>
          Confirm
          <div className="p-2 download-div">
            Payment
            <MdInsertPhoto className="ms-1 ions-clr" />
            <BsArrowDown className="ms-1 ions-clr" />
          </div>
        </div>
      ),
    },
    ,
    {
      sl: 5,
      website: "we2call.com",
      dateTime: (
        <div>
          31/08/2023
          <br />
          14:51:20 PM
        </div>
      ),
      nameRole: (
        <div>
          Srinivas
          <br />
          Super Admin
          <br />
          Hyderabad
        </div>
      ),
      guestName: (
        <div>
          10 <BsArrowDown />
        </div>
      ),
      gender: "Male",
      tourPack: "jej",
      tatalAmount: "31/08/2023",
      paidAmount: (
        <div>
          10000
          <br />
          <div className="p-2 download-div">
            id Proof
            <MdInsertPhoto className="ms-1 ions-clr" />
            <BsArrowDown className="ms-1 ions-clr" />
          </div>
        </div>
      ),
      clr: (
        <div>
          Confirm
          <div className="p-2 download-div">
            Payment
            <MdInsertPhoto className="ms-1 ions-clr" />
            <BsArrowDown className="ms-1 ions-clr" />
          </div>
        </div>
      ),
    },
  ];

  const ConfirmBookingHeading = [
    {
      header: "S NO",
      field: "sl",
    },
    {
      header: "WEBSITE",
      field: "website",
    },
    {
      header: "DATE & TIME",
      field: "dateTime",
    },
    {
      header: "NAME & ROLE",
      field: "nameRole",
    },
    {
      header: "GUEST NAME",
      field: "guestName",
    },
    {
      header: "GENDER",
      field: "gender",
    },
    {
      header: "TOUR PACK",
      field: "tourPack",
    },
    {
      header: "TOTAL AMOUNT",
      field: "tatalAmount",
    },
    {
      header: "PAID AMOUNT",
      field: "paidAmount",
    },
    {
      field: "clr",
    },
  ];

  const ConfirmBookingData = [
    {
      sl: 1,
      website: "we2call.com",
      dateTime: (
        <div>
          31/08/2023
          <br />
          14:51:20 PM
        </div>
      ),
      nameRole: (
        <div>
          Srinivas
          <br />
          Super Admin
          <br />
          Hyderabad
        </div>
      ),
      guestName: (
        <div>
          10 <BsArrowDown />
        </div>
      ),
      gender: "Male",
      tourPack: "jej",
      tatalAmount: "31/08/2023",
      paidAmount: "10000",
      clr: "Confirm",
    },
    {
      sl: 2,
      website: "we2call.com",
      dateTime: (
        <div>
          31/08/2023
          <br />
          14:51:20 PM
        </div>
      ),
      nameRole: (
        <div>
          Srinivas
          <br />
          Super Admin
          <br />
          Hyderabad
        </div>
      ),
      guestName: (
        <div>
          10 <BsArrowDown />
        </div>
      ),
      gender: "Male",
      tourPack: "jej",
      tatalAmount: "31/08/2023",
      paidAmount: "10000",
      clr: "Confirm",
    },
    ,
    {
      sl: 3,
      website: "we2call.com",
      dateTime: (
        <div>
          31/08/2023
          <br />
          14:51:20 PM
        </div>
      ),
      nameRole: (
        <div>
          Srinivas
          <br />
          Super Admin
          <br />
          Hyderabad
        </div>
      ),
      guestName: (
        <div>
          10 <BsArrowDown />
        </div>
      ),
      gender: "Male",
      tourPack: "jej",
      tatalAmount: "31/08/2023",
      paidAmount: "10000",
      clr: "Confirm",
    },
    ,
    {
      sl: 4,
      website: "we2call.com",
      dateTime: (
        <div>
          31/08/2023
          <br />
          14:51:20 PM
        </div>
      ),
      nameRole: (
        <div>
          Srinivas
          <br />
          Super Admin
          <br />
          Hyderabad
        </div>
      ),
      guestName: (
        <div>
          10 <BsArrowDown />
        </div>
      ),
      gender: "Male",
      tourPack: "jej",
      tatalAmount: "31/08/2023",
      paidAmount: "10000",
      clr: "Confirm",
    },
    ,
    {
      sl: 5,
      website: "we2call.com",
      dateTime: (
        <div>
          31/08/2023
          <br />
          14:51:20 PM
        </div>
      ),
      nameRole: (
        <div>
          Srinivas
          <br />
          Super Admin
          <br />
          Hyderabad
        </div>
      ),
      guestName: (
        <div>
          10 +<BsArrowDown />
        </div>
      ),
      gender: "Male",
      tourPack: "jej",
      tatalAmount: "31/08/2023",
      paidAmount: "10000",
      clr: "Confirm",
    },
  ];

  const handleManageHead = (index) => {
    setActiveManageIndex(index);
  };
  return (
    <div className="add-tours p-3 mt-3">
      <div className="row">
        <div className="d-flex">
          {manageButtons.map((item, index) => {
            return (
              <div
                key={index}
                className={`${
                  activeManageIndex === index
                    ? "active-schedule-head"
                    : "header-schedule"
                }  p-2 me-2`}
                onClick={() => handleManageHead(index)}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <div className="row mt-3">
        {manageDropdown.map((item, index) => {
          return (
            <div className="col" key={index}>
              <div className="font-grey">{item.head}</div>
              <select className="tours-box p-2 medium-font rounded-top text-center w-100">
                {item.options.map((items, i) => {
                  return <option key={i}>{items}</option>;
                })}
              </select>
            </div>
          );
        })}
      </div>
      <div className="mt-3">
        {(activeManageIndex === 0 ||
          activeManageIndex === 1 ||
          activeManageIndex === 2) && (
          <Table columns={tableHeading} data={tableData} />
        )}
        {activeManageIndex === 3 && (
          <DocTable columns={tableDocHeading} data={tableDocData} />
        )}
        {activeManageIndex === 4 && (
          <ConformBookingTable
            columns={ConfirmBookingHeading}
            data={ConfirmBookingData}
          />
        )}
      </div>
    </div>
  );
}

export default ManageTournament;
