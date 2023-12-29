import React, { useEffect, useRef, useState } from "react";
import Table from "../table/Table";
import DocTable from "../table/DocTable";
import { BsArrowDown } from "react-icons/bs";
import { MdDriveFolderUpload, MdInsertPhoto, MdUpload } from "react-icons/md";
import ConformBookingTable from "../table/ConformBookingTable";
import { call } from "../../config/axios";
import { ImageBaseUrl } from "../../images/index";
import { GET_INTERESTED } from "../../config/endpoints";
import {
  UPDATE_INTERESTED,
  UPDATE_TOUR_PAYMENTS_DOCUMENTS,
} from "../../config/endpoints";
import { BOOKNOW_FOR_INTERESTED } from "../../config/endpoints";
import { GET_TOUR_PAYMENT_DOCUMENTS } from "../../config/endpoints";
import { GENERATE_SIGNED_URL } from "../../config/endpoints";
import GuestDetailsPopup from "./GuestDetailsPopup";
import PaymentDetailsPopup from "./PaymentDetailsPopup";
import PaymentImagePopup from "./PaymentImagePopup";
import MatchSubmitPopup from "../../matchpopups/MatchSubmitPopup";
import { FaRegEye } from "react-icons/fa";
import GuestDocsUploadPopup from "./GuestDocsUploadPopup";

