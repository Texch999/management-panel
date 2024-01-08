import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import {
  GET_TOUR_PAYMENT_DOCUMENTS,
  UPDATE_URL_IN_GUESTDOCS,
} from "../../config/endpoints";
import { GENERATE_SIGNED_URL_FOR_ALL_FORMATS } from "../../config/endpoints";
import MatchSubmitPopup from "../../matchpopups/MatchSubmitPopup";
import { FaRegEye } from "react-icons/fa";
import { MdUpload } from "react-icons/md";
import { call } from "../../config/axios";
import { ImageBaseUrl } from "../../images/index";
import PaymentImagePopup from "./PaymentImagePopup";

function GuestDocsUploadPopup(props) {
  const {
    docUploadPopupOpen,
    setDocUploadPopupOpen,
    tourPaymentId,
    setTourPaymentId,
    companyUploadingDocType,
  } = props;
  // console.log(tourPaymentId,'.........tourpaymentid')

  const [allPackMembers, setAllPackMembers] = useState([]);
  const [state, setState] = useState(false);
  const [header, setHeader] = useState("");
  const [data, setData] = useState(false);
  const [docType, setDocType] = useState("");
  const [showScreenshotImg, setShowScreenshotImg] = useState(false);
  const [documentView, setDocumentView] = useState("");
  const [reRendering, setReRendering] = useState(false);

  const gettingguestsdocs = async () => {
    const payload = {
      tour_payment_id: tourPaymentId,
    };
    // console.log(payload, ".....payload");
    await call(GET_TOUR_PAYMENT_DOCUMENTS, payload)
      .then((res) => setData(res?.data?.data?.Items[0]))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    gettingguestsdocs();
    switch (companyUploadingDocType) {
      case "travel_booking":
        setDocType("usertraveldoc");
        break;
      case "hotel_booking":
        setDocType("userhoteldoc");
        break;
      case "tour_guidance":
        setDocType("userguidancedoc");
        break;
    }
  }, [tourPaymentId, reRendering]);
  console.log(data,".....data");

  const guestdetails = data?.guests_details;
  // console.log(guestdetails,'.........guestdetails')

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
  }, [data]);
  // console.log(allPackMembers, ".......allpack");

  const handleUploadChange = async (e, userid, item, amenityType) => {
    // console.log(item, e, ".....consolefrom onclick");
    const file = e.target.files[0];
    const fileName = file.name;
    const fileType = file.type;
    const extension = fileName.split('.')
    const fileExtension = extension[1]
    const imageId = Date.now();
    const imageuploadingurl = await generatesignedurl(imageId, fileType, fileExtension);
    // console.log(imageuploadingurl,'......presignedurl')
    imageUploading(
      imageuploadingurl,
      file,
      imageId,
      userid,
      item,
      amenityType,
      fileType,
      fileExtension
    );
  };

  const imageUploading = async (
    imageuploadingurl,
    file,
    imageId,
    userid,
    item,
    amenityType,
    fileType,
    fileExtension
  ) => {
    // console.log(imageuploadingurl, ".......imageuploadingurl");
    // console.log(imagefile, ".......imagefile");
    imageuploadingurl &&
      file &&
      (await fetch(imageuploadingurl, {
        method: "PUT",
        body: file,
        headers: {
          "Content-Type": `${fileType}`,
          "cache-control": "public, max-age=0",
        },
      })
        .then((res) => {
          // console.log(res, ".......res");
          if (res.status === 200) {
            setHeader("image uploaded successfully");
            setState(true);
            updatingImageUrlinTable(
              `${ImageBaseUrl}/tour_booking_docs_from_company/${imageId}.${fileExtension}`,
              userid,
              item,
              amenityType,
            );
          }
        })
        .catch((err) => {
          setHeader(`err:${err}`);
          setState(true);
        }));
  };

  const generatesignedurl = async (imageId, fileType, fileExtension) => {
    const payload = {
      register_id: `${imageId}`,
      event_type: "user_profile_image",
      folder_name: "tour_booking_docs_from_company",
      fileType: fileType,
      fileExtension: fileExtension
    };
    try {
      const res = await call(GENERATE_SIGNED_URL_FOR_ALL_FORMATS, payload);
      const url = res?.data?.data?.result?.signed_url;
      return url;
    } catch (error) {
      console.log("error while creating the signed url", error);
      return "";
    }
  };

  const updatingImageUrlinTable = async (url, userid, item, amenityType) => {
    // console.log(url,'.........url')
    // console.log(item, ".......item");
    // console.log(userid, ".....userid");
    // console.log(amenityType, "...amenitytype");
    const payload = {
      url: url,
      userid: userid,
      update_url_type: amenityType,
      tour_payment_id: item.tour_payment_id,
    };
    // console.log(payload,'....payload')
    await call(UPDATE_URL_IN_GUESTDOCS, payload)
      .then((res) => {
        if (res?.status === 200) {
          setReRendering((prev) => !prev);
          console.log(res, "......image url updated successfully in table");
        }
      })
      .catch((error) => console.log(error));
  };

  const handleViewClick = async (guest, amenityType) => {
    console.log(guest[amenityType], ".......viewclicked");
    setDocumentView(guest[amenityType]);
    setShowScreenshotImg(true);
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
                    className={
                      guest[docType] === false ? "d-flex align-items-center button-custom-deactive" : "d-flex align-items-center button-custom"
                    }
                    onClick={
                      guest[docType] === false
                        ? null
                        : () => handleViewClick(guest, docType)
                    }
                  >
                    <FaRegEye
                      className={
                        guest[docType] ===false ? "me-1 ions-deactive-clr" : "me-1 ions-clr"
                      }
                    />
                    View
                  </div>
                  <label
                    className="d-flex align-items-center mt-1 button-custom"
                    htmlFor={`${companyUploadingDocType}${index}`}
                  >
                    <input
                      type="file"
                      id={`${companyUploadingDocType}${index}`}
                      name={`${companyUploadingDocType}${index}`}
                      className="fileupload-input-display-none"
                      onChange={(e) =>
                        handleUploadChange(e, guest.userid, data, companyUploadingDocType)
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

  const handleClose = () => {
    setDocUploadPopupOpen(false);
    setAllPackMembers([]);
    setData(false);
    setTourPaymentId("")
  };
  return (
    <div className="modal fade bd-example-modal-lg total-background container mt-5">
      <Modal
        onHide={() => handleClose()}
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
      <PaymentImagePopup
        showScreenshotImg={showScreenshotImg}
        setShowScreenshotImg={setShowScreenshotImg}
        documentView={documentView}
        setDocumentView={setDocumentView}
      />
    </div>
  );
}

export default GuestDocsUploadPopup;
