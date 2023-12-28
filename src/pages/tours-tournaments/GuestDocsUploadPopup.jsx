import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { PRESIGNED_URL } from "../../config/endpoints";
import { FaRegEye } from "react-icons/fa";
import { MdUpload } from "react-icons/md";
const axios = require("axios");

function GuestDocsUploadPopup(props) {
  const {
    docUploadPopupOpen,
    setDocUploadPopupOpen,
    guestDetails,
    companyUploadingDocType,
  } = props;
  const [allPackMembers, setAllPackMembers] = useState([]);
  console.log(
    guestDetails.guests_details,
    companyUploadingDocType,
    ".....guestdetails"
  );
  const guestdetails = guestDetails.guests_details;

  const regularpacks = guestdetails?.filter((item) =>
    Object.keys(item)[0]?.includes("regular")
  );
  const premiumpacks = guestdetails?.filter((item) =>
    Object.keys(item)[0]?.includes("premium")
  );
  const luxurypacks = guestdetails?.filter((item) =>
    Object.keys(item)[0]?.includes("luxury")
  );
  const vippacks = guestdetails?.filter((item) =>
    /^vip/i.test(Object.keys(item)[0])
  );
  const vvippacks = guestdetails?.filter((item) =>
    /^vvip/i.test(Object.keys(item)[0])
  );

  const membersInEachPack = (pkg, pkgType) => {
    const packageMembers = [];
    pkg.forEach((user) => {
      for (
        let i = 1;
        i <=
        Object.keys(user).filter((item) => {
          if (item.includes("username")) {
            return item;
          }
        }).length;
        i++
      ) {
        const member = {
          userpack: pkgType,
          userdob: user[`${pkgType}userdob${i}`],
          usergender: user[`${pkgType}usergender${i}`],
          useridproof: user[`${pkgType}useridproof${i}`],
          userimage: user[`${pkgType}userimage${i}`],
          username: user[`${pkgType}username${i}`],
          usertraveldoc: user[`${pkgType}usertravelbooking${i}`],
          userhoteldoc: user[`${pkgType}userhotelbooking${i}`],
          userguidancedoc: user[`${pkgType}usertourguidance${i}`],
        };
        packageMembers.push(member);
      }
    });
    return packageMembers;
  };
  const regularpackMembers =
    regularpacks?.length > 0
      ? membersInEachPack(regularpacks, "regularPack")
      : null;
  const premiumpackMembers =
    premiumpacks?.length > 0
      ? membersInEachPack(premiumpacks, "premiumPack")
      : null;
  const luxurypackMembers =
    luxurypacks?.length > 0
      ? membersInEachPack(luxurypacks, "luxuryPack")
      : null;
  const vippackMembers =
    vippacks?.length > 0 ? membersInEachPack(vippacks, "vipPack") : null;
  const vvippackMembers =
    vvippacks?.length > 0 ? membersInEachPack(vvippacks, "vvipPack") : null;

  const setAllMembers = () => {
    let previousMembers = [];

    if (regularpackMembers !== null) {
      previousMembers = [...previousMembers, ...regularpackMembers];
    }
    if (premiumpackMembers !== null) {
      previousMembers = [...previousMembers, ...premiumpackMembers];
    }
    if (luxurypackMembers !== null) {
      previousMembers = [...previousMembers, ...luxurypackMembers];
    }
    if (vippackMembers !== null) {
      previousMembers = [...previousMembers, ...vippackMembers];
    }
    if (vvippackMembers !== null) {
      previousMembers = [...previousMembers, ...vvippackMembers];
    }

    setAllPackMembers(previousMembers);
  };
  useEffect(() => {
    setAllMembers();
  }, [guestDetails]);
  console.log(allPackMembers, ".......allpack");

  const TableHeads = [
    {
      label: "SNO",
      field: "s_no",
    },
    {
      label: "Package Name",
      field: "packageName",
    },
    {
      label: "Guest Name",
      field: "guestName",
    },
    {
      label: "DOB",
      field: "dob",
    },
    {
      label: "Gender",
      field: "gender",
    },
    {
      label: "Upload Type",
      field: "UploadType",
    },
    {
      label: "Document",
      field: "document",
    },
  ];

  const TableData =
    allPackMembers && allPackMembers.length > 0
      ? allPackMembers.map((guest, index) => {
          if (guest) {
            return {
              s_no: index + 1,
              packageName: guest.userpack,
              guestName: guest.username,
              dob: guest.userdob,
              gender: guest.usergender,
              UploadType: companyUploadingDocType,
              document: (
                <div>
                  <div
                    className={
                        guest.usertraveldoc === false
                        ? "d-flex align-items-center button-custom-deactive"
                        : "d-flex align-items-center button-custom"
                    }
                    // onClick={
                    //   item?.hotel_bookings === false
                    //     ? null
                    //     : () => handleViewClick(item, "hotel_bookings")
                    // }
                  >
                    <FaRegEye
                      className={
                        guest.usertraveldoc === false
                          ? "me-1 ions-deactive-clr"
                          : "me-1 ions-clr"
                      }
                    />
                    View
                  </div>
                  <label
                    className="d-flex align-items-center mt-1 button-custom"
                    htmlFor={`hotel_bookings_${index}`}
                  >
                    <input
                      type="file"
                      id={`hotel_bookings_${index}`}
                      name={`hotel_bookings_${index}`}
                      className="fileupload-input-display-none"
                    //   onChange={(e) =>
                    //     handleUploadChange(e, item, "hotel_bookings")
                    //   }
                    ></input>
                    <MdUpload className="me-1 ions-clr" />
                    Upload
                  </label>
                </div>
              ),
            };
          } else {
            return null;
          }
        })
      : [{ guests: "No guests to Display" }];

  return (
    <div className="modal fade bd-example-modal-lg total-background container mt-5">
      <Modal
        onHide={() => setDocUploadPopupOpen(false)}
        show={docUploadPopupOpen}
        centered
        size="lg"
        className="match-share-modal w-100 close-btn"
      >
        <Modal.Header closeButton className="clr-grey">
          <Modal.Title className="w-100 text-center">Guests List</Modal.Title>
        </Modal.Header>
        {/* <center>Select Your Tours</center> */}
        <div className="p-2 w-100">
          <div style={{ color: "white" }}>hello</div>
          <table className="tickets-table table table-borderless">
            <thead id="home-table-head" className="p-3">
              <tr>
                {TableHeads.map((item, i) => {
                  return (
                    <th key={i} className="text-center">
                      {item.label}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="p-3">
              {TableData.map((item, i) => {
                return (
                  <tr key={i} className="tr-item">
                    {TableHeads.map((headItem, i) => {
                      return (
                        <td key={i} className="td-item p-2 text-center">
                          {item[headItem.field]}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Modal>
    </div>
  );
}

export default GuestDocsUploadPopup;
