import { useEffect, useState } from "react";
import Table from "../table/Table";
import { AiOutlineEye } from "react-icons/ai";
import PackageViewPoup from "../Popups/PackageViewPoup";
import {
  GET_ADMIN_PACKAGE_REQUEST,
  PACKAGE_APPROVE_REJECT,
  BULK_PACKAGE_APPROVE_REJECT,
} from "../../config/endpoints";
import { call } from "../../config/axios";

function Tickets() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [requestedPackages, setRequestedPackages] = useState([]);
  const [popupData, setPopupData] = useState([]);
  const [transactionData, setTransactionData] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);

  const handleActiveIndex = (index) => {
    setActiveIndex(index);
  };
  const cols = [
    {
      header: "DATE & TIME",
      field: "dateAndTime",
    },
    // {
    //   header: "Name & ROLE",
    //   field: "nameAndRole",
    // },
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
      header: "STATUS",
      field: "status",
      clr: true,
    },
  ];

  const cols1 = [
    {
      header: "DATE",
      field: "date",
    },
    {
      header: "TIME",
      field: "time",
    },
    // {
    //   header: "Name & ROLE",
    //   field: "nameAndRole",
    // },
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

  const cols2 = [
    {
      header: "DATE & TIME",
      field: "dateAndTime",
    },
    // {
    //   header: "Name & ROLE",
    //   field: "nameAndRole",
    // },
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

  const cols3 = [
    {
      header: "DATE & TIME",
      field: "dateAndTime",
    },
    // {
    //   header: "Name & ROLE",
    //   field: "nameAndRole",
    // },
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

  const handleSuccessfullPopup = async (
    transaction_id,
    type,
    status,
    reason
  ) => {
    const url = type ? PACKAGE_APPROVE_REJECT : BULK_PACKAGE_APPROVE_REJECT;
    setIsProcessing(true);
    await call(url, {
      register_id: "company",
      transaction_id,
      status,
      reason,
      company_id: "company_id",
    })
      .then((res) => {
        if (res.status === 200) {
          setIsProcessing(false);
          setTimeout(() => {
            setIsProcessing(false);
            setShowPackageUpgrade(false);
          }, 2000);
        }
      })
      .catch((err) => {
        setIsProcessing(false);
        console.log(err);
      });
  };

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
      nameAndRole: " ",
      dateAndTime: (
        <div>
          {item?.created_date} <br /> <span>{item?.created_time}</span>{" "}
        </div>
      ),
      trxid: item?.transaction_id,
      package: item?.summary.final_package_cost,
      pkgamnt: item?.summary.total_packages_cost,
      status:
        item?.status === "Approved" ? (
          <div className="rounded p-1 approved-btn">Approved</div>
        ) : item?.status === "Reject" ? (
          <div className="rounded p-1 rejected-btn">Reject</div>
        ) : (
          <div className="rounded p-1 px-2 pending-btn">Pending</div>
        ),
    }));

  const modifiedTicketDetails1 =
    requestedPackages?.length > 0 &&
    requestedPackages.map((item) => ({
      ...item,
      nameAndRole: (
        <div>
          {item?.name} <br /> <span className="role-color">{item?.role}</span>{" "}
        </div>
      ),
      date: `${item?.created_date}`,

      time: `${item?.created_time}`,

      trxid: item?.transaction_id,
      package: item?.summary.final_package_cost,
      pkgamnt: item?.summary.total_packages_cost,
      status:
        item?.status === "Approved" ? (
          <div className="rounded p-1 approved-btn">Approved</div>
        ) : item?.status === "Reject" ? (
          <div className="rounded p-1 rejected-btn">Reject</div>
        ) : (
          <div className="rounded p-1 px-2 pending-btn">Pending</div>
        ),
      icon: (
        <AiOutlineEye className="" onClick={() => handlePackageUpgrade(item)} />
      ),
    }));

  const modifiedTicketDetails2 = requestedPackages?.map((item) => ({
    nameAndRole: (
      <div>
        {item?.name} <br /> <span className="role-color">{item?.role}</span>{" "}
      </div>
    ),
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
    ),
  }));

  const modifiedTicketDetails3 =
    requestedPackages?.length > 0 &&
    requestedPackages.map((item) => ({
      nameAndRole: (
        <div>
          {item?.name} <br /> <span className="role-color">{item?.role}</span>{" "}
        </div>
      ),
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
        <AiOutlineEye className="" onClick={() => handlePackageUpgrade(item)} />
      ),
    }));

  const [showPackageUpgrade, setShowPackageUpgrade] = useState(false);
  const handlePackageUpgrade = (item) => {
    setPopupData(item);
    setTransactionData(item);
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
          <Table columns={cols1} data={modifiedTicketDetails1} />
        )}
        {activeIndex === 2 && (
          <Table columns={cols2} data={modifiedTicketDetails2} />
        )}
        {activeIndex === 3 && (
          <Table columns={cols3} data={modifiedTicketDetails3} />
        )}
      </div>
      <PackageViewPoup
        requestedPackages={popupData}
        showPackageUpgrade={showPackageUpgrade}
        transactionData={transactionData}
        isProcessing={isProcessing}
        handleSuccessfullPopup={handleSuccessfullPopup}
        setShowPackageUpgrade={setShowPackageUpgrade}
      />
    </div>
  );
}

export default Tickets;
