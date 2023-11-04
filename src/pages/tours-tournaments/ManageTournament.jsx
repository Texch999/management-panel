import React, { useEffect, useState } from "react";
import Table from "../table/Table";
import DocTable from "../table/DocTable";
import { BsArrowDown } from "react-icons/bs";
import { MdInsertPhoto } from "react-icons/md";
import ConformBookingTable from "../table/ConformBookingTable";
import { call } from "../../config/axios";
import { GET_INTERESTED } from "../../config/endpoints";

function ManageTournament() {
  const [activeManageIndex, setActiveManageIndex] = useState(0);
  const [interestedData, setInterestedData] = useState([]);
  const [selectedOption, setSelectedOption] = useState({});

  const handleOptions = (e) => {
    setSelectedOption({
      ...selectedOption,
      [e.target.name]: e.target.value,
    });
  };

  // console.log(selec/tedOption, "......selectedoptions");

  const fetchData = async () => {
    const payload = {};
    await call(GET_INTERESTED, payload).then((res) =>
      setInterestedData(res?.data?.data)
    );
  };

  // console.log(interestedData);

  useEffect(() => {
    fetchData();
  }, []);

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
      name: "tour_name",
      options: [
        "",
        "1.Cricket Tour",
        "2.Sports Tour",
        "3.Casino Tour",
        "4.Entertainment Tour",
      ],
    },
    {
      head: "Website",
      name: "website",
      options: ["", "www.we2call.com", "www.texch.com", "www.ravanna.com"],
    },
    {
      head: "Location",
      name: "location",
      options: ["", "Hongkong", "Goa", "Srilanka", "Japan", "Thailand"],
    },
    {
      head: "Name",
      name: "username",
      options: ["", "jay", "vinod", "ravi", "babu"],
    },
    {
      head: "Role",
      name: "role",
      options: [
        "",
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
  console.log(selectedOption)
  console.log(interestedData)

  const tableData =
    interestedData?.length > 0 &&
    interestedData
      ?.filter((item) => {
        if(selectedOption?.tour_name===undefined){
          return item
        }else{
          return item?.tour_name === selectedOption?.tour_name;
        }
      })
      .filter((item) => {
        if(selectedOption?.website===undefined){
          return item
        }else{
          return item?.website === selectedOption?.website;
        }
      })
      .filter((item) => {
        if(selectedOption?.location===undefined){
          return item
        }else{
          return item?.location === selectedOption?.location;
        }
      })
      .filter((item) => {
        if(selectedOption?.username===undefined){
          return item
        }else{
          return item?.user_name === selectedOption?.username;
        }
      })
      .filter((item) => {
        if(selectedOption?.role===undefined){
          return item
        }else{
          return item?.role === selectedOption?.role;
        }
      })
      .map((item, index) => {
        return {
          sl: index,
          website: item.website,
          dateTime: item.date_and_time,
          name: item.user_name,
          role: item.role,
          tours: item.tour_name,
          schedule: item.schedule,
          location: item.location,
          clr: "Select",
        };
      });

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
              <select
                className="tours-box p-2 medium-font rounded-top text-center w-100"
                name={item.name}
                onChange={(e) => handleOptions(e)}
              >
                {item.options.map((items, i) => {
                  return (
                    <option key={i} value={items}>
                      {items}
                    </option>
                  );
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
          <div>
            <Table columns={tableHeading} data={tableData} />
            {activeManageIndex === 2 && (
              <div>
                <textarea
                  className="manage-text-area p-2"
                  placeholder="Message Type Here"
                ></textarea>
                <div className="w-100 d-flex justify-content-end">
                  <button className="submit p-2">Submit</button>
                </div>
              </div>
            )}
          </div>
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
