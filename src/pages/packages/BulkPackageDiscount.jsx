import { useState } from "react";
import { PACKAGES_CREATION } from "../../config/endpoints";
import { call } from "../../config/axios";
import { Images } from "./../../images/index";
import MatchSubmitPopup from "../../matchpopups/MatchSubmitPopup";

function BulkPackageDiscount(props) {
  const { selectedPackage, packageInputs } = props;
  const [isProcessing, setIsProcessing] = useState(false);
  const [err, setErr] = useState();
  const [inputData, setInputData] = useState({});
  const [successfulPopUp, setSuccessfulPopUp] = useState(false);
  const [activeIndex, setActiveIndex] = useState();
  const [selectedDuration, setSelectedDuration] = useState("monthly");
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
    console.log("item=====>", item);

    const payload = {
      package_cost: inputData[item?.priceKey],
      package_duration: selectedDuration,
      discount: inputData[item?.discountPriceKey],
      monthlybulkPackagesKey: inputData[item?.monthlybulkPackagesKey],
      package_limits: {
        members: inputData[item?.membersKey],
        duration: inputData[item?.hoursKey],
        join_call_with_users: inputData[item?.userTextKey],
        personal_meetings: inputData[item?.meetingTextKey],
        meetings: inputData[item?.numberOfMeetingsKey],
        audio_calls: inputData[item?.audioCallsKey],
      },
      package_name: packageName,
      status: "active",
      website: packageInputs?.website_name || 0,
      country_name: packageInputs?.country_name || 0,
    };
    setErr("");
    setIsProcessing(true);
    await call(PACKAGES_CREATION, payload)
      .then((res) => {
        if (res.data.statusCode === 200) {
          setSuccessfulPopUp(true)
          setTimeout(()=>{
            setSuccessfulPopUp(false)
          },2000)
          setIsProcessing(false);
          setInputData({});
        } else {
          setErr(
            res?.data?.message ? res?.data?.message : `something wen't wrong`
          );
        }
      })
      .catch((err) => {
        setIsProcessing(false);
        setErr(`something wen't wrong`);
        console.log(err);
      });
    setSuccessfulPopUp(true);
  };
  const BULK_PACKAGES_DATA = [
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
        monthlybulkPackagesKey: "standard_monthly_bulk_packages",
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
        monthlybulkPackagesKey: "silver_monthly_bulk_packages",
        hoursKey: "silver_Hours",
        priceKey: "silver_Price",
        discountPriceKey: "silver_discount_Price",
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
        monthlybulkPackagesKey: "gold_monthly_bulk_packages",
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
        monthlybulkPackagesKey: "diamond_monthly_bulk_packages",
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
        monthlybulkPackagesKey: "vip_monthly_bulk_packages",
        hoursKey: "vip_Hours",
        priceKey: "vip_Price",
        discountPriceKey: "vip_discount_Price",
      },
    },
  ];

  const selectPackage =
    selectedPackage === "all"
      ? BULK_PACKAGES_DATA
      : BULK_PACKAGES_DATA.filter((i) => i.packageId === selectedPackage);

  const handleDurationChange = (obj) => {
    setSelectedDuration(obj);
  };
  const packageDurations = ["monthly", "yearly"];
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
              <div className="col-2">
                <div>
                  <div className="medium-font package-btn-bg p-2 rounded font-white fw-semibold">
                    Pkg & Features
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
                    Bulk Pkg
                  </div>
                  <input
                    className="medium-font package-btn-bg p-2 rounded mt-1 font-grey"
                    placeholder="20 M"
                    name={item?.payloadObject?.monthlybulkPackagesKey}
                    value={
                      inputData[item?.payloadObject?.monthlybulkPackagesKey] ||
                      ""
                    }
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
                    placeholder="5000 M"
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
        header={"Bulk Package Created Successfully"}
        state={successfulPopUp}
        isProcessing={isProcessing}
        setState={setSuccessfulPopUp}
      />
    </div>
  );
}

export default BulkPackageDiscount;
