import React, { useState } from "react";
import PackageUpgrade from "./PackageUpgrade";
import TopupHoursDiscount from "./TopupHoursDiscount";
import BulkPackageDiscount from "./BulkPackageDiscount";

function PackageButtons() {
  const [activePackageButtons, setActivePackageButtons] = useState(0);
  const handlePackageOpen = (index) => {
    setActivePackageButtons(index);
  };
  const PACKAGE_BUTTONS = [
    {
      buttonName: "Packages/Upgrade Discount",
    },
    {
      buttonName: "Topup Hours & Discounts",
    },
    {
      buttonName: "Bulk Packages & Discount",
    },
  ];
  return (
    <div>
      <div className="row w-100 mt-3">
        {PACKAGE_BUTTONS?.map((item, index) => (
          <div
            className="col-3"
            key={index}
            onClick={() => handlePackageOpen(index)}
          >
            <div
              className={`medium-font font-grey p-3 rounded-top text-center ${
                activePackageButtons === index
                  ? "bluecolor-text package-bg"
                  : ""
              }`}
            >
              {item.buttonName}
            </div>
          </div>
        ))}
        <div className="col-3 d-flex align-items-center justify-content-end">
          <select className="w-75 medium-font font-grey p-2 package-bg rounded outline-none">
            <option>ALL</option>
            <option>Texch</option>
            <option>We2Call</option>
            <option>Raavana</option>
          </select>
        </div>
      </div>
      {activePackageButtons === 0 && <PackageUpgrade />}
      {activePackageButtons === 1 && <TopupHoursDiscount />}
      {activePackageButtons === 2 && <BulkPackageDiscount />}
    </div>
  );
}

export default PackageButtons;
