import React, { useEffect, useState } from "react";
import { GET_ALL_PACKAGES } from "../../config/endpoints";
import { call } from "../../config/axios";

function BulkPackageDiscount() {
  const [allPackages, setAllPackages] = useState([])
  // const BULK_PACKAGES_DATA = [
  //   {
  //     packagename: "Standard",
  //     members: 10,
  //   },
  //   {
  //     packagename: "Silver",
  //     members: 15,
  //   },
  //   {
  //     packagename: "Gold",
  //     members: 20,
  //   },
  // ];

  
  const calculatePriceAndHours = (pkg) => {
    if (pkg.package_duration === "monthly") {
      return {
        price: pkg.package_cost + " M",
        hours: pkg.package_limits.duration,
      };
    } else if (pkg.package_duration === "yearly") {
      return {
        price: pkg.package_cost + " Y",
        hours: pkg.package_limits.duration,
      };
    }
    return {
      price: "N/A",
      hours: "N/A",
    };
  };



const getAllPackages = async () => {
    await call(GET_ALL_PACKAGES)
      .then((res) => {
        setAllPackages(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getAllPackages();
  },[]);
  return (
    <div className="W-100 medium-font font-grey package-bg p-3 package-radius">
      {allPackages?.map((item, index) => {
         const { price, hours } = calculatePriceAndHours(item);
        return( <div key={index} className="mt-3">
        <div className="d-flex">
          <div className="row w-90">
            <div className="col-3">
              <div>
                <div className="medium-font package-btn-bg p-2 rounded font-white fw-semibold">
                  Package & Features
                </div>
                <div className="medium-font package-heading-bg p-2 rounded mt-1 font-orange">
                    {item?.package_name}
                </div>
              </div>
            </div>
            <div className="col">
              <div>
                <div className="medium-font package-btn-bg p-2 rounded font-white fw-semibold">
                  Bulk Package
                </div>
                <div className="medium-font package-btn-bg p-2 rounded mt-1 font-grey d-flex align-items-center justify-content-between">
                  <span>20</span> <span>M</span>
                </div>
                <div className="medium-font package-btn-bg p-2 rounded mt-1 font-grey d-flex align-items-center justify-content-between">
                  <span>10</span> <span>Y</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div>
                <div className="medium-font package-btn-bg p-2 rounded font-white fw-semibold">
                  Limited Members
                </div>
                <div className="medium-font package-btn-bg p-2 rounded mt-1 font-grey">
                    {item?.package_limits?.members}
                </div>
              </div>
            </div>
            <div className="col">
              <div>
                <div className="medium-font package-btn-bg p-2 rounded font-white fw-semibold">
                  Package Hours
                </div>
                <div className="medium-font package-btn-bg p-2 rounded mt-1 font-grey">
                    {hours}
                </div>
              </div>
            </div>
            <div className="col">
              <div>
                <div className="medium-font package-btn-bg p-2 rounded font-white fw-semibold">
                  Price
                </div>
                <div className="medium-font package-btn-bg p-2 rounded mt-1 font-grey d-flex align-items-center justify-content-between">
                  <span>{price}</span> <span>M</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div>
                <div className="medium-font package-btn-bg p-2 rounded font-white fw-semibold">
                  Discount
                </div>
                <div className="medium-font package-btn-bg p-2 rounded mt-1 font-grey d-flex align-items-center justify-content-between">
                  <span>5%</span> <span>M</span>
                </div>
                <div className="medium-font package-btn-bg p-2 rounded mt-1 font-grey d-flex align-items-center justify-content-between">
                  <span>15%</span> <span>Y</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-10 d-flex align-items-center justify-content-end">
            <div className="blue-btn font-white p-2 px-3 rounded">Submit</div>
          </div>
        </div>
        <hr className="hr-line mt-3" />
      </div>
      )
    })}
    </div>
  );
}

export default BulkPackageDiscount;
