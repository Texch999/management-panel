import React, { useState } from "react";
import { PACKAGES_CREATION } from "../../config/endpoints";
import { call } from "../../config/axios";
import MatchSubmitPopup from "../../matchpopups/MatchSubmitPopup";

function TopupHoursDiscount(props) {
  const { selectedPackage, packageInputs } = props;
  const [inputData, setInputData] = useState({});
  const [err, setErr] = useState();
  const [isProcessing, setIsProcessing] = useState();
  const [successfulPopUp, setSuccessfulPopUp] = useState(false);
  const [activeIndex, setActiveIndex] = useState();

  const handleInputChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  console.log("PackageInputs===>", packageInputs);

  const handleSubmitPackageCreation = async (item, index) => {
    setActiveIndex(index);
    if (
      !(
        inputData[item?.userTextKey] &&
        inputData[item?.meetingTextKey] &&
        inputData[item?.numberOfMeetingsKey] &&
        inputData[item?.audioCallsKey] &&
        inputData[item?.monthlyHoursKey] &&
        inputData[item?.yearlyHoursKey] &&
        inputData[item?.monthlyPriceKey] &&
        inputData[item?.yearlyPriceKey] &&
        inputData[item?.monthlydiscountPriceKey] &&
        inputData[item?.yearlydiscountPriceKey]
      )
    ) {
      return setErr("Please enter required fields");
    }
    const string1 = inputData[item?.userTextKey] || "";
    const string2 = inputData[item?.meetingTextKey] || "";
    const string3 = inputData[item?.numberOfMeetingsKey] || "";
    const string4 = inputData[item?.audioCallsKey] || "";
    const payload = {
      string1: string1,
      string2: string2,
      string3: string3,
      string4: string4,
      created_date: "12:30:20 PM",
      created_time: "5/11/2023",
      expiry_time: "",
      website_name: packageInputs?.website_name,
      country_name: packageInputs?.country_name,
      package_type: {
        monthly: {
          pkg_hours: inputData[item?.monthlyHoursKey],
          price: inputData[item?.monthlyPriceKey],
          discount: inputData[item?.monthlydiscountPriceKey],
        },
        yearly: {
          pkg_hours: inputData[item?.yearlyHoursKey],
          price: inputData[item?.yearlyPriceKey],
          discount: inputData[item?.yearlydiscountPriceKey],
        },
      },
      status: "active",
    };
    console.log("payload====>", payload);
    setErr("");
    setIsProcessing(true);
    await call(PACKAGES_CREATION, payload)
      .then((res) => {
        if (res.data.statusCode === 200) {
          console.log("res====>", res);
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
  const TOPUP_HOURS_DATA = [
    {
      packagename: "Standard",
      packageId: "1",
      userText: "Join call with 10 users",
      meetingstext: "Use 5 personal meetings",
      numberOfMeetings: "Monthly 10 meetings",
      audioCalls: "Audio calls only",
      payloadObject: {
        userTextKey: "standard_user_text",
        meetingTextKey: "standard_meeting_text",
        numberOfMeetingsKey: "standard_num_of_meetings",
        audioCallsKey: "standard_audio_calls",
        monthlyHoursKey: "standard_monthly_Hours",
        yearlyHoursKey: "standard_yearly_Hours",
        monthlyPriceKey: "standard_monthly_Price",
        yearlyPriceKey: "standard_yearly_Price",
        monthlydiscountPriceKey: "standard_monthly_discount_Price",
        yearlydiscountPriceKey: "standard_yearly_discount_Price",
      },
    },
    {
      packagename: "Silver",
      packageId: "2",
      userText: "Join call with 10 users",
      meetingstext: "Use 5 personal meetings",
      numberOfMeetings: "Monthly 10 meetings",
      audioCalls: "Audio calls only",
      payloadObject: {
        userTextKey: "silver_user_text",
        meetingTextKey: "silver_meeting_text",
        numberOfMeetingsKey: "silver_num_of_meetings",
        audioCallsKey: "silver_audio_calls",
        monthlyHoursKey: "silver_monthly_Hours",
        yearlyHoursKey: "silver_yearly_Hours",
        monthlyPriceKey: "silver_monthly_Price",
        yearlyPriceKey: "silver_yearly_Price",
        monthlydiscountPriceKey: "silver_monthly_discount_Price",
        yearlydiscountPriceKey: "silver_yearly_discount_Price",
      },
    },
    {
      packagename: "Gold",
      packageId: "3",
      userText: "Join call with 10 users",
      meetingstext: "Use 5 personal meetings",
      numberOfMeetings: "Monthly 10 meetings",
      audioCalls: "Audio calls only",
      payloadObject: {
        userTextKey: "gold_user_text",
        meetingTextKey: "gold_meeting_text",
        numberOfMeetingsKey: "gold_num_of_meetings",
        audioCallsKey: "gold_audio_calls",
        monthlyHoursKey: "gold_monthly_Hours",
        yearlyHoursKey: "gold_yearly_Hours",
        monthlyPriceKey: "gold_monthly_Price",
        yearlyPriceKey: "gold_yearly_Price",
        monthlydiscountPriceKey: "gold_monthly_discount_Price",
        yearlydiscountPriceKey: "gold_yearly_discount_Price",
      },
    },
    {
      packagename: "Diamond",
      packageId: "4",
      userText: "Join call with 10 users",
      meetingstext: "Use 5 personal meetings",
      numberOfMeetings: "Monthly 10 meetings",
      audioCalls: "Audio calls only",
      payloadObject: {
        userTextKey: "diamond_user_text",
        meetingTextKey: "diamond_meeting_text",
        numberOfMeetingsKey: "diamond_num_of_meetings",
        audioCallsKey: "diamond_audio_calls",
        monthlyHoursKey: "diamond_monthly_Hours",
        yearlyHoursKey: "diamond_yearly_Hours",
        monthlyPriceKey: "diamond_monthly_Price",
        yearlyPriceKey: "diamond_yearly_Price",
        monthlydiscountPriceKey: "diamond_monthly_discount_Price",
        yearlydiscountPriceKey: "diamond_yearly_discount_Price",
      },
    },
    {
      packagename: "Vip",
      packageId: "5",
      userText: "Join call with 10 users",
      meetingstext: "Use 5 personal meetings",
      numberOfMeetings: "Monthly 10 meetings",
      audioCalls: "Audio calls only",
      payloadObject: {
        userTextKey: "vip_user_text",
        meetingTextKey: "vip_meeting_text",
        numberOfMeetingsKey: "vip_num_of_meetings",
        audioCallsKey: "vip_audio_calls",
        monthlyHoursKey: "vip_monthly_Hours",
        yearlyHoursKey: "vip_yearly_Hours",
        monthlyPriceKey: "vip_monthly_Price",
        yearlyPriceKey: "vip_yearly_Price",
        monthlydiscountPriceKey: "vip_monthly_discount_Price",
        yearlydiscountPriceKey: "vip_yearly_discount_Price",
      },
    },
  ];

  const selectPackage =
    selectedPackage === "all"
      ? TOPUP_HOURS_DATA
      : TOPUP_HOURS_DATA.filter((i) => i.packageId === selectedPackage);
  return (
    <div className="W-100 medium-font font-grey package-bg p-3 package-radius package-input">
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
                    onChange={(e) => {
                      handleInputChange(e);
                    }}
                  />
                </div>
              </div>
              <div className="col">
                <div>
                  <div className="medium-font package-btn-bg p-2 rounded font-white fw-semibold">
                    Bulk Hours
                  </div>
                  <input
                    placeholder="50 M"
                    className="medium-font package-btn-bg p-2 rounded mt-1 font-grey"
                    name={item?.payloadObject?.monthlyHoursKey}
                    value={
                      inputData[item?.payloadObject?.monthlyHoursKey] || ""
                    }
                    onChange={(e) => handleInputChange(e)}
                  />
                  <input
                    className="medium-font package-btn-bg p-2 rounded mt-1 font-grey"
                    placeholder="100 Y"
                    name={item?.payloadObject?.yearlyHoursKey}
                    value={inputData[item?.payloadObject?.yearlyHoursKey] || ""}
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
                    name={item?.payloadObject?.monthlyPriceKey}
                    value={
                      inputData[item?.payloadObject?.monthlyPriceKey] || ""
                    }
                    onChange={(e) => handleInputChange(e)}
                  />
                  <input
                    className="medium-font package-btn-bg p-2 rounded mt-1 font-grey"
                    placeholder="50000 Y"
                    name={item?.payloadObject?.yearlyPriceKey}
                    value={inputData[item?.payloadObject?.yearlyPriceKey] || ""}
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
                    name={item?.payloadObject?.monthlydiscountPriceKey}
                    value={
                      inputData[item?.payloadObject?.monthlydiscountPriceKey] ||
                      ""
                    }
                    onChange={(e) => handleInputChange(e)}
                  />
                  <input
                    className="medium-font package-btn-bg p-2 rounded mt-1 font-grey"
                    placeholder="10% Y"
                    name={item?.payloadObject?.yearlydiscountPriceKey}
                    value={
                      inputData[item?.payloadObject?.yearlydiscountPriceKey] ||
                      ""
                    }
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
              </div>
            </div>
            <div className="w-10 d-flex align-items-center justify-content-center blue-btn font-white px-2 py-2 rounded">
              <div
                type="button"
                disabled={isProcessing}
                onClick={() =>
                  handleSubmitPackageCreation(item?.payloadObject, index)
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
        header={"Top Up Hours Successfully Created"}
        state={successfulPopUp}
        setState={setSuccessfulPopUp}
      />
    </div>
  );
}

export default TopupHoursDiscount;
