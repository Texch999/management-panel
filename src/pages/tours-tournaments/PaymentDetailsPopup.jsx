import { Col, Container, Modal, Row } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { PiArrowsOutLight } from "react-icons/pi";
import MatchSubmitPopup from "../../matchpopups/MatchSubmitPopup";
import { GET_SETTINGS_DATA, UPDATE_TOUR_PAYMENTS_DOCUMENTS } from "../../config/endpoints";
import { call } from "../../config/axios";
import PaymentImagePopup from "../tours-tournaments/PaymentImagePopup";

function PaymentDetailsPopup(props) {
  const {
    showPaymentDetailsPopup,
    setShowPaymentDetailsPopup,
    changeStatusonPopupClosing,
    guestDetails,
  } = props;
  const [updatePayment, setUpdatePayment] = useState({});
  const [rejected, setRejected] = useState(false);
  const [showScreenshotImg, setShowScreenshotImg] = useState(false);
  // console.log(updatePayment, ".....updatepayment");

  const handleShowImg = () => {
    setShowScreenshotImg(true);
  };
  const [rejectionDropDown, setRejectionDropDown] = useState([]);
  const handleAdminTicketPopupClose = () => {
    setShowPaymentDetailsPopup(false);
    setUpdatePayment({})
    setRejected(false)
    changeStatusonPopupClosing()
  };
  const [acceptClick, setAcceptClick] = useState(false);
  // console.log(guestDetails, "......guestdetails");

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
      [e.target.name]: e.target.value,
    });
  };
  const handleOnclick = (val) => {
    setUpdatePayment({
      ...updatePayment,
      confirmationStatus: val,
    });
    if (val == "Rejected") {
      setRejected(true);
    }
    if (val == "Approved") {
      setRejected(false);
    }
  };
  const handleSubmit = async()=>{
    const rejectionReason = updatePayment.confirmationStatus == "Rejected" ? updatePayment.rejectionReason : false ;
    const payload = {
      confirm_payment_status: updatePayment.confirmationStatus,
      paid_amount: updatePayment.amountPaid,
      rejection_reason: rejectionReason,
      tour_payment_id: guestDetails.tour_payment_id
    }
    // console.log(payload,'......payload')
    await call(UPDATE_TOUR_PAYMENTS_DOCUMENTS, payload)
            .then((res)=>console.log(res,'.....res'))
            .catch((error)=>console.log(error))
    changeStatusonPopupClosing()
    setUpdatePayment({})
    setRejected(false)
    setShowPaymentDetailsPopup(false)
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
                {guestDetails?.name}
                <button className="yellow-btn rounded clr-orange mx-2 px-2 py-1">
                  {guestDetails?.account_role}
                </button>
                <div className="rounded-pill small-font px-3 py-1 completed-btn">
                  Deposit
                </div>
                <div className="rounded-pill small-font px-3 py-1 completed-btn">
                  {guestDetails?.website}
                </div>
              </div>
            </div>
            <div className="d-flex flex-column px-2 input-btn-bg rounded">
              <div className="d-flex flex-row justify-content-between small-font  all-none  align-items-center justify-content-between my-1 ">
                <div className="font-grey">Amount To Be Paid</div>
                <div className="font-grey">{guestDetails?.total_amount}</div>
              </div>
              <div className="d-flex flex-row justify-content-between small-font  all-none  align-items-center justify-content-between my-1 ">
                <div className="font-grey">Payment Method</div>
                <div className="font-grey">
                  {guestDetails?.payment_details?.paymentmode}
                </div>
              </div>
              <div className="d-flex flex-row justify-content-between small-font  all-none  align-items-center justify-content-between my-1 ">
                <div className="font-grey">Paid To</div>
                <div className="font-grey">
                  {guestDetails?.payment_details?.name}
                </div>
              </div>
              <div className="d-flex flex-row justify-content-between small-font  all-none  align-items-center justify-content-between my-1 ">
                <div className="font-grey">
                  {guestDetails?.payment_details?.paymentmode === "neft"
                    ? "Account No"
                    : "Mobile Number"}
                </div>
                <div className="font-grey">
                  {guestDetails?.payment_details?.paymentmode === "neft"
                    ? guestDetails?.payment_details?.accountNo
                    : guestDetails?.payment_details?.mobileNumber}
                </div>
              </div>
              <div className="d-flex flex-row justify-content-between small-font  all-none  align-items-center justify-content-between my-1 ">
                <div className="font-grey">
                  {guestDetails?.payment_details?.paymentmode === "neft"
                    ? "IFSC Code"
                    : "UPI Id"}
                </div>
                <div className="font-grey">
                  {guestDetails?.payment_details?.paymentmode === "neft"
                    ? guestDetails?.payment_details?.ifscCode
                    : guestDetails?.payment_details?.upiId}
                </div>
              </div>
              {guestDetails?.payment_details?.paymentmode === "neft" && (
                <div className="d-flex flex-row justify-content-between small-font  all-none  align-items-center justify-content-between my-1 ">
                  <div className="font-grey">Bank</div>
                  <div className="font-grey">
                    {guestDetails?.payment_details?.bank}
                  </div>
                </div>
              )}
            </div>
            <div className="w-100 my-2 relative-position">
              <img
                className="w-100 h15vh rounded"
                src={guestDetails.payment_screenshot}
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
                onChange={(e) => handleOnchange(e)}
              ></input>
            </div>
            <div className="d-flex flex-row justify-content-between small-font  all-none  align-items-center justify-content-between my-2 ">
              <button
                className="btn btn-success btn-sm"
                name="confirmationStatus"
                onClick={() => handleOnclick("Approved")}
              >
                Approve
              </button>
              <button
                className="btn btn-danger btn-sm"
                name="confirmationStatus"
                onClick={() => handleOnclick("Rejected")}
              >
                Reject
              </button>
            </div>
            {rejected && (
              <div>
                <div className="d-flex flex-row justify-content-between small-font  all-none  align-items-center justify-content-between">
                  <div className="font-grey">Select reason for rejection</div>
                </div>
                <div>
                  <select
                    id="reason"
                    name="rejectionReason"
                    value={updatePayment.rejectionReason || ""}
                    onChange={(e) => handleOnchange(e)}
                    className="w-100 custom-select small-font input-btn-bg px-2 py-2 all-none rounded all-none my-1"
                  >
                    <option value="">Select</option>

                    {rejectionDropDown?.map((obj) => (
                      <option value={obj.reason}>{obj.reason}</option>
                    ))}
                  </select>
                </div>
                <div className="d-flex flex-row justify-content-between small-font  all-none  align-items-center justify-content-between">
                  <div className="font-grey">OR</div>
                </div>
                <div className="d-flex flex-row justify-content-between small-font  all-none  align-items-center justify-content-between">
                  <div className="font-grey">
                    Enter reason for rejection manually
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="Enter"
                  name="rejectionReason"
                  value={updatePayment.rejectionReason || ""}
                  onChange={(e) => handleOnchange(e)}
                  className="w-100 custom-select small-font input-btn-bg px-2 py-2 all-none rounded all-none my-1"
                ></input>
              </div>
            )}
            {/* {transactionData?.status === "pending" ? (
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
                you have already{" "}
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
            )} */}
            <div className="d-flex justify-content-center align-items-center py-1">
              <div className="btn btn-primary"
                    onClick={()=>handleSubmit()}
              >Submit</div>
            </div>
          </div>
        </Modal.Header>
      </Modal>
      <PaymentImagePopup
        showScreenshotImg={showScreenshotImg}
        setShowScreenshotImg={setShowScreenshotImg}
        imageurl={guestDetails.payment_screenshot}
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
