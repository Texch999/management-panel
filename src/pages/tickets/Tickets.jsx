import { useState } from "react";
import Table from "../table/Table";
import { AiOutlineEye } from "react-icons/ai";
import PackageViewPoup from "../Popups/PackageViewPoup";

function Tickets() {
  const TICKET_DETAILS = [
    {
      date: "01/08/2023 ",
      time: "11:46:00 AM",
      name: "Srinivas",
      role: "Director",
      trxid: "trx-id-2023062707",
      number: "4602133078",
      package: "Upgrade Package",
      pkgamnt: "- 20,000 (Monthly)",
      amount: "200000000",
      status: "Approved",
      icon: (
        <AiOutlineEye
          className="eye-icon-size"
          onClick={() => handlePackageUpgrade()}
        />
      ),
    },
    {
      date: "01/08/2023 ",
      time: "11:46:00 AM",
      name: "Srinivas",
      role: "Director",
      trxid: "trx-id-2023062707",
      number: "4602133078",
      package: "Upgrade Package",
      pkgamnt: "- 20,000 (Monthly)",
      amount: "200000000",
      status: "Pending",
      icon: <AiOutlineEye className="eye-icon-size" />,
    },
    {
      date: "01/08/2023 ",
      time: "11:46:00 AM",
      name: "Srinivas",
      role: "Director",
      trxid: "trx-id-2023062707",
      number: "4602133078",
      package: "Upgrade Package",
      pkgamnt: "- 20,000 (Monthly)",
      amount: "200000000",
      status: "Rejected",
      icon: <AiOutlineEye className="eye-icon-size" />,
    },
    {
      date: "01/08/2023 ",
      time: "11:46:00 AM",
      name: "Srinivas",
      role: "Director",
      trxid: "trx-id-2023062707",
      number: "4602133078",
      package: "Upgrade Package",
      pkgamnt: "- 20,000 (Monthly)",
      amount: "200000000",
      status: "New",
      icon: <AiOutlineEye className="eye-icon-size" />,
    },
  ];

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
      header: "PAY AMOUNT",
      field: "pkgamnt",
    },
    {
      header: "STATUS",
      field: "icon",
    },
    {
      header: "",
      field: "status",
      clr: true,
    },
  ];

  const modifiedTicketDetails = TICKET_DETAILS.map((item) => ({
    ...item,
    nameAndRole: (
      <div>
        {item?.name} <br /> <span className="role-color">{item?.role}</span>{" "}
      </div>
    ),
    dateAndTime: (
      <div>
        {item?.date} <br /> <span>{item?.time}</span>{" "}
      </div>
    ),
  }));
  const [showPackageUpgrade, setShowPackageUpgrade] = useState(false);
  const handlePackageUpgrade = () => {
    setShowPackageUpgrade(true);
  };
  return (
    <div className="p-4 w-100">
      <h6 className="h6 font-grey">Tickets</h6>
      <div className="sidebar-bg rounded">
        <div className="medium-font font-weight-bold px-2 p-2 m-1 th-color">
          Tickets
        </div>
        <Table columns={cols} data={modifiedTicketDetails} />
      </div>
      <PackageViewPoup
        showPackageUpgrade={showPackageUpgrade}
        setShowPackageUpgrade={setShowPackageUpgrade}
      />
    </div>
  );
}

export default Tickets;
