import { useEffect, useState } from "react";
import Table from "../table/Table";
import { AiOutlineEye } from "react-icons/ai";
import PackageViewPoup from "../Popups/PackageViewPoup";
import { GET_ADMIN_PACKAGE_REQUEST } from "../../config/endpoints";
import { call } from "../../config/axios";

function Tickets() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [requestedPackages, setRequestedPackages] = useState([]);
  const [popupData, setPopupData] = useState([]);

  const handleActiveIndex = (index) => {
    setActiveIndex(index);
  };
  const cols = [
    {
      header: "DATE & TIME",
      field: "dateAndTime",
    },
    {
      header: "Name & ROLE",
      field: "nameAndRole",
    },
    {
      header: "TRX ID",
      field: "trxid",
    },
    {
      header: "PACKAGE TRX",
      field: "package",
    },
    {
      header: "CHIPS",
      field: "chips",
    },
    {
      header: "DISCOUNT",
      field: "discount",
    },
    {
      header: "PAY AMOUNT",
      field: "pkgamnt",
    },
    {
      header: "VIEW",
      field: "icon",
    },
    {
      header: "STATUS",
      field: "status",
      clr: true,
    },
  ];

  // const cols1 = [
  //   {
  //     header: "DATE & TIME",
  //     field: "dateAndTime",
  //   },
  //   {
  //     header: "Name & ROLE",
  //     field: "nameAndRole",
  //   },
  //   {
  //     header: "TRX ID",
  //     field: "trxid",
  //   },
  //   {
  //     header: "PACKAGE TRX",
  //     field: "package",
  //   },
  //   {
  //     header: "CHIPS",
  //     field: "chips",
  //   },
  //   {
  //     header: "DISCOUNT",
  //     field: "discount",
  //   },
  //   {
  //     header: "PAY AMOUNT",
  //     field: "pkgamnt",
  //   },
  //   {
  //     header: "VIEW",
  //     field: "icon",
  //   },
  //   {
  //     header: "STATUS",
  //     field: "status",
  //     clr: true,
  //   },
  // ];

  // const cols2 = [
  //   {
  //     header: "DATE & TIME",
  //     field: "dateAndTime",
  //   },
  //   {
  //     header: "Name & ROLE",
  //     field: "nameAndRole",
  //   },
  //   {
  //     header: "TRX ID",
  //     field: "trxid",
  //   },
  //   {
  //     header: "PACKAGE TRX",
  //     field: "package",
  //   },
  //   {
  //     header: "CHIPS",
  //     field: "chips",
  //   },
  //   {
  //     header: "DISCOUNT",
  //     field: "discount",
  //   },
  //   {
  //     header: "PAY AMOUNT",
  //     field: "pkgamnt",
  //   },
  //   {
  //     header: "VIEW",
  //     field: "icon",
  //   },
  //   {
  //     header: "STATUS",
  //     field: "status",
  //     clr: true,
  //   },
  // ];

  // const cols3 = [
  //   {
  //     header: "DATE & TIME",
  //     field: "dateAndTime",
  //   },
  //   {
  //     header: "Name & ROLE",
  //     field: "nameAndRole",
  //   },
  //   {
  //     header: "TRX ID",
  //     field: "trxid",
  //   },
  //   {
  //     header: "PACKAGE TRX",
  //     field: "package",
  //   },
  //   {
  //     header: "CHIPS",
  //     field: "chips",
  //   },
  //   {
  //     header: "DISCOUNT",
  //     field: "discount",
  //   },
  //   {
  //     header: "PAY AMOUNT",
  //     field: "pkgamnt",
  //   },
  //   {
  //     header: "VIEW",
  //     field: "icon",
  //   },
  //   {
  //     header: "STATUS",
  //     field: "status",
  //     clr: true,
  //   },
  // ];

  const getRequestedPackages = async () => {
    const payload = {
      register_id: "company",
    };
    await call(GET_ADMIN_PACKAGE_REQUEST, payload)
      .then((res) => {
        setRequestedPackages(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getRequestedPackages();
  }, []);

  const PACKAGE_TICKET_BUTTONS = [
    {
      buttonName: "All",
    },
    {
      buttonName: "PACKAGE TICKETS",
    },
    {
      buttonName: "CASINO/SPORTS TICKETS",
    },
    {
      buttonName: "PAYMENT TICKETS",
    },
  ];

  const modifiedTicketDetails =
    requestedPackages?.length > 0 &&
    requestedPackages?.map((item) => ({
      nameAndRole: "company",
      dateAndTime: (
        <div>
          {item?.created_date} <br /> <span>{item?.created_time}</span>{" "}
        </div>
      ),
      trxid: item?.transaction_id,
      package: item?.summary.final_package_cost,
      pkgamnt: item?.summary.total_packages_cost,
      status:
        item?.status === "approve" ? (
          <div className="rounded p-1 approved-btn">Completed</div>
        ) : item?.status === "Reject" ? (
          <div className="rounded p-1 rejected-btn">Reject</div>
        ) : (
          <div className="rounded p-1 px-2 pending-btn">Pending</div>
        ),
      icon: (
        <AiOutlineEye
          className="eye-icon-size"
          onClick={() => handlePackageUpgrade(item)}
        />
      )
    }));

  // const modifiedTicketDetails1 =
  //   requestedPackages?.length > 0 &&
  //   requestedPackages.map((item) => ({
  //     ...item,
  //     nameAndRole: (
  //       <div>
  //         {item?.name} <br /> <span className="role-color">{item?.role}</span>{" "}
  //       </div>
  //     ),
  //     dateAndTime: (
  //       <div>
  //         {item?.created_date} <br /> <span>{item?.created_time}</span>{" "}
  //       </div>
  //     ),
  //     trxid: item?.transaction_id,
  //     package: item?.summary.final_package_cost,
  //     pkgamnt: item?.summary.total_packages_cost,
  //     icon: (
  //       <AiOutlineEye
  //         className="eye-icon-size"
  //         onClick={() => handlePackageUpgrade(item)}
  //       />
  //     ),
  //   }));

  // const modifiedTicketDetails2 = TICKET_DETAILS.map((item) => ({
  //   nameAndRole: (
  //     <div>
  //       {item?.name} <br /> <span className="role-color">{item?.role}</span>{" "}
  //     </div>
  //   ),
  //   dateAndTime: (
  //     <div>
  //       {item?.date} <br /> <span>{item?.time}</span>{" "}
  //     </div>
  //   ),
  // }));

  // const modifiedTicketDetails3 =
  //   requestedPackages?.length > 0 &&
  //   requestedPackages.map((item) => ({
  //     ...item,
  //     nameAndRole: (
  //       <div>
  //         {item?.name} <br /> <span className="role-color">{item?.role}</span>{" "}
  //       </div>
  //     ),
  //     dateAndTime: (
  //       <div>
  //         {item?.created_date} <br /> <span>{item?.created_time}</span>{" "}
  //       </div>
  //     ),
  //     trxid: item?.transaction_id,
  //     package: item?.summary.final_package_cost,
  //     pkgamnt: item?.summary.total_packages_cost,
  //     icon: (
  //       <AiOutlineEye
  //         className="eye-icon-size"
  //         onClick={() => handlePackageUpgrade(item)}
  //       />
  //     ),
  //   }));

  const [showPackageUpgrade, setShowPackageUpgrade] = useState(false);
  const handlePackageUpgrade = (item) => {
    setPopupData(item);
    setShowPackageUpgrade(true);
  };
  return (
    <div className="p-4 w-100">
      <div>
        <h6 className="h6 font-grey">Tickets</h6>
      </div>
      <div className="sidebar-bg rounded">
        <div className="d-flex w-75 align-items-center justify-content-between">
          {PACKAGE_TICKET_BUTTONS?.map((item, index) => (
            <div
              key={index}
              onClick={() => handleActiveIndex(index)}
              className={`medium-font accounts-box font-grey px-3 py-2 rounded text-center m-3 ${
                activeIndex === index ? "active" : ""
              }`}
            >
              {item.buttonName}
            </div>
          ))}
        </div>
        {/* {activeIndex === 0 && (
          <Table columns={cols} data={modifiedTicketDetails} />
        )} */}
        {activeIndex === 1 && (
          <Table columns={cols} data={modifiedTicketDetails} />
        )}
        {/* {activeIndex === 2 && (
          <Table columns={cols2} data={modifiedTicketDetails2} />
        )}
        {activeIndex === 3 && (
          <Table columns={cols3} data={modifiedTicketDetails3} />
        )} */}
      </div>
      <PackageViewPoup
        requestedPackages={popupData}
        showPackageUpgrade={showPackageUpgrade}
        setShowPackageUpgrade={setShowPackageUpgrade}
      />
    </div>
  );
}

export default Tickets;