function ManageTournament() {
  const [state, setState] = useState(false);
  const [header, setHeader] = useState("");
  const [activeManageIndex, setActiveManageIndex] = useState(0);
  const [interestedMembers, setInterestedMembers] = useState([]);
  const [status, setStatus] = useState(false);
  const [addingTourDetails, setAddingTourDetails] = useState("");
  const [guestDocs, setGuestDocs] = useState([]);
  const [openGuestDetailsPopup, setOpenGuestDetailsPopup] = useState(false);
  const [guestDetails, setGuestsDetails] = useState({});
  const [showPaymentDetailsPopup, setShowPaymentDetailsPopup] = useState(false);
  const [reRendering, setReRendering] = useState(false);
  const [showScreenshotImg, setShowScreenshotImg] = useState(false);
  const [documentView, setDocumentView] = useState("");
  const [booknowSelectedIds, setBooknowSelectedIds] = useState([]);
  const [docUploadPopupOpen, setDocUploadPopupOpen] = useState(false);
  const [companyUploadingDocType, setCompanyUploadingDocType] = useState("")
  // const [isChecked, setIsChecked] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState({
    tour_name: "All",
    website: "All",
    role: "All",
    user_name: "All",
    country: "All",
  });
  // console.log(isChecked, ".......isChecked");
  const changeStatusonPopupClosing = () => {
    setReRendering((prev) => !prev);
  };
  // console.log(interestedMembers, "......interested");
  const gettingInterestedMembers = async () => {
    const payload = {};
    await call(GET_INTERESTED, payload)
      .then((res) => {
        setInterestedMembers(res?.data?.data);
      })
      .catch((error) => console.log(error));
  };

  const tourdetailsSubmitButton = async () => {
    const payload = {
      selectedTeam: booknowSelectedIds,
      tour_details: addingTourDetails,
    };
    await call(BOOKNOW_FOR_INTERESTED, payload)
      .then((res) => {
        if (res?.data?.status === 200) {
          setHeader("Tour Details Added Successfully");
          setState(true);
          setAddingTourDetails("");
          setBooknowSelectedIds([]);
        }
      })
      .catch((error) => console.log(error));
  };
  const gettingguestsdocs = async () => {
    const payload = {};
    await call(GET_TOUR_PAYMENT_DOCUMENTS, payload)
      .then((res) => setGuestDocs(res?.data?.data?.Items))
      .catch((error) => console.log(error));
  };
  console.log(guestDocs, ".....guestdocs");

  useEffect(() => {
    gettingInterestedMembers();
  }, [status]);

  useEffect(() => {
    gettingguestsdocs();
  }, [reRendering]);

  const handleSelectButton = async (interested_id) => {
    const payload = {
      interested_id,
      select: true,
    };
    await call(UPDATE_INTERESTED, payload)
      .then((res) => {
        setStatus((prev) => !prev);
      })
      .catch((error) => console.log(error));
  };
  const handleDeSelectButton = async (interested_id) => {
    const payload = {
      interested_id,
      select: false,
    };
    await call(UPDATE_INTERESTED, payload)
      .then((res) => {
        setStatus((prev) => !prev);
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (e) => {
    setSelectedFilter({
      ...selectedFilter,
      [e.target.name]: e.target.value,
    });
  };
  const handleBooknowtoggleClick = (e, interested_id) => {
    let filterArrey = booknowSelectedIds?.filter(
      (item) => item !== interested_id
    );
    e?.target?.checked === true
      ? setBooknowSelectedIds([...booknowSelectedIds, interested_id])
      : setBooknowSelectedIds(filterArrey);
  };

  const handleClickhereButton = (item) => {
    setGuestsDetails(item);
    setOpenGuestDetailsPopup(true);
  };
  const handlePaymentDetailsClick = (item) => {
    setGuestsDetails(item);
    setShowPaymentDetailsPopup(true);
  };
  const handleViewClick = async (item, amenityType) => {
    setDocumentView(item[amenityType]);
    setShowScreenshotImg(true);
  };
  const handleUploadClick = async (item, bookingType) => {
    setCompanyUploadingDocType(bookingType)
    setGuestsDetails(item);
    setDocUploadPopupOpen(true);
  };

  const updatingImageUrlinTable = async (url, item, amenityType) => {
    // console.log(item,'.......item')
    // console.log(amenityType, "...amenitytype");
    const payload = {
      [amenityType]: url,
      tour_payment_id: item.tour_payment_id,
    };
    // console.log(payload, "......payload");
    await call(UPDATE_TOUR_PAYMENTS_DOCUMENTS, payload)
      .then((res) => {
        setReRendering((prev) => !prev);
        // console.log(res, "......image url updated successfully in table");
      })
      .catch((error) => console.log(error));
  };

  const handleUploadChange = async (e, item, amenityType) => {
    // console.log(item, ".....consolefrom onclick");
    const imagefile = e.target.files[0];
    const imageId = Date.now();
    const imageuploadingurl = await generatesignedurl(imageId);
    imageUploading(imageuploadingurl, imagefile, imageId, item, amenityType);
  };
  const imageUploading = async (
    imageuploadingurl,
    imagefile,
    imageId,
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

  const manageButtons = [
    "Interested Team",
    "Selected Team",
    "Book Now",
    "Receive Document/Payment",
    "Confirm Booking List",
  ];
  // const countryArray =
  const manageDropdown = [
    {
      head: "Tours",
      name: "tour_name",
      options: [
        "All",
        "1.Take Part in Our Tour",
        "2.Cricket Tour",
        "3.Sports Tour",
        "4.Casino Tour",
        "5.Entertainment Tour",
      ],
    },
    {
      head: "Country",
      name: "country",
      options: [
        "All",
        ...new Set(
          interestedMembers
            .filter((item) => {
              if (item.country !== undefined) {
                return item;
              }
            })
            .map((item) => item.country)
        ),
      ],
    },
    {
      head: "Website",
      name: "website",
      options: [
        "All",
        ...new Set(
          interestedMembers
            .filter((item) => {
              if (item.website !== undefined) {
                return item;
              }
            })
            .map((item) => item.website)
        ),
      ],
    },
    {
      head: "Role",
      name: "role",
      options: [
        "All",
        ...new Set(
          interestedMembers
            .filter((item) => {
              if (item.role !== undefined) {
                return item;
              }
            })
            .map((item) => item.role)
        ),
      ],
    },
    {
      head: "Name",
      name: "user_name",
      options: [
        "All",
        ...new Set(
          interestedMembers
            .filter((item) => {
              if (item.user_name !== undefined) {
                return item;
              }
            })
            .map((item) => item.user_name)
        ),
      ],
    },
  ];

  const tableHeading = [
    {
      header: "S NO",
      field: "sl",
    },
    {
      header: "WEBSITE",
      field: "website",
    },
    {
      header: "TOUR TITLE",
      field: "tour_title",
    },
    {
      header: "NAME",
      field: "name",
    },
    {
      header: "ROLE",
      field: "role",
    },
    {
      header: "TOUR NAME",
      field: "tour_name",
    },
    {
      header: "SCHEDULE_START",
      field: "schedule_start",
    },
    {
      header: "COUNTRY",
      field: "country",
    },
    {
      field: "cl",
      clr: true,
    },
    {
      field: "check",
    },
  ];
  // console.log(interestedMembers,'......interestedmembers')
  const tableData =
    interestedMembers && interestedMembers.length > 0
      ? interestedMembers
          .filter((item) => {
            if (selectedFilter?.tour_name === "All") {
              return item;
            } else {
              return item.tour_name === selectedFilter.tour_name;
            }
          })
          .filter((item) => {
            if (selectedFilter?.country === "All") {
              return item;
            } else {
              return item.country === selectedFilter.country;
            }
          })
          .filter((item) => {
            if (selectedFilter?.website === "All") {
              return item;
            } else {
              return item.website === selectedFilter.website;
            }
          })
          .filter((item) => {
            if (selectedFilter?.role === "All") {
              return item;
            } else {
              return item.role === selectedFilter.role;
            }
          })
          .filter((item) => {
            if (selectedFilter?.user_name === "All") {
              return item;
            } else {
              return item.user_name === selectedFilter.user_name;
            }
          })
          .map((item, index) => {
            return {
              id: item.interested_id,
              sl: index + 1,
              website: item.website,
              tour_title: item.tour_title,
              name: item.user_name,
              role: item.role,
              tour_name: item.tour_name,
              schedule_start: item.schedule_start,
              schedule_end: item.schedule_end,
              country: item.country,
              cl:
                item.selected === false ? (
                  <button
                    className="select-button"
                    name="select"
                    value={item.selected}
                    onClick={() => handleSelectButton(item.interested_id)}
                  >
                    Select
                  </button>
                ) : (
                  <button disabled className="select-button btn-color2">
                    Selected
                  </button>
                ),
            };
          })
      : [];
  const tableData2 =
    interestedMembers && interestedMembers.length > 0
      ? interestedMembers
          .filter((item) => {
            return item.selected === true;
          })
          .filter((item) => {
            if (selectedFilter?.tour_name === "All") {
              return item;
            } else {
              return item.tour_name === selectedFilter.tour_name;
            }
          })
          .filter((item) => {
            if (selectedFilter?.country === "All") {
              return item;
            } else {
              return item.country === selectedFilter.country;
            }
          })
          .filter((item) => {
            if (selectedFilter?.website === "All") {
              return item;
            } else {
              return item.website === selectedFilter.website;
            }
          })
          .filter((item) => {
            if (selectedFilter?.role === "All") {
              return item;
            } else {
              return item.role === selectedFilter.role;
            }
          })
          .filter((item) => {
            if (selectedFilter?.user_name === "All") {
              return item;
            } else {
              return item.user_name === selectedFilter.user_name;
            }
          })
          .map((item, index) => {
            return {
              id: item.interested_id,
              sl: index + 1,
              website: item.website,
              tour_title: item.tour_title,
              name: item.user_name,
              role: item.role,
              tour_name: item.tour_name,
              schedule_start: item.schedule_start,
              schedule_end: item.schedule_end,
              country: item.country,
              cl: item.selected === true && (
                <button
                  className="select-button btn-color"
                  name="deselect"
                  value={item.selected}
                  onClick={() => handleDeSelectButton(item.interested_id)}
                >
                  De-select
                </button>
              ),
              check:
                activeManageIndex === 2 ? (
                  <input
                    className="d-flex justify-content-center align-items-center text-center"
                    type="checkbox"
                    onChange={(e) =>
                      handleBooknowtoggleClick(e, item.interested_id)
                    }
                  ></input>
                ) : null,
            };
          })
      : [];
  // console.log(tableData2,'.....tabledata2')
  const tableDocHeading = [
    {
      header: "S NO",
      field: "sl",
    },
    {
      header: "WEBSITE",
      field: "website",
    },
    {
      header: "DATE",
      field: "date",
    },
    {
      header: "NAME & ROLE",
      field: "nameRole",
    },
    // {
    //   header: "TOUR NAME",
    //   field: "tourName"
    // },
    {
      header: "GUESTS DETAILS",
      field: "guestName",
    },
    {
      header: "PACKS SELECTED",
      field: "tourPack",
    },
    {
      header: "TOTAL AMOUNT",
      field: "totalAmount",
    },
    {
      header: "PAID AMOUNT",
      field: "paidAmount",
    },
    {
      header: "PAID TO",
      field: "paidTo",
    },
    {
      header: "PAYMENT IDPROOF",
      field: "paymentIdproof",
    },
    {
      header: "CONFIRMATION STATUS",
      field: "clr",
    },
    // {
    //   field: "clr",
    // },
  ];
  // console.log(selectedFilter, ".......selected");
  // console.log(guestDocs, "....guestdocs");
  const tableDocData =
    guestDocs && guestDocs.length > 0
      ? guestDocs
          .filter((item) => {
            if (selectedFilter?.tour_name === "All") {
              return item;
            } else {
              return item.tour_name === selectedFilter.tour_name;
            }
          })
          .filter((item) => {
            if (selectedFilter?.country === "All") {
              return item;
            } else {
              return item.country === selectedFilter.country;
            }
          })
          .filter((item) => {
            if (selectedFilter?.website === "All") {
              return item;
            } else {
              return item.website === selectedFilter.website;
            }
          })
          .filter((item) => {
            if (selectedFilter?.role === "All") {
              return item;
            } else {
              return item.role === selectedFilter.role;
            }
          })
          .filter((item) => {
            if (selectedFilter?.user_name === "All") {
              return item;
            } else {
              return item.user_name === selectedFilter.user_name;
            }
          })
          .map((item, index) => {
            return {
              sl: index + 1,
              website: item.website,
              date: <div>{item.date}</div>,
              nameRole: (
                <div>
                  {item.name}
                  <br />
                  {item.account_role}
                </div>
              ),
              // tourName: "goa trip",
              guestName: (
                <div>
                  <div
                    className="d-flex align-items-center button-custom"
                    onClick={() => handleClickhereButton(item)}
                  >
                    Clickhere
                  </div>
                </div>
              ),
              tourPack:
                item.packages_selected && item.packages_selected.length > 0
                  ? item.packages_selected.map((packageItem) =>
                      Object.keys(packageItem).map((key) => (
                        <div key={key}>
                          {key}:{packageItem[key]}
                        </div>
                      ))
                    )
                  : null,
              totalAmount: item.total_amount,
              paidAmount: item.paid_amount,
              paidTo:
                item.payment_details.paymentmode === "neft" ? (
                  <div>
                    {item.payment_details.name}
                    <br />
                    {item.payment_details.accountNo}
                    <br />
                    {item.payment_details.bank}
                    <br />
                    {item.payment_details.ifscCode}
                  </div>
                ) : (
                  <div>
                    {item.payment_details.name}
                    <br />
                    {item.payment_details.mobileNumber}
                    <br />
                    {item.payment_details.upiId}
                  </div>
                ),
              paymentIdproof: (
                <div
                  className="d-flex align-items-center button-custom"
                  onClick={() => handlePaymentDetailsClick(item)}
                >
                  <FaRegEye className="me-1 ions-clr" />
                  View
                </div>
              ),
              clr: item.confirm_payment_status,
            };
          })
      : [];

  const ConfirmBookingHeading = [
    {
      header: "S NO",
      field: "sl",
    },
    {
      header: "WEBSITE",
      field: "website",
    },
    {
      header: "DATE",
      field: "date",
    },
    {
      header: "NAME & ROLE",
      field: "nameRole",
    },
    {
      header: "GUESTS DETAILS",
      field: "guestName",
    },
    {
      header: "PACKS SELECTED",
      field: "tourPack",
    },
    // {
    //   header: "TOUR AMENITIES",
    //   field: "tourAmenities",
    // },
    {
      header: "TOTAL AMOUNT",
      field: "totalAmount",
    },
    {
      header: "TRAVEL BOOKINGS",
      field: "travelBookings",
    },
    {
      header: "HOTEL BOOKINGS",
      field: "hotelBookings",
    },
    {
      header: "TOUR GUIDANCE",
      field: "tourGuidance",
    },
    // {
    //   header: "PAID AMOUNT",
    //   field: "paidAmount",
    // },
    // {
    //   header: "PAYMENT IDPROOF",
    //   field: "paymentIdproof",
    // },
    {
      header: "CONFIRMATION STATUS",
      field: "confirmationStatus",
    },
    {
      field: "clr",
    },
  ];

  const ConfirmBookingData =
    guestDocs && guestDocs.length > 0
      ? guestDocs
          .filter((item) => item.confirm_payment_status === "Approved")
          .filter((item) => {
            if (selectedFilter?.tour_name === "All") {
              return item;
            } else {
              return item.tour_name === selectedFilter.tour_name;
            }
          })
          .filter((item) => {
            if (selectedFilter?.country === "All") {
              return item;
            } else {
              return item.country === selectedFilter.country;
            }
          })
          .filter((item) => {
            if (selectedFilter?.website === "All") {
              return item;
            } else {
              return item.website === selectedFilter.website;
            }
          })
          .filter((item) => {
            if (selectedFilter?.role === "All") {
              return item;
            } else {
              return item.role === selectedFilter.role;
            }
          })
          .filter((item) => {
            if (selectedFilter?.user_name === "All") {
              return item;
            } else {
              return item.user_name === selectedFilter.user_name;
            }
          })
          .map((item, index) => {
            // console.log(item,'....item from map')
            return {
              sl: index + 1,
              website: item.website,
              date: item.date,
              nameRole: (
                <div>
                  {item.name}
                  <br />
                  {item.account_role}
                </div>
              ),
              guestName: (
                <div>
                  <div
                    className="d-flex align-items-center button-custom"
                    onClick={() => handleClickhereButton(item)}
                  >
                    Clickhere
                  </div>
                </div>
              ),
              tourPack:
                item.packages_selected && item.packages_selected.length > 0
                  ? item.packages_selected.map((packageItem) =>
                      Object.keys(packageItem).map((key) => (
                        <div key={key}>
                          {key}:{packageItem[key]}
                        </div>
                      ))
                    )
                  : null,
              travelBookings: (
                <div
                  className="d-flex align-items-center  button-custom"
                  onClick={() => handleUploadClick(item, "travelBooking")}
                >
                  <MdUpload className="me-1 ions-clr" />
                  Upload
                </div>
              ),
              hotelBookings: (
                <div>
                  <div
                    className={
                      item?.hotel_bookings === false
                        ? "d-flex align-items-center button-custom-deactive"
                        : "d-flex align-items-center button-custom"
                    }
                    onClick={
                      item?.hotel_bookings === false
                        ? null
                        : () => handleViewClick(item, "hotel_bookings")
                    }
                  >
                    <FaRegEye
                      className={
                        item?.hotel_bookings === false
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
                      onChange={(e) =>
                        handleUploadChange(e, item, "hotel_bookings")
                      }
                    ></input>
                    <MdUpload className="me-1 ions-clr" />
                    Upload
                  </label>
                </div>
              ),
              tourGuidance: (
                <div>
                  <div
                    className={
                      item?.tour_guidance === false
                        ? "d-flex align-items-center button-custom-deactive"
                        : "d-flex align-items-center button-custom"
                    }
                    onClick={
                      item?.tour_guidance === false
                        ? null
                        : () => handleViewClick(item, "tour_guidance")
                    }
                  >
                    <FaRegEye
                      className={
                        item?.tour_guidance === false
                          ? "me-1 ions-deactive-clr"
                          : "me-1 ions-clr"
                      }
                    />
                    View
                  </div>
                  <label
                    className="d-flex align-items-center mt-1 button-custom"
                    htmlFor={`tour_guidance_${index}`}
                    // onClick={()=>handleUploadClick(tourGuidanceRef)}
                  >
                    <input
                      type="file"
                      id={`tour_guidance_${index}`}
                      name={`tour_guidance_${index}`}
                      // ref={tourGuidanceRef}
                      className="fileupload-input-display-none"
                      onChange={(e) =>
                        handleUploadChange(e, item, "tour_guidance")
                      }
                    ></input>
                    <MdUpload className="me-1 ions-clr" />
                    Upload
                  </label>
                </div>
              ),
              totalAmount: item.total_amount,
              // paidAmount: "8,00,000",
              // paymentIdproof: (
              //   <button type="button" className="btn btn-outline-secondary btn-sm">
              //     View
              //   </button>
              // ),
              confirmationStatus: item.confirm_payment_status,
            };
          })
      : [];
  // console.log(ConfirmBookingData,".........ConfirmBookingData")
  const handleManageHead = (index) => {
    setActiveManageIndex(index);
  };
  return (
    <div className="add-tours p-3 mt-3">
      <div className="row">
        <div className="d-flex">
          {manageButtons.map((item, index) => {
            return (
              <div
                key={index}
                className={`${
                  activeManageIndex === index
                    ? "active-schedule-head"
                    : "header-schedule"
                }  p-2 me-2`}
                onClick={() => handleManageHead(index)}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <div className="row mt-3">
        {manageDropdown.map((item, index) => {
          return (
            <div className="col" key={index}>
              <div className="font-grey">{item.head}</div>
              <select
                className="tours-box p-2 medium-font rounded-top text-center w-100"
                name={item.name}
                onChange={(e) => handleChange(e)}
              >
                {item.options.map((items, i) => {
                  return (
                    <option key={i} value={items}>
                      {items}
                    </option>
                  );
                })}
              </select>
            </div>
          );
        })}
      </div>
      <div className="mt-3">
        {activeManageIndex === 0 && (
          <div>
            <Table columns={tableHeading} data={tableData} />
          </div>
        )}
        {(activeManageIndex === 1 || activeManageIndex === 2) && (
          <div>
            <Table columns={tableHeading} data={tableData2} />
          </div>
        )}
        {activeManageIndex === 2 && (
          <div>
            <textarea
              className="tours-box w-100 h-100px"
              placeholder="Please enter Tour Details"
              name="tourdetails"
              value={addingTourDetails}
              onChange={(e) => {
                setAddingTourDetails(e.target.value);
              }}
            ></textarea>
            <button
              className="select-button button-position"
              onClick={() => {
                tourdetailsSubmitButton();
              }}
            >
              Submit
            </button>
          </div>
        )}
        {activeManageIndex === 3 && (
          <div className="table-wrapper">
            <DocTable columns={tableDocHeading} data={tableDocData} />
          </div>
        )}
        {activeManageIndex === 4 && (
          <div className="table-wrapper">
            <DocTable
              columns={ConfirmBookingHeading}
              data={ConfirmBookingData}
            />
          </div>
        )}
      </div>
      {openGuestDetailsPopup && (
        <GuestDetailsPopup
          openGuestDetailsPopup={openGuestDetailsPopup}
          setOpenGuestDetailsPopup={setOpenGuestDetailsPopup}
          guestDetails={guestDetails}
        />
      )}
      <PaymentDetailsPopup
        showPaymentDetailsPopup={showPaymentDetailsPopup}
        setShowPaymentDetailsPopup={setShowPaymentDetailsPopup}
        guestDetails={guestDetails}
        changeStatusonPopupClosing={changeStatusonPopupClosing}
      />
      <MatchSubmitPopup header={header} state={state} setState={setState} />
      <PaymentImagePopup
        showScreenshotImg={showScreenshotImg}
        setShowScreenshotImg={setShowScreenshotImg}
        imageurl={documentView}
      />
      <GuestDocsUploadPopup
        docUploadPopupOpen={docUploadPopupOpen}
        setDocUploadPopupOpen={setDocUploadPopupOpen}
        guestDetails={guestDetails}
        companyUploadingDocType={companyUploadingDocType}
      />
    </div>
  );
}

export default ManageTournament;
