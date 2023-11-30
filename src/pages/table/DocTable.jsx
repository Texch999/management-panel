import React from "react";
import { useNavigate } from "react-router-dom";

function DocTable(props) {
  const { data, columns } = props;

  const getColor = (clr) => {
    switch (clr) {
      case "Shedule":
        return "pending-button w-fit-content p-1 px-2";
      case "In-active":
        return "custom-deactive-button w-fit-content p-1 px-2";
      case "Rejected":
        return "custom-deactive-button w-fit-content p-1 px-2";
      case "Pending":
        return "pending-button w-fit-content p-1 px-2";
      case "Select":
        return "select-button w-fit-content p-1 px-2";
      default:
        return " w-fit-content p-1 px-2";
    }
  };
  const navigate = useNavigate();
  const handleClickTable = (item) => {
    {
      item === "role" && navigate("/usertransaction");
    }
  };

  return (
    <div className="sidebar-bg w-100 home-border-radius">
      <table className="tickets-table table table-borderless">
        <thead className="th-color small-font text-center">
          <tr className="small-font th-color text-center">
            {columns.map((column, index) => (
              <th key={index} className="text-center small-font th-color">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="td-color">
          {data.map((item, rowIndex) => (
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
                        onClick={() => handleClickTable(column.field)}
                      >
                        {item[column.field]}
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

export default DocTable;
