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
  const handleInputChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmitPackageCreation = async (item, packageName, index) => {
    setActiveIndex(index);
    if (
      !(
        inputData[item?.membersKey] &&
        inputData[item?.monthlyHoursKey] &&
        inputData[item?.yearlyHoursKey] &&
        inputData[item?.monthlyPriceKey] &&
        inputData[item?.yearlyPriceKey] &&
        inputData[item?.monthlydiscountPriceKey] &&
        inputData[item?.yearlydiscountPriceKey] &&
        inputData[item?.monthlybulkPackagesKey] &&
        inputData[item?.yearlybulkPackagesKey]
      )
    ) {
      return setErr("Please enter required fields");
    }
    console.log("item=====>", item);

    const payload = {
      created_date: "12:30:20 PM",
      created_time: "5/11/2023",
      expiry_time: "5/11/2023",
      is_autherised: "true",
      monthly_package: {
        monthly_pack: inputData[item?.monthlybulkPackagesKey],
        montly_package_cost: inputData[item?.monthlyPriceKey],
        montly_package_hours: inputData[item?.monthlyHoursKey],
        montly_package_discount: inputData[item?.monthlydiscountPriceKey],
      },
      yearly_package: {
        yearly_pack: inputData[item?.yearlybulkPackagesKey],
        yearly_package_cost: inputData[item?.yearlyPriceKey],
        yearly_package_hours: inputData[item?.yearlyHoursKey],
        yearly_package_discount: inputData[item?.yearlydiscountPriceKey],
      },
      package_limits: {
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
        yearlybulkPackagesKey: "standard_yearly_bulk_packages",
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
        yearlybulkPackagesKey: "silver_yearly_bulk_packages",
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
        yearlybulkPackagesKey: "gold_yearly_bulk_packages",
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
        yearlybulkPackagesKey: "diamond_yearly_bulk_packages",
        monthlyHoursKey: "diamond_monthly_Hours",
        yearlyHoursKey: "diamond_yearly_Hours",
        monthlyPriceKey: "diamond_monthly_Price",
        yearlyPriceKey: "diamond_yearly_Price",
        monthlydiscountPriceKey: "diamond_monthly_discount_Price",
        yearlydiscountPriceKey: "diamond_yearly_discount_Price",
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
        yearlybulkPackagesKey: "vip_yearly_bulk_packages",
        membersKey: "vip_members",
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
      ? BULK_PACKAGES_DATA
      : BULK_PACKAGES_DATA.filter((i) => i.packageId === selectedPackage);
  return (
    <div className="W-100 medium-font font-grey package-bg p-3 package-radius package-input">
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
                  <input
                    className="medium-font package-btn-bg p-2 rounded mt-1 font-grey"
                    placeholder="10 Y"
                    name={item?.payloadObject?.yearlybulkPackagesKey}
                    value={
                      inputData[item?.payloadObject?.yearlybulkPackagesKey] ||
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
                    name={item?.payloadObject?.monthlyHoursKey}
                    value={
                      inputData[item?.payloadObject?.monthlyHoursKey] || ""
                    }
                    onChange={(e) => handleInputChange(e)}
                  />
                  <input
                    className="medium-font package-btn-bg p-2 rounded mt-1 font-grey"
                    placeholder="4800 Hours"
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
                    placeholder="15% Y"
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
