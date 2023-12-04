import { useNavigate } from "react-router-dom";
import AddTourPaymentGateway from "../tourBanking/AddTourPaymentGateway"
import { useState } from "react";
import {call} from "../../config/axios";
import { GET_TOUR_PAYMENT_GATEWAY } from "../../config/endpoints";

function TourTable(props) {
  const { data, columns } = props;
  
  const getColor = (clr) => {
    switch (clr) {
      case "Shedule":
        return "pending-button w-fit-content p-1 px-2";
      case "In-active":
        return "custom-deactive-button w-fit-content p-1 px-2";
      case "active":
        return "font-green custom-active-button px-2";
      case "Rejected":
        return "custom-deactive-button w-fit-content p-1 px-2";
      case "Pending":
        return "pending-button w-fit-content p-1 px-2";
      case "Select":
        return "select-button w-fit-content p-1 px-2";
      case "DeSelect":
        return "select-button w-fit-content p-1 px-2";
      default:
        return "w-fit-content p-1 px-2";
    }
  };
  
  return (
    <div className="sidebar-bg w-100 home-border-radius">
      <table className="tickets-table table table-borderless">
        <thead className="th-color small-font text-center">
          <tr className="small-font th-color text-center">
            {columns?.map((column, index) => (
              <th key={index} className="text-center small-font th-color">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="td-color">
          {data?.length > 0 &&
            data?.map((item, rowIndex) => (
              <tr key={rowIndex} className="small-font td-color text-center">
                {columns.map((column, colIndex) => {
                  return (
                    <td
                      key={colIndex}
                      className=" text-center d-felx align-items-center"
                    >
                      <div className="d-flex justify-content-center align-items-center">
                        <div
                          className={
                            column?.clr ? getColor(item[column.field]) : ""
                          }
                        >
                          <td>{item[column.field]}</td>
                        </div>
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TourTable;
