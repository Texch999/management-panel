import React, { useState } from "react";
import PackageUpgrade from "./PackageUpgrade";
import TopupHoursDiscount from "./TopupHoursDiscount";
import BulkPackageDiscount from "./BulkPackageDiscount";

function PackageButtons(props) {
  const { selectedPackage, packageInputs, setPackageInputs } = props;
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
      </div>
      {activePackageButtons === 0 && (
        <PackageUpgrade
          selectedPackage={selectedPackage}
          packageInputs={packageInputs}
          setPackageInputs={setPackageInputs}
        />
      )}
      {activePackageButtons === 1 && (
        <TopupHoursDiscount
          selectedPackage={selectedPackage}
          packageInputs={packageInputs}
          setPackageInputs={setPackageInputs}
        />
      )}
      {activePackageButtons === 2 && (
        <BulkPackageDiscount
          packageInputs={packageInputs}
          setPackageInputs={setPackageInputs}
          selectedPackage={selectedPackage}
        />
      )}
    </div>
  );
}

export default PackageButtons;
