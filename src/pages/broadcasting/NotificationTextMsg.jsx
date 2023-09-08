import React, { useState } from "react";
import { Button } from "react-bootstrap";
import CreateBroadCast from "./CreateBroadCast";
import TextMessage from "./TextMessage";
import PostersAds from "./PostersAds";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function NotificationTextMsg() {
  const headingList = [
    "Notification and Promotion Text Message",
    "Posters & Ads",
  ];
  const [activeReport, setActiveReport] = useState("Posters & Ads");
  const handleReport = (report) => {
    setActiveReport(report);
  };
  const navigate = useNavigate();
  return (
    <div className="p-4 w-100">
      <div className="sidebar-bg rounded">
        <div className="button-bg w-100">
          <div className=" d-flex justify-content-around  align-items-center w-75">
            <div className="d-flex justify-content-start">
              <MdOutlineArrowBackIosNew
                className="upload-icon me-3"
                onClick={() => navigate("/broadcasting")}
              />
              <h6 className="clr-white ms-3">Create New Broadcast</h6>
            </div>

            {headingList.map((report, index) => (
              <div
                key={index}
                className={`me-2 ${
                  report === activeReport
                    ? "active-button  justify-content-between p-2 px-4 rounded-top"
                    : "deactive-msg-button justify-content-between p-2 px-4 rounded-top"
                }`}
                onClick={() => handleReport(report)}
              >
                {report}
              </div>
            ))}
          </div>
        </div>

        {activeReport === "Notification and Promotion Text Message" && (
          <TextMessage />
        )}
        {activeReport === "Posters & Ads" && <PostersAds />}
      </div>
    </div>
  );
}

export default NotificationTextMsg;
