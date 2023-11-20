import React, { useEffect, useState } from "react";
import Table from "../table/Table";
import DocTable from "../table/DocTable";
import { BsArrowDown } from "react-icons/bs";
import { MdInsertPhoto } from "react-icons/md";
import ConformBookingTable from "../table/ConformBookingTable";
import { call } from "../../config/axios";
import { GET_INTERESTED } from "../../config/endpoints";
import { UPDATE_INTERESTED } from "../../config/endpoints";
import { BOOKNOW_FOR_INTERESTED } from "../../config/endpoints";

function ManageTournament() {
  const [activeManageIndex, setActiveManageIndex] = useState(0);
  const [interestedMembers, setInterestedMembers] = useState([]);
  const [status, setStatus] = useState(false);
  const [addingTourDetails, setAddingTourDetails] = useState("")
  const [selectedFilter, setSelectedFilter] = useState({
    tour_name: "All",
    website: "All",
    role: "All",
    user_name: "All",
    location: "All",
  });

  const gettingInterestedMembers = async () => {
    const payload = {};
    await call(GET_INTERESTED, payload)
      .then((res) => {
        setInterestedMembers(res?.data?.data);
      })
      .catch((error) => console.log(error));
  };

  const tourdetailsSubmitButton = async(tableData2)=>{
    const interestedMembersIds = tableData2.map((i)=>{return i.id})
    const payload = {
      selectedTeam:interestedMembersIds,
      tour_details:addingTourDetails
    }
    await call(BOOKNOW_FOR_INTERESTED, payload)
            .then((res)=>console.log(res))
            .catch((error)=>console.log(error))
  }

  useEffect(() => {
    gettingInterestedMembers();
  }, [status]);

  const handleSelectButton = async (interested_id) => {
    const payload = {
      interested_id,
      select: true,
    };
    await call(UPDATE_INTERESTED, payload)
      .then((res) => {
        setStatus((prev)=>!prev)
      })
      .catch((error) => console.log(error));
  };
  const handleDeSelectButton = async (interested_id) => {
    const payload = {
      interested_id,
      select: false,
    };
    await call(UPDATE_INTERESTED, payload)
      .then((res) => {
        setStatus((prev)=>!prev)
      })
      .catch((error) => console.log(error));
  };
  
  const handleChange = (e) => {
    setSelectedFilter({
      ...selectedFilter,
      [e.target.name]: e.target.value,
    });
  };

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
        "All",
        "1.Take Part in Our Tour",
        "2.Cricket Tour",
        "3.Sports Tour",
        "4.Casino Tour",
        "5.Entertainment Tour",
      ],
    },
    {
      head: "Location",
      name: "location",
      options: ["All", "India", "Srilanka", "Bangladesh", "Dubai"],
    },
    {
      head: "Website",
      name: "website",
      options: [
        "All",
        "www.we2call.com",
        "www.texchange.com",
        "www.raavana.com",
      ],
    },
    {
      head: "Role",
      name: "role",
      options: [
        "All",
        "Director",
        "super-admin",
        "Sub Admin",
        "admin",
        "Super Master",
        "Master",
        "Agent",
      ],
    },
    {
      head: "Name",
      name: "user_name",
      options: ["All", "jay", "vinod", "ravi", "babu"],
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
      header: "TOUR TITLE",
      field: "tour_title",
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
      header: "TOUR NAME",
      field: "tour_name",
    },
    {
      header: "SCHEDULE_START",
      field: "schedule_start",
    },
    {
      header: "LOCATION",
      field: "location",
    },
    {
      field: "cl",
      clr: true,
    },
  ];

  const tableData =
    interestedMembers && interestedMembers.length > 0
      ? interestedMembers
          .filter((item) => {
            if (selectedFilter?.tour_name === "All") {
              return item;
            } else {
              return item.tour_name === selectedFilter.tour_name;
            }
          })
          .filter((item)=>{
            if (selectedFilter?.location === "All"){
              return item;
            }else {
              return item.location === selectedFilter.location;
            }
          })
          .filter((item) => {
            if (selectedFilter?.website === "All") {
              return item;
            } else {
              return item.website === selectedFilter.website;
            }
          })
          .filter((item) => {
            if (selectedFilter?.role === "All") {
              return item;
            } else {
              return item.role === selectedFilter.role;
            }
          })
          .map((item, index) => {
            return {
              id: item.interested_id,
              sl: index + 1,
              website: item.website,
              tour_title: item.tour_title,
              name: item.user_name,
              role: item.role,
              tour_name: item.tour_name,
              schedule_start: item.schedule_start,
              schedule_end: item.schedule_end,
              location: item.location,
              cl:
                item.selected === false ? (
                  <button
                    className="select-button"
                    name="select"
                    value={item.selected}
                    onClick={() => handleSelectButton(item.interested_id)}
                  >
                    Select
                  </button>
                ) : (
                  <button
                    disabled
                    className="select-button btn-color2"
                  >
                    Selected
                  </button>
                ),
            };
          })
      : [];
  const tableData2 =
    interestedMembers && interestedMembers.length > 0
      ? interestedMembers
          .filter((item) => {
            return item.selected === true;
          })
          .filter((item) => {
            if (selectedFilter?.tour_name === "All") {
              return item;
            } else {
              return item.tour_name === selectedFilter.tour_name;
            }
          })
          .filter((item)=>{
            if (selectedFilter?.location === "All"){
              return item;
            }else {
              return item.location === selectedFilter.location;
            }
          })
          .filter((item) => {
            if (selectedFilter?.website === "All") {
              return item;
            } else {
              return item.website === selectedFilter.website;
            }
          })
          .filter((item) => {
            if (selectedFilter?.role === "All") {
              return item;
            } else {
              return item.role === selectedFilter.role;
            }
          })
          .map((item, index) => {
            return {
              id: item.interested_id,
              sl: index + 1,
              website: item.website,
              tour_title: item.tour_title,
              name: item.user_name,
              role: item.role,
              tour_name: item.tour_name,
              schedule_start: item.schedule_start,
              schedule_end: item.schedule_end,
              location: item.location,
              cl:
                item.selected === true && (
                  <button
                    className="select-button btn-color"
                    name="deselect"
                    value={item.selected}
                    onClick={() => handleDeSelectButton(item.interested_id)}
                  >
                    De-select
                  </button>
                )
            };
          })
      : [];
  // console.log(tableData2,'.....tabledata2')
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
                onChange={(e) => handleChange(e)}
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
        {activeManageIndex === 0 && (
          <div>
            <Table columns={tableHeading} data={tableData} />
          </div>
        )}
        {(activeManageIndex === 1 || activeManageIndex === 2) && (
          <div>
            <Table columns={tableHeading} data={tableData2} />
          </div>
        )}
        {activeManageIndex === 2 && (
          <div>
            <textarea
              className="tours-box w-100 h-100px"
              placeholder="Please enter Tour Details"
              name="tourdetails"
              value={addingTourDetails}
              onChange={(e)=>{setAddingTourDetails(e.target.value)}}
            ></textarea>
            <button className="select-button button-position"
                    onClick={()=>{tourdetailsSubmitButton(tableData2)}}
            >Submit</button>
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
