import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { PRESIGNED_URL } from "../../config/endpoints";
import { GENERATE_SIGNED_URL } from "../../config/endpoints";
import MatchSubmitPopup from "../../matchpopups/MatchSubmitPopup";
import { FaRegEye } from "react-icons/fa";
import { MdUpload } from "react-icons/md";
import { call } from "../../config/axios";
import { ImageBaseUrl } from "../../images/index";
import { UPDATE_TOUR_PAYMENTS_DOCUMENTS } from "../../config/endpoints";

function GuestDocsUploadPopup(props) {
  const {
    docUploadPopupOpen,
    setDocUploadPopupOpen,
    guestDetails,
    companyUploadingDocType,
  } = props;
  const [allPackMembers, setAllPackMembers] = useState([]);
  const [state, setState] = useState(false);
  const [header, setHeader] = useState("");

  console.log(guestDetails, companyUploadingDocType, ".....guestdetails");

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
          userid: user[`${pkgType}userid${i}`],
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

  const handleUploadChange = async (e, userid, item, amenityType) => {
    // console.log(item,e, ".....consolefrom onclick");
    const imagefile = e.target.files[0];
    const imageId = Date.now();
    const imageuploadingurl = await generatesignedurl(imageId);
    imageUploading(
      imageuploadingurl,
      imagefile,
      imageId,
      userid,
      item,
      amenityType
    );
  };

  const imageUploading = async (
    imageuploadingurl,
    imagefile,
    imageId,
    userid,
    item,
    amenityType
  ) => {
    // console.log(imageuploadingurl, ".......imageuploadingurl");
    // console.log(imagefile, ".......imagefile");
    imageuploadingurl &&
      imagefile &&
      (await fetch(imageuploadingurl, {
        method: "PUT",
        body: imagefile,
        headers: {
          "Content-Type": "image/jpeg",
          "cache-control": "public, max-age=0",
        },
      })
        .then((res) => {
          // console.log(res, ".......res");
          if (res.status === 200) {
            setHeader("image uploaded successfully");
            setState(true);
            updatingImageUrlinTable(
              `${ImageBaseUrl}/tour_booking_docs_from_company/${imageId}.png`,
              userid,
              item,
              amenityType
            );
          }
        })
        .catch((err) => {
          setHeader(`err:${err}`);
          setState(true);
        }));
  };

  const generatesignedurl = async (imageId) => {
    const payload = {
      register_id: `${imageId}`,
      event_type: "user_profile_image",
      folder_name: "tour_booking_docs_from_company",
    };
    try {
      const res = await call(GENERATE_SIGNED_URL, payload);
      const url = res?.data?.data?.result?.signed_url;
      return url;
    } catch (error) {
      console.log("error while creating the signed url", error);
      return "";
    }
  };

  const updatingImageUrlinTable = async (url, userid, item, amenityType) => {
    console.log(item, ".......item");
    console.log(userid, ".....userid");
    console.log(amenityType, "...amenitytype");
    const payload = {
      [amenityType]: url,
      userid: userid,
      tour_payment_id: item.tour_payment_id,
    };
    console.log(payload, "......payload");
    // await call(UPDATE_TOUR_PAYMENTS_DOCUMENTS, payload)
    //   .then((res) => {
    //     setReRendering((prev) => !prev);
    //     console.log(res, "......image url updated successfully in table");
    //   })
    //   .catch((error) => console.log(error));
  };

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
                    className={`d-flex align-items-center button-custom${
                      !guest.companyUploadingDocType ? "-deactive" : ""
                    }`}
                    // onClick={
                    //   item?.hotel_bookings === false
                    //     ? null
                    //     : () => handleViewClick(item, "hotel_bookings")
                    // }
                  >
                    <FaRegEye
                      className={`me-1 ions${
                        !guest.companyUploadingDocType
                          ? "-deactive-clr"
                          : "-clr"
                      }`}
                    />
                    View
                  </div>
                  <label
                    className="d-flex align-items-center mt-1 button-custom"
                    htmlFor={companyUploadingDocType}
                  >
                    <input
                      type="file"
                      id={companyUploadingDocType}
                      name={companyUploadingDocType}
                      className="fileupload-input-display-none"
                      onChange={(e) =>
                        handleUploadChange(
                          e,
                          guest.userid,
                          guestDetails,
                          companyUploadingDocType
                        )
                      }
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
      <MatchSubmitPopup header={header} state={state} setState={setState} />
    </div>
  );
}

export default GuestDocsUploadPopup;
