// import React from "react";
// import  { useState, useEffect } from "react";
// import { Images } from "./../../images/index";
// import { MdFileUpload } from "react-icons/md";
// import { GET_ALL_PACKAGES } from "../../config/endpoints";
// import { call } from "../../config/axios";

// function PackageUpgrade() {
//   const [allPackages, setAllPackages] = useState([])
//   // const PACKAGES_DATA = [
//   //   {
//   //     packagename: "Standard",
//   //     packageLogo: Images.StandardSmallImg,
//   //     userText: "Join call with 10 users",
//   //     meetingstext: "Use 5 personal meetings",
//   //     numberOfMeetings: "Monthly 10 meetings",
//   //     audioCalls: "Audio calls only",
//   //     members: 10,
//   //   },
//   //   {
//   //     packagename: "Silver",
//   //     packageLogo: Images.SilverSmallImg,
//   //     userText: "Join call with 10 users",
//   //     meetingstext: "Use 5 personal meetings",
//   //     numberOfMeetings: "Monthly 10 meetings",
//   //     audioCalls: "Audio calls only",
//   //     members: 15,
//   //   },
//   //   {
//   //     packagename: "Gold",
//   //     packageLogo: Images.GoldSmallImg,
//   //     userText: "Join call with 10 users",
//   //     meetingstext: "Use 5 personal meetings",
//   //     numberOfMeetings: "Monthly 10 meetings",
//   //     audioCalls: "Audio calls only",
//   //     members: 20,
//   //   },
//   // ];
//   const getAllPackages = async () => {
//     await call(GET_ALL_PACKAGES)
//       .then((res) => {
//         setAllPackages(res?.data?.data);
//       })
//       .catch((err) => console.log(err));
//   };
//   useEffect(() => {
//     getAllPackages();
//   },[]);
//   console.log("getAllPackages====>",allPackages)
//   return (
//     <div className="W-100 medium-font font-grey package-bg p-3 package-radius">
//       {allPackages?.map((item, index) => (
//         <div key={index} className="mt-3">
//           <div className="d-flex">
//             <div className="row w-90">
//               <div className="col-3">
//                 <div>
//                   <div className="medium-font package-btn-bg p-2 rounded font-white fw-semibold">
//                     Package & Features
//                   </div>
//                   <div className="medium-font package-heading-bg p-2 rounded mt-1 font-orange">
//                   {item?.package_name}
//                   </div>
//                   <div className="medium-font package-btn-bg p-2 rounded mt-1 font-grey">
//                     {item.userText}
//                   </div>
//                   <div className="medium-font package-btn-bg p-2 rounded mt-1 font-grey">
//                     {item.meetingstext}
//                   </div>
//                   <div className="medium-font package-btn-bg p-2 rounded mt-1 font-grey">
//                     {item.numberOfMeetings}
//                   </div>
//                   <div className="medium-font package-btn-bg p-2 rounded mt-1 font-grey">
//                     {item.audioCalls}
//                   </div>
//                 </div>
//               </div>
//               <div className="col">
//                 <div>
//                   <div className="medium-font package-btn-bg p-2 rounded font-white fw-semibold">
//                     Package Logo
//                   </div>
//                   <div className="medium-font package-btn-bg p-2 rounded mt-1 d-flex align-items-center justify-content-between">
//                     <img
//                       className="standard-image"
//                       src={item.packageLogo}
//                       alt="Standard_Image"
//                     />
//                     <MdFileUpload className="bluecolor-text large-font" />
//                   </div>
//                 </div>
//               </div>
//               <div className="col">
//                 <div>
//                   <div className="medium-font package-btn-bg p-2 rounded font-white fw-semibold">
//                     Limited Members
//                   </div>
//                   <div className="medium-font package-btn-bg p-2 rounded mt-1 font-grey">
//                     {item?.package_limits?.members}
//                   </div>
//                 </div>
//               </div>
//               <div className="col">
//                 <div>
//                   <div className="medium-font package-btn-bg p-2 rounded font-white fw-semibold">
//                     Package Hours
//                   </div>
//                   <div className="medium-font package-btn-bg p-2 rounded mt-1 font-grey">
//                   {item?.package_limits?.duration}
//                   </div>
//                   <div className="medium-font package-btn-bg p-2 rounded mt-1 font-grey">
//                     4800 Hours
//                   </div>
//                 </div>
//               </div>
//               <div className="col">
//                 <div>
//                   <div className="medium-font package-btn-bg p-2 rounded font-white fw-semibold">
//                     Price
//                   </div>

//                   <div className="medium-font package-btn-bg p-2 rounded mt-1 font-grey d-flex align-items-center justify-content-between">
//                     <span>{item?.package_cost}</span> <span>M</span>
//                   </div>
//                   <div className="medium-font package-btn-bg p-2 rounded mt-1 font-grey d-flex align-items-center justify-content-between">
//                     <span>45000</span> <span>Y</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="col">
//                 <div>
//                   <div className="medium-font package-btn-bg p-2 rounded font-white fw-semibold">
//                     Discount
//                   </div>
//                   <div className="medium-font package-btn-bg p-2 rounded mt-1 font-grey d-flex align-items-center justify-content-between">
//                     <span>5%</span> <span>M</span>
//                   </div>
//                   <div className="medium-font package-btn-bg p-2 rounded mt-1 font-grey d-flex align-items-center justify-content-between">
//                     <span>15%</span> <span>Y</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="w-10 d-flex align-items-center justify-content-end">
//               <div className="blue-btn font-white p-2 px-3 rounded">Submit</div>
//             </div>
//           </div>
//           <hr className="hr-line mt-3" />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default PackageUpgrade;







import React, { useState, useEffect } from "react";
import { Images } from "./../../images/index";
import { MdFileUpload } from "react-icons/md";
import { GET_ALL_PACKAGES } from "../../config/endpoints";
import { call } from "../../config/axios";

function PackageUpgrade() {
  const [allPackages, setAllPackages] = useState([]);

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
    try {
      const response = await call(GET_ALL_PACKAGES);
      setAllPackages(response?.data?.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllPackages();
  }, []);

  return (
    <div className="W-100 medium-font font-grey package-bg p-3 package-radius">
      {allPackages?.map((item, index) => {
        const { price, hours } = calculatePriceAndHours(item);
        return (
          <div key={index} className="mt-3">
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
                    <div className="medium-font package-btn-bg p-2 rounded mt-1 font-grey">
                      {item.userText}
                    </div>
                    <div className="medium-font package-btn-bg p-2 rounded mt-1 font-grey">
                      {item.meetingstext}
                    </div>
                    <div className="medium-font package-btn-bg p-2 rounded mt-1 font-grey">
                      {item.numberOfMeetings}
                    </div>
                    <div className="medium-font package-btn-bg p-2 rounded mt-1 font-grey">
                      {item.audioCalls}
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div>
                    <div className="medium-font package-btn-bg p-2 rounded font-white fw-semibold">
                      Package Logo
                    </div>
                    <div className="medium-font package-btn-bg p-2 rounded mt-1 d-flex align-items-center justify-content-between">
                      <img
                        className="standard-image"
                        src={item.packageLogo}
                        alt="Standard_Image"
                      />
                      <MdFileUpload className="bluecolor-text large-font" />
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
                      <span>{price}</span>
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
        );
      })}
    </div>
  );
}

export default PackageUpgrade;



