import React, { useEffect, useState } from "react";
import PackageUpgrade from "./PackageUpgrade";
import TopupHoursDiscount from "./TopupHoursDiscount";
import BulkPackageDiscount from "./BulkPackageDiscount";
import { GET_ALL_WEBSITES } from "../../config/endpoints";
import { call } from "../../config/axios";

function PackageButtons(props) {
  const { selectedPackage, packageInputs, setPackageInputs } = props;
  const [activePackageButtons, setActivePackageButtons] = useState(0);
  // const [websiteNames, setwebsiteNames] = useState([]);

  const handlePackageOpen = (index) => {
    setActivePackageButtons(index);
  };

  // const getwebsiteNames = async () => {
  //   const payload = {
  //     register_id: "reg-20230710182031623",
  //   };
  //   await call(GET_ALL_WEBSITES, payload)
  //     .then((res) => {
  //       setwebsiteNames(res?.data?.data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   getwebsiteNames();
  // }, []);
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
        {/* <div className="col-3 d-flex align-items-center justify-content-end">
          <select
            name="website_name"
            className="w-75 medium-font font-grey p-2 package-bg rounded outline-none"
          >
            <option value="select">select..</option>
            <option value="All">All</option>
            {websiteNames.map((obj) => (
              <option value={obj.web_url}>{obj.web_url}</option>
            ))}
          </select>
        </div> */}
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
