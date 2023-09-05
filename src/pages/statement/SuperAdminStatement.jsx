import { useState } from "react";
import SuperAdminTable from "./SuperAdminTable";
import SuperAdminUsersTable from "./SuperAdminUsersTable";
import UsersBetHistory from "./UsersBetHistory";

function SuperAdminStatement() {
  const [superAdminButtons, setSuperAdminButtons] = useState(0);
  const handleSuperAdminsButtons = (index) => {
    setSuperAdminButtons(index);
  };
  const SUPER_ADMIN_BUTTONS = [
    {
      btnName: "Admins",
    },
    {
      btnName: "Users",
    },
    {
      btnName: "Users Bet Hisory",
    },
  ];
  return (
    <div>
      <div className="package-bg rounded">
        <div className="row p-3">
          <div className="col d-flex align-items-center">
            <h6 className="h6 mb-0 font-grey">View Downline Srinivas SA</h6>
          </div>
          <div className="col-8">
            <div className="row">
              {SUPER_ADMIN_BUTTONS?.map((item, index) => (
                <div
                  className="col"
                  key={index}
                  onClick={() => handleSuperAdminsButtons(index)}
                >
                  <div
                    className={`package-btn-bg medium-font font-white rounded p-2 text-center ${
                      superAdminButtons === index ? "blue-btn" : ""
                    }`}
                  >
                    {item.btnName}
                  </div>
                </div>
              ))}
              <div className="col">
                <select className="w-100 medium-font font-grey p-2 package-bg rounded outline-none">
                  <option>ALL</option>
                  <option>Texch</option>
                  <option>We2Call</option>
                  <option>Raavana</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div>
          {superAdminButtons === 0 && <SuperAdminTable />}
          {superAdminButtons === 1 && <SuperAdminUsersTable />}
          {superAdminButtons === 2 && <UsersBetHistory />}
        </div>
      </div>
    </div>
  );
}

export default SuperAdminStatement;
