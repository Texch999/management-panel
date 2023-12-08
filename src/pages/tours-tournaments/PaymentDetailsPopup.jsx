import { Col, Container, Modal, Row } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { PiArrowsOutLight } from "react-icons/pi";
import MatchSubmitPopup from "../../matchpopups/MatchSubmitPopup";
import { GET_SETTINGS_DATA } from "../../config/endpoints";
import { call } from "../../config/axios";
import ShowImagePopup from "../Popups/ShowImagePopup";
function PaymentDetailsPopup(props) {
  const {
    showPaymentDetailsPopup,
    setShowPaymentDetailsPopup,
    transactionData = {},
    isProcessing,
    handleSuccessfullPopup,
    guestDetails
  } = props;
  const [updatePayment, setUpdatePayment] = useState({})
  const [showScreenshotImg, setShowScreenshotImg] = useState(false);
  console.log(updatePayment,'.....updatepayment')

  const handleShowImg = () => {
    setShowScreenshotImg(true);
  };
  const [rejectionDropDown, setRejectionDropDown] = useState([]);
  const handleAdminTicketPopupClose = () => {
    setShowPaymentDetailsPopup(false);
  };
  const [acceptClick, setAcceptClick] = useState(false);
  const paymentDetails = guestDetails.payment_details
  console.log(paymentDetails,'......paymentdetails')

  const getAllRejections = async () => {
    const payload = {
      p_id: "REJECT-REASON",
    };
    await call(GET_SETTINGS_DATA, payload)
      .then((res) => {
        setRejectionDropDown(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getAllRejections();
  }, []);

  const handleOnchange = (e) => {
    setUpdatePayment({
        ...updatePayment,
        [e.target.name] : e.target.value
    })
  }
  const handleOnclick = (val)  =>{
    setUpdatePayment({
        ...updatePayment,
        confirmationStatus : val
    })
  }

  return (
    <div className="modal fade bd-example-modal-lg container mt-5">
      <Modal
        size="md"
        show={showPaymentDetailsPopup}
        onHide={handleAdminTicketPopupClose}
        centered
        className="match-share-modal payment-modal"
      >
        <Modal.Header closeButton>
          <div className="w-100 p-4 flex-columnn relative-position">
            <div className="d-flex justify-content-start py-2">
              <div className="w-25 small-font d-flex align-items-center ">
                {guestDetails.name}
                <button className="yellow-btn rounded clr-orange mx-2 px-2 py-1">
                {guestDetails.account_role}
                </button>
                <div className="rounded-pill small-font px-3 py-1 completed-btn">
                  Deposit
                </div>
                <div className="rounded-pill small-font px-3 py-1 completed-btn">
                {guestDetails.website}
                </div>
              </div>
            </div>
            <div className="d-flex flex-column px-2 input-btn-bg rounded">
              <div className="d-flex flex-row justify-content-between small-font  all-none  align-items-center justify-content-between my-1 ">
                <div className="font-grey">Amount To Be Paid</div>
                <div className="font-grey">{guestDetails.total_amount}</div>
              </div>
              <div className="d-flex flex-row justify-content-between small-font  all-none  align-items-center justify-content-between my-1 ">
                <div className="font-grey">Payment Method</div>
                <div className="font-grey">{guestDetails.payment_details.paymentmode}</div>
              </div>
              <div className="d-flex flex-row justify-content-between small-font  all-none  align-items-center justify-content-between my-1 ">
                <div className="font-grey">Paid To</div>
                <div className="font-grey">{guestDetails.payment_details.name}</div>
              </div>
              <div className="d-flex flex-row justify-content-between small-font  all-none  align-items-center justify-content-between my-1 ">
                <div className="font-grey">{guestDetails.payment_details.paymentmode==="neft"?"Account No":"Mobile Number"}</div>
                <div className="font-grey">
                    {guestDetails.payment_details.paymentmode==="neft"?
                    guestDetails.payment_details.accountNo : guestDetails.payment_details.mobileNumber}</div>
              </div>
              <div className="d-flex flex-row justify-content-between small-font  all-none  align-items-center justify-content-between my-1 ">
                <div className="font-grey">{guestDetails.payment_details.paymentmode==="neft"?"IFSC Code":"UPI Id"}</div>
                <div className="font-grey">
                    {guestDetails.payment_details.paymentmode==="neft"?
                    guestDetails.payment_details.ifscCode : guestDetails.payment_details.upiId}
                </div>
              </div>
              {guestDetails.payment_details.paymentmode==="neft" && 
              (<div className="d-flex flex-row justify-content-between small-font  all-none  align-items-center justify-content-between my-1 ">
                <div className="font-grey">Bank</div>
                <div className="font-grey">{guestDetails.payment_details.bank}</div>
              </div>)}
            </div>
            <div className="w-100 my-2 relative-position">
              <img
                className="w-100 h15vh rounded"
                src={process.env.PUBLIC_URL + "./assets/dog_imge.jpg"}
                alt=""
              />
              <PiArrowsOutLight
                className="zoom-icon"
                onClick={() => handleShowImg()}
              />
            </div>
            <div className="d-flex flex-row justify-content-between small-font  all-none  align-items-center justify-content-between my-2 ">
              <div className="font-grey">Amount Paid</div>
              <input
                type="text"
                placeholder="Enter Amount Paid"
                className="w-75 custom-select small-font input-btn-bg px-2 py-2 all-none rounded all-none my-1"
                name="amountPaid"
                value={updatePayment.amountPaid || ""}
                onChange={(e)=>handleOnchange(e)}
              ></input>
            </div>
            <div className="d-flex flex-row justify-content-between small-font  all-none  align-items-center justify-content-between my-2 ">
              <button className="btn btn-success btn-sm"
                      name="confirmationStatus"
                      onClick={()=>handleOnclick("Approve")}
              >Approve</button>
              <button className="btn btn-danger btn-sm"
                      name="confirmationStatus"
                      onClick={()=>handleOnclick("Reject")}
              >Reject</button>
            </div>
            <div className="d-flex flex-row justify-content-between small-font  all-none  align-items-center justify-content-between ">
              <div className="font-grey">Select reason for rejection</div>
            </div>
            <div>
              <select
                id="reason"
                name="rejectionReason"
                value={updatePayment.rejectionReason || ""}
                onChange={(e)=>handleOnchange(e)}
                className="w-100 custom-select small-font input-btn-bg px-2 py-2 all-none rounded all-none my-1"
              >
                <option value="">Select</option>

                {rejectionDropDown?.map((obj) => (
                  <option value={obj.reason}>{obj.reason}</option>
                ))}
              </select>
            </div>
            <input
              type="text"
              placeholder="OR Mention Any Other Reason for Rejection"
              className="w-100 custom-select small-font input-btn-bg px-2 py-2 all-none rounded all-none my-1"
            ></input>
            {transactionData?.status === "pending" ? (
              <div className="d-flex justify-content-between mt-3 w-100">
                <button
                  type="submit"
                  className="add-button  small-font rounded px-4 py-2 mx-2 w-50 all-none"
                  onClick={() =>
                    handleSuccessfullPopup(
                      transactionData?.transaction_id,
                      transactionData.type,
                      "Approved"
                    )
                  }
                  disabled={isProcessing}
                >
                  {" "}
                  {isProcessing ? "Processing..." : "Accept"}{" "}
                </button>
                <button
                  type="submit"
                  className="deactive-button  small-font rounded px-4 py-2 mx-2 w-50 all-none"
                  onClick={() =>
                    handleSuccessfullPopup(
                      transactionData?.transaction_id,
                      transactionData.type,
                      "Reject"
                    )
                  }
                  disabled={isProcessing}
                >
                  {isProcessing ? "Processing..." : "Reject"}
                </button>
              </div>
            ) : (
              <div className="font-size-14 fw-600 mt-10 ml-10">
                {/* you have already{" "} */}
                <span
                  className={
                    transactionData.status === "Approved"
                      ? "green-clr"
                      : "red-clr"
                  }
                >
                  {transactionData.status}
                </span>
              </div>
            )}
            <div className="d-flex justify-content-center align-items-center py-1">
              <div className="btn btn-primary">Submit</div>
            </div>
          </div>
        </Modal.Header>
      </Modal>
      <ShowImagePopup
        showScreenshotImg={showScreenshotImg}
        setShowScreenshotImg={setShowScreenshotImg}
      />
      <MatchSubmitPopup
        header={"Ticket Upgraded Successfully"}
        state={acceptClick}
        setState={setAcceptClick}
      />
    </div>
  );
}

export default PaymentDetailsPopup;
