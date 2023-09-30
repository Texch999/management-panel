import { Images } from "./../../images/index";
import { MdFileUpload } from "react-icons/md";

function PackageUpgrade() {
  const PACKAGES_DATA = [
    {
      packagename: "Standard",
      packageLogo: Images.StandardSmallImg,
      userText: "Join call with 10 users",
      meetingstext: "Use 5 personal meetings",
      numberOfMeetings: "Monthly 10 meetings",
      audioCalls: "Audio calls only",
      members: 10,
    },
    {
      packagename: "Silver",
      packageLogo: Images.SilverSmallImg,
      userText: "Join call with 10 users",
      meetingstext: "Use 5 personal meetings",
      numberOfMeetings: "Monthly 10 meetings",
      audioCalls: "Audio calls only",
      members: 15,
    },
    {
      packagename: "Gold",
      packageLogo: Images.GoldSmallImg,
      userText: "Join call with 10 users",
      meetingstext: "Use 5 personal meetings",
      numberOfMeetings: "Monthly 10 meetings",
      audioCalls: "Audio calls only",
      members: 20,
    },
  ];
  return (
    <div className="W-100 medium-font font-grey package-bg p-3 package-radius">
      {PACKAGES_DATA?.map((item, index) => (
        <div key={index} className="mt-3">
          <div className="d-flex">
            <div className="row w-90">
              <div className="col-3">
                <div>
                  <div className="medium-font package-btn-bg p-2 rounded font-white fw-semibold">
                    Package & Features
                  </div>
                  <div className="medium-font package-heading-bg p-2 rounded mt-1 font-orange">
                    {item?.packagename}
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
                    {item?.members}
                  </div>
                </div>
              </div>
              <div className="col">
                <div>
                  <div className="medium-font package-btn-bg p-2 rounded font-white fw-semibold">
                    Package Hours
                  </div>
                  <div className="medium-font package-btn-bg p-2 rounded mt-1 font-grey">
                    48 Hours
                  </div>
                  <div className="medium-font package-btn-bg p-2 rounded mt-1 font-grey">
                    4800 Hours
                  </div>
                </div>
              </div>
              <div className="col">
                <div>
                  <div className="medium-font package-btn-bg p-2 rounded font-white fw-semibold">
                    Price
                  </div>

                  <div className="medium-font package-btn-bg p-2 rounded mt-1 font-grey d-flex align-items-center justify-content-between">
                    <span>{item?.package_cost}</span> <span>M</span>
                  </div>
                  <div className="medium-font package-btn-bg p-2 rounded mt-1 font-grey d-flex align-items-center justify-content-between">
                    <span>45000</span> <span>Y</span>
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
      ))}
    </div>
  );
}

export default PackageUpgrade;
