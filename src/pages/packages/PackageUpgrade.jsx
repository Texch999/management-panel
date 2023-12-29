import React, { useState, useRef } from "react";
import { Images } from "./../../images/index";
import { MdFileUpload } from "react-icons/md";
import { PACKAGES_CREATION, GENERATE_SIGNED_URL } from "../../config/endpoints";
import { call } from "../../config/axios";
import MatchSubmitPopup from "../../matchpopups/MatchSubmitPopup";

function PackageUpgrade(props) {
  const ImageBaseUrl = "https://we2-call-images.s3.us-east-2.amazonaws.com";
  const { selectedPackage, packageInputs } = props;
  const [inputData, setInputData] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccessfulPopup, setShowSuccessfulPopup] = useState(false);
  const [err, setErr] = useState();
  const [activeIndex, setActiveIndex] = useState();
  const [profileImage, setProfileImage] = useState("");
  const [singedUrl, setSignedUrl] = useState("");
  const [uploadImage, setuploadImage] = useState([]);
  const [packageId, setPackageId] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("monthly");

  const uploadfileInputRef = useRef(null);

  const handleUploadFileSelect = (e) => {
    const file = e.target.files[0];
    console.log(file,"====>file");
    setProfileImage(file);
    generateSignedUrl();
  };

  const handleUploadButtonClick = () => {
    uploadfileInputRef.current.click();
  };

  const handleInputChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmitPackageCreation = async (item, packageName, index) => {
    setActiveIndex(index);

    if (
      !(
        inputData[item?.userTextKey] &&
        inputData[item?.meetingTextKey] &&
        inputData[item?.numberOfMeetingsKey] &&
        inputData[item?.audioCallsKey] &&
        inputData[item?.hoursKey] &&
        inputData[item?.priceKey] &&
        inputData[item?.discountPriceKey]
      )
    ) {
      return setErr("Please enter required fields");
    }
    const payload = {
      // is_autherised: "true",
      package_cost: inputData[item?.priceKey],
      package_duration: selectedDuration,
      discount: inputData[item?.discountPriceKey],
      package_limits: {
        duration: inputData[item?.hoursKey],
        members: inputData[item?.membersKey],
        join_call_with_users: inputData[item?.userTextKey],
        personal_meetings: inputData[item?.meetingTextKey],
        meetings: inputData[item?.numberOfMeetingsKey],
        audio_calls: inputData[item?.audioCallsKey],
      },
      package_name: packageName,
      status: "active",
      website: packageInputs?.website_name || 0,
      country_name: packageInputs?.country_name || 0,
      upload_image: `${ImageBaseUrl}/${"package-images"}/${packageId}.png`,
    };
    setErr("");
    setIsProcessing(true);
    await call(PACKAGES_CREATION, payload)
      .then(async (res) => {
        // if (res.data.statusCode === 200) {
        setShowSuccessfulPopup(true)
        setTimeout(()=>{
          setShowSuccessfulPopup(false)
        },2000)
        console.log("res====>", res);
        singedUrl &&
          profileImage &&
          (await fetch(singedUrl, {
            method: "PUT",
            body: profileImage,
            headers: {
              "Content-Type": "image/jpeg",
              "cache-control": "public, max-age=0",
            },
          })
            .then((res) => {})
            .catch((err) => {
              console.log("err: ", err);
            }));
        setIsProcessing(false);
        setInputData({});
        // } else {
        //   setErr(
        //     res?.data?.message ? res?.data?.message : `something wen't wrong`
        //   );
        // }
      })
      .catch((err) => {
        setIsProcessing(false);
        setErr(`something wen't wrong`);
        console.log(err);
      });
    setShowSuccessfulPopup(true);
  };
  const generateSignedUrl = async () => {
    setuploadImage(true);
    const posetNewId = new Date().getTime();
    await call(GENERATE_SIGNED_URL, {
      register_id: `${posetNewId}`,
      event_type: "user_profile_image",
      folder_name: "package-images",
    })
      .then(async (res) => {
        setuploadImage(false);
        let url = res?.data?.data?.result?.signed_url;
        setSignedUrl(url);
        setPackageId(posetNewId);
      })
      .catch((err) => {
        setuploadImage(false);
        console.log("generating signed url error", err);
      });
  };

  const PACKAGES_DATA = [
    {
      packagename: "Standard",
      packageId: "1",
      packageLogo: Images.StandardSmallImg,
      userText: "Join call with 10 users",
      meetingstext: "Use 5 personal meetings",
      numberOfMeetings: "Monthly 10 meetings",
      audioCalls: "Audio calls only",
      members: 10,
      payloadObject: {
        userTextKey: "standard_user_text",
        meetingTextKey: "standard_meeting_text",
        numberOfMeetingsKey: "standard_num_of_meetings",
        audioCallsKey: "standard_audio_calls",
        membersKey: "standard_members",
        hoursKey: "standard_Hours",
        priceKey: "standard_Price",
        discountPriceKey: "standard_discount_Price",
      },
    },
    {
      packagename: "Silver",
      packageId: "2",
      packageLogo: Images.SilverSmallImg,
      userText: "Join call with 10 users",
      meetingstext: "Use 5 personal meetings",
      numberOfMeetings: "Monthly 10 meetings",
      audioCalls: "Audio calls only",
      members: 15,
      payloadObject: {
        userTextKey: "silver_user_text",
        meetingTextKey: "silver_meeting_text",
        numberOfMeetingsKey: "silver_num_of_meetings",
        audioCallsKey: "silver_audio_calls",
        membersKey: "silver_members",
        hoursKey: "silver_Hours",
        priceKey: "silver_Price",
        discountPriceKey: "silver_discount_Price"
      },
    },
    {
      packagename: "Gold",
      packageId: "3",
      packageLogo: Images.GoldSmallImg,
      userText: "Join call with 10 users",
      meetingstext: "Use 5 personal meetings",
      numberOfMeetings: "Monthly 10 meetings",
      audioCalls: "Audio calls only",
      members: 20,
      payloadObject: {
        userTextKey: "gold_user_text",
        meetingTextKey: "gold_meeting_text",
        numberOfMeetingsKey: "gold_num_of_meetings",
        audioCallsKey: "gold_audio_calls",
        membersKey: "gold_members",
        hoursKey: "gold_Hours",
        priceKey: "gold_Price",
        discountPriceKey: "gold_discount_Price",
      },
    },
    {
      packagename: "Diamond",
      packageId: "4",
      packageLogo: Images.GoldSmallImg,
      userText: "Join call with 10 users",
      meetingstext: "Use 5 personal meetings",
      numberOfMeetings: "Monthly 10 meetings",
      audioCalls: "Audio calls only",
      members: 20,
      payloadObject: {
        userTextKey: "diamond_user_text",
        meetingTextKey: "diamond_meeting_text",
        numberOfMeetingsKey: "diamond_num_of_meetings",
        audioCallsKey: "diamond_audio_calls",
        membersKey: "diamond_members",
        hoursKey: "diamond_Hours",
        priceKey: "diamond_Price",
        discountPriceKey: "diamond_discount_Price",
      },
    },
    {
      packagename: "VIP",
      packageId: "5",
      packageLogo: Images.GoldSmallImg,
      userText: "Join call with 10 users",
      meetingstext: "Use 5 personal meetings",
      numberOfMeetings: "Monthly 10 meetings",
      audioCalls: "Audio calls only",
      members: 20,
      payloadObject: {
        userTextKey: "vip_user_text",
        meetingTextKey: "vip_meeting_text",
        numberOfMeetingsKey: "vip_num_of_meetings",
        audioCallsKey: "vip_audio_calls",
        membersKey: "vip_members",
        hoursKey: "vip_Hours",
        priceKey: "vip_Price",
        discountPriceKey: "vip_discount_Price",
      },
    },
  ];

  const selectPackage =
    selectedPackage === "all"
      ? PACKAGES_DATA
      : PACKAGES_DATA?.filter((i) => {
          return i.packageId === selectedPackage;
        });
  console.log("INPUTDATA", inputData);

  const handleDurationChange = (obj) => { 
    setSelectedDuration(obj);
  };

  const packageDurations = ["monthly", "yearly", "hourly"];

  return (
    <div className="W-100 medium-font font-grey package-bg p-3 package-radius package-input">
      <div className="row">
        <div className="row">
          {packageDurations.map((obj) => {
            return (
              <div className="col-sm-2 col-lg-1 d-flex align-items-center">
                <div className="medium-font role-color d-flex">
                  <input
                    type="radio"
                    id={obj}
                    name="duration"
                    value={obj}
                    checked={selectedDuration === obj}
                    onChange={() => handleDurationChange(obj)}
                  />
                  <label htmlFor={obj}>{obj}</label>
                </div>
              </div>
            );
          })}

          {/* <div className="col-sm-2 col-lg-1 d-flex align-items-center">
            <div className="medium-font role-color d-flex">
              <input
                type="radio"
                id="yearly"
                name="duration"
                value="yearly"
                checked={selectedDuration === "yearly"}
                onChange={() => handleDurationChange("yearly")}
              />
              <label htmlFor="yearly">Yearly</label>
            </div>
          </div>
          <div className="col-sm-2 col-lg-1 d-flex align-items-center">
            <div className="medium-font role-color d-flex">
              <input
                type="radio"
                id="hourly"
                name="duration"
                value="hourly"
                checked={selectedDuration === "hourly"}
                onChange={() => handleDurationChange("hourly")}
              />
              <label htmlFor="hourly">Hourly</label>
            </div>
          </div> */}
        </div>
      </div>
      {selectPackage?.map((item, index) => (
        <div key={index} className="mt-3">
          <div className="d-flex align-items-center justify-content-between">
            <div className="row w-90">
              <div className="col-3">
                <div>
                  <div className="medium-font package-btn-bg p-2 rounded font-white fw-semibold">
                    Package & Features
                  </div>
                  <div className="medium-font package-heading-bg p-2 rounded mt-1 role-color">
                    {item.packagename}
                  </div>
                  <input
                    className="medium-font package-btn-bg p-2 rounded mt-1 font-grey"
                    placeholder={item.userText}
                    name={item?.payloadObject?.userTextKey}
                    value={inputData[item?.payloadObject?.userTextKey] || ""}
                    onChange={(e) => handleInputChange(e)}
                  />
                  <input
                    className="medium-font package-btn-bg p-2 rounded mt-1 font-grey"
                    placeholder={item.meetingstext}
                    name={item?.payloadObject?.meetingTextKey}
                    value={inputData[item?.payloadObject?.meetingTextKey] || ""}
                    onChange={(e) => handleInputChange(e)}
                  />
                  <input
                    className="medium-font package-btn-bg p-2 rounded mt-1 font-grey"
                    placeholder={item.numberOfMeetings}
                    name={item?.payloadObject?.numberOfMeetingsKey}
                    value={
                      inputData[item?.payloadObject?.numberOfMeetingsKey] || ""
                    }
                    onChange={(e) => handleInputChange(e)}
                  />
                  <input
                    className="medium-font package-btn-bg p-2 rounded mt-1 font-grey"
                    placeholder={item.audioCalls}
                    name={item?.payloadObject?.audioCallsKey}
                    value={inputData[item?.payloadObject?.audioCallsKey] || ""}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
              </div>
              <div className="col">
                <div>
                  <div className="medium-font package-btn-bg p-2 rounded font-white fw-semibold">
                    Package Logo
                  </div>
                  <div
                    className="medium-font package-btn-bg p-2 rounded mt-1 d-flex align-items-center justify-content-between"
                    onClick={handleUploadButtonClick}
                    disabled={uploadImage}
                  >
                    <img
                      className="standard-image"
                      src={item.packageLogo}
                      alt="Standard_Image"
                    />
                    <input
                      type="file"
                      ref={uploadfileInputRef}
                      style={{ display: "none" }}
                      onChange={handleUploadFileSelect}
                      className="login-inputs"
                    ></input>
                    <MdFileUpload className="bluecolor-text large-font" />
                  </div>
                </div>
              </div>
              <div className="col">
                <div>
                  <div className="medium-font package-btn-bg p-2 rounded font-white fw-semibold">
                    Ltd Members
                  </div>
                  <input
                    className="medium-font package-btn-bg p-2 rounded mt-1 font-grey"
                    placeholder={item.members}
                    name={item?.payloadObject?.membersKey}
                    value={inputData[item?.payloadObject?.membersKey] || ""}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
              </div>
              <div className="col">
                <div>
                  <div className="medium-font package-btn-bg p-2 rounded font-white fw-semibold">
                    Pkg Hours
                  </div>
                  <input
                    className="medium-font package-btn-bg p-2 rounded mt-1 font-grey"
                    placeholder="40 Hours"
                    name={item?.payloadObject?.hoursKey}
                    value={inputData[item?.payloadObject?.hoursKey] || ""}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
              </div>
              <div className="col">
                <div>
                  <div className="medium-font package-btn-bg p-2 rounded font-white fw-semibold">
                    Price
                  </div>
                  <input
                    className="medium-font package-btn-bg p-2 rounded mt-1 font-grey"
                    placeholder="4000 M"
                    name={item?.payloadObject?.priceKey}
                    value={inputData[item?.payloadObject?.priceKey] || ""}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
              </div>
              <div className="col">
                <div>
                  <div className="medium-font package-btn-bg p-2 rounded font-white fw-semibold">
                    Discount
                  </div>
                  <input
                    className="medium-font package-btn-bg p-2 rounded mt-1 font-grey"
                    placeholder="5% M"
                    name={item?.payloadObject?.discountPriceKey}
                    value={
                      inputData[item?.payloadObject?.discountPriceKey] || ""
                    }
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
              </div>
            </div>
            <div className="w-10 d-flex align-items-center justify-content-center blue-btn font-white px-2 py-2 rounded">
              <div
                disabled={isProcessing}
                onClick={() =>
                  handleSubmitPackageCreation(
                    item?.payloadObject,
                    item?.packagename,
                    index
                  )
                }
              >
                Submit
              </div>
            </div>
          </div>

          {err && activeIndex === index && (
            <div className="error-message mb-1 text-center red-text">{err}</div>
          )}
          <hr className="hr-line mt-3" />
        </div>
      ))}
      <MatchSubmitPopup
        header={"Package Created Successfully"}
        state={showSuccessfulPopup}
        setState={setShowSuccessfulPopup}
      />
    </div>
  );
}

export default PackageUpgrade;
