import React, { useState } from "react";
import { Button } from "react-bootstrap";
import CreateBroadCast from "./CreateBroadCast";
import TextMessage from "./TextMessage";
import PostersAds from "./PostersAds";

function NotificationTextMsg() {
  const headingList = [
    "Create New Broadcast",
    "Notification and Promotion Text Message",
    "Posters & Ads",
  ];
  const [activeReport, setActiveReport] = useState("");
  const handleReport = (report) => {
    setActiveReport(report);
  };
  return (
    <div className="p-4 w-100">
      <div className="sidebar-bg rounded">
        <div className=" d-flex justify-content-around">
          {headingList.map((report, index) => (
            <Button
              key={index}
              className={`me-2 admin-reports-button ${
                report === activeReport
                  ? "active text-white col-md-auto medium-font justify-content-between p-2 px-4 m-1"
                  : "deactive-button col-md-auto medium-font justify-content-between p-2 px-4 m-1"
              }`}
              onClick={() => handleReport(report)}
            >
              {report}
            </Button>
          ))}
        </div>
        <h1>Sangram</h1>
        {activeReport === 0 && <CreateBroadCast />}
        {activeReport === 1 && <TextMessage />}
        {activeReport === 2 && <PostersAds />}
      </div>
    </div>
  );
}

export default NotificationTextMsg;
