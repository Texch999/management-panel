import React, { useRef } from "react";
import { AiFillEye } from "react-icons/ai";
import { BiSolidCloudUpload } from "react-icons/bi";
import Table from "./Table";

function Tickets() {
  const SETTELMENT_DETAILS = [
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
    },
  ];

  
  const cols = [
    {
      header: "DATE & TIME",
      field: "date",
    },
    {
      header: "Name & ROLE",
      field: "name",
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
      field: "",
    },
    {
      header: "",
      field: "status",
    },
  ];

  return (
    <div className="p-4 w-100">
      <h5 className="th-color">Tickets</h5>
      {/* <div className="sidebar-bg w-100 home-border-radius">
        <div className=" large-font px-2 p-1 m-1 th-color">Tickets</div>
        <table className="tickets-table table table-borderless">
          <thead className="th-color">
            <tr className="medium-font th-color">
              <th scope="col" className="text-center th-color">
                DATE & TIME
              </th>
              <th scope="col" className="text-center th-color">
                NAME & ROLE
              </th>
              <th scope="col" className="text-center">
                TRX ID
              </th>
              <th scope="col" className="text-center">
                PACKAGE TAX
              </th>
              <th scope="col" className="text-center">
                PAY AMOUNT
              </th>
              <th scope="col" className="text-center">
                STATUS
              </th>
              <th scope="col" className="text-center"></th>
            </tr>
          </thead>
          {SETTELMENT_DETAILS.map((item, index) => (
            <tbody key={index} className="td-color">
              <tr className="medium-font td-color ">
                <td className="text-center">
                  <div> {item.date}</div>
                  <div>{item.time}</div>
                </td>
                <td className="text-center">
                  <div> {item.name}</div>
                  <div className="role-color">{item.role}</div>
                </td>
                <td className="text-center">
                  <div> {item.trxid}</div>
                  <div>{item.number}</div>
                </td>
                <td className="text-center">
                  <div> {item.package}</div>
                  <div>{item.pkgamnt}</div>
                </td>
                <td className="text-center">{item.amount}</td>

                <td className="text-center">
                  <AiFillEye className="custom-icon" />
                </td>
                <td className="text-center">
                  <button
                    className={`${
                      item.status === "Rejected"
                        ? "reject-button px-2"
                        : item.status === "Pending"
                        ? "pending-button px-2"
                        : "new-button px-2"
                    }`}
                  >
                    {item.status}
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
          <tfoot>
            <tr>
              <th colSpan={2} className="text-center small-font fw-lighter">
                showing entries from 1-50
              </th>
              <th colSpan={1}></th>
              <th colSpan={4} className="text-center medium-font">
                <button className="pegina-btn-clr p-2 m-1">Previous</button>
                <button className="pegina-btn-clr p-2 m-1">1</button>
                <button className="pegina-btn-clr p-2 m-1">2</button>
                <button className="pegina-btn-clr p-2 m-1">3</button>
                <button className="pegina-btn-clr p-2 m-1">4</button>
                <button className="pegina-btn-clr p-2 m-1">Next</button>
              </th>
            </tr>
          </tfoot>
        </table>
      </div> */}
      
      <Table columns={cols} data={SETTELMENT_DETAILS} />
    </div>
  );
}

export default Tickets;
