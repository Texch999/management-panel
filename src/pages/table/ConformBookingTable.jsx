import React, { useRef, useState } from "react";
import { MdUpload } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function ConformBookingTable(props) {
  const { data, columns } = props;
  const [selectedDate, setSelectedDate] = useState(null);
  const uploadfileInputRef = useRef(null);
  const handleUploadFileSelect = (e) => {
    const file = e.target.files[0];
    console.log("selected file", file);
  };
  const handleUploadButtonClick = () => {
    uploadfileInputRef.current.click();
  };
  const getColor = (clr) => {
    switch (clr) {
      case "Shedule":
        return "pending-button w-fit-content p-1 px-2";
      case "In-active":
        return "reject-button w-fit-content p-1 px-2";
      case "Rejected":
        return "reject-button w-fit-content p-1 px-2";
      case "Pending":
        return "pending-button w-fit-content p-1 px-2";
      case "Select":
        return "select-button w-fit-content p-1 px-2";
      default:
        return "new-button w-fit-content p-1 px-2";
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
        {data.map((item, rowIndex) => (
          <tbody className="td-color">
            <tr key={rowIndex} className="medium-font td-color text-center">
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
            <tr>
              <td className="p-2 download-div" colspan="10">
                <div className="download-container p-1">
                  Upload Your Documents
                  <MdUpload
                    className="ms-1 ions-clr"
                    onClick={() => handleUploadButtonClick()}
                  />
                </div>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <input
        ref={uploadfileInputRef}
        style={{ display: "none" }}
        onChange={handleUploadFileSelect}
      ></input>
    </div>
  );
}

export default ConformBookingTable;
