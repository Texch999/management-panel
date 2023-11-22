import { Col, Container, Modal, Row } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { PiArrowsOutLight } from "react-icons/pi";
import MatchSubmitPopup from "../../matchpopups/MatchSubmitPopup";
import {
  GET_ADMIN_PACKAGE_REQUEST,
  GET_REASON_REJECTIONS,
} from "../../config/endpoints";
import { call } from "../../config/axios";
function PackageViewPoup(props) {
  const {
    showPackageUpgrade,
    setShowPackageUpgrade,
    transactionData = {},
    isProcessing,
    handleSuccessfullPopup,
  } = props;

  const [saleTicket, setSaleTicket] = useState([]);
  const [rejectionDropDown, setRejectionDropDown] = useState([]);
  const handleAdminTicketPopupClose = () => {
    setShowPackageUpgrade(false);
  };
  const [acceptClick, setAcceptClick] = useState(false);
  // const handleAcceptClickPopupOpen = () => {
  //   setAcceptClick(true);
  //   setShowPackageUpgrade(false);
  // };

  const getAllsaleTickets = async () => {
    const payload = {
      register_id: "company",
    };
    await call(GET_ADMIN_PACKAGE_REQUEST, payload)
      .then((res) => {
        setSaleTicket(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllsaleTickets();
  }, []);

  const handelChange = (e) => {
    setSaleTicket({
      ...saleTicket,
      [e.target.name]: e.target.value,
    });
  };

  const getAllRejections = async () => {
    const payload = {
      p_id: "REJECT-REASON",
    };
    await call(GET_REASON_REJECTIONS, payload)
      .then((res) => {
        setRejectionDropDown(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getAllRejections();
  }, []);

  const tableData = transactionData?.requested_packages?.map((obj) => {
    return {
      packages: obj?.package_name,
      purchase: obj?.no_of_packages,
      price: obj?.package_cost,
      returnpkg: obj?.return_packages || 0,
      returnhrs: obj?.return_hrs || 0,
    };
  });
  const returnPackages = transactionData?.summary?.return_package_list?.map(
    (obj) => {
      return {
        packages: obj?.package_name,
        purchase: obj?.no_of_packages,
        price: obj?.no_of_packages * obj.cost,
        returnpkg: 0,
        returnhrs: obj?.return_hrs || 0,
      };
    }
  );

  const totalNoPackages = transactionData?.requested_packages?.reduce(
    (acc, obj) => acc + (obj?.no_of_packages || 0),
    0
  );
  const totalNoPackagesCost = transactionData?.requested_packages?.reduce(
    (acc, obj) => acc + (obj?.package_cost || 0),
    0
  );
  const totalNoReturnPackages =
    transactionData?.summary?.return_package_list?.reduce(
      (acc, obj) => acc + (obj?.selected_no_of_packages || 0),
      0
    );
  const totalNoReturnPackagesCost =
    transactionData?.summary?.return_package_list?.reduce(
      (acc, obj) => acc + (obj?.cost * obj?.selected_no_of_packages || 0),
      0
    );
  const totalPackagesDiscount = transactionData?.requested_packages?.reduce(
    (acc, obj) =>
      acc + obj.discount / transactionData?.requested_packages?.length,
    0
  );
  const afterPackDiscountTotalCost =
    totalNoPackagesCost - (totalNoPackagesCost * totalPackagesDiscount) / 100;
  const userDiscountCost =
    totalNoPackagesCost -
    (totalNoPackagesCost * transactionData?.summary?.user_discount) / 100;

  return (
    <div className="modal fade bd-example-modal-lg container mt-5">
      <Modal
        size="md"
        show={showPackageUpgrade}
        onHide={handleAdminTicketPopupClose}
        centered
        className="match-share-modal payment-modal"
      >
        <Modal.Header closeButton>
          <div className="w-100 p-4 flex-columnn relative-position">
            <div className="d-flex justify-content-start">
              <div className="w-25 small-font d-flex align-items-center ">
                Srinivas
                <button className="yellow-btn rounded clr-orange mx-2 px-2 py-1">
                  Director
                </button>
                <div className="rounded-pill small-font px-3 py-1 completed-btn">
                  Deposit
                </div>
              </div>
            </div>
            <div className="d-flex flex-row w-100 custom-select small-font input-btn-bg rounded align-items-center justify-content-between my-2 px-2 py-2">
              <div className="font-grey">Trx ID</div>
              <div>{transactionData?.transaction_id}</div>
            </div>
            <div className="d-flex flex-row w-100 custom-select small-font input-btn-bg rounded align-items-center justify-content-between my-2 px-2 py-2">
              <div className="font-grey">Reference ID</div>
              <div>{transactionData?.package_requester_id}</div>
            </div>
            <div className="d-flex flex-column px-2 input-btn-bg rounded">
              <div className="d-flex flex-row justify-content-between small-font  all-none  align-items-center justify-content-between my-1 ">
                <div className="font-grey">Amount</div>
                <div>{transactionData?.summary?.final_package_cost}</div>
              </div>
              <div className="d-flex flex-row justify-content-between small-font  all-none  align-items-center justify-content-between my-1 ">
                <div className="font-grey">Payment Method</div>
                <div>UPI</div>
              </div>
              <div className="d-flex flex-row justify-content-between small-font  all-none  align-items-center justify-content-between my-1 ">
                <div className="font-grey">From</div>
                {localStorage.getItem("user_name")}-
                {localStorage.getItem("account_role")}
              </div>
              <div className="d-flex flex-row justify-content-between small-font  all-none  align-items-center justify-content-between my-1 ">
                <div className="font-grey">To</div>
                {transactionData?.user_name}-
                {transactionData?.requested_account_role}
                {/* <div>Jayanta-Admin</div> */}
              </div>
              <div className="d-flex flex-row justify-content-between small-font  all-none  align-items-center justify-content-between my-1 ">
                <div className="font-grey">Time</div>
                {/* <div className="font-grey">{moment(requestedPackages?.created_date).format("DD-MM-yyyy")}{" "}
              {requestedPackages?.created_time}</div> */}
                <div>
                  {transactionData?.created_date}{" "}
                  {transactionData?.created_time}
                </div>
              </div>
            </div>
            <div className="w-100 my-1 relative-position">
              <img
                className="w-100 h9vh rounded"
                src={process.env.PUBLIC_URL + "./assets/dog_imge.jpg"}
                alt=""
              />
              <PiArrowsOutLight className="zoom-icon" />
            </div>
            <Container fluid className="my-1 w-100">
              <Row>
                <Col className="ps-0 col-12">
                  <Dropdown
                    size="lg"
                    className="user-dropdown-toggle custom-button-drop small-font mt-2"
                  >
                    <Dropdown.Toggle className="w-100">
                      <div className=" w-100 d-flex align-itens-center justify-content-between p-1">
                        <div className="font-grey">Package List</div>
                        <span style={{ float: "right" }} className="clr-yellow">
                          View
                        </span>
                      </div>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="custom-menu-item px-1">
                      <table className="w-100 match-position-table small-font clr-white">
                        <thead>
                          <tr className="text-center">
                            <td>Package</td>
                            <td>Purchase</td>
                            <td>Price</td>
                            <td>Return Pkg</td>
                            <td>Return Hrs</td>
                          </tr>
                        </thead>
                        <tbody>
                          {tableData?.map((item, index) => (
                            <tr key={index} className="text-center">
                              <td>{item.packages}</td>
                              <td>{item.purchase}</td>
                              <td>{item.price}</td>
                              <td>{item.returnpkg}</td>
                              <td>{item.returnhrs}</td>
                            </tr>
                          ))}
                          {returnPackages?.map((item, index) => (
                            <tr key={index} className="text-center">
                              <td>{item.packages}</td>
                              <td>{item.purchase}</td>
                              <td>{item.price}</td>
                              <td>{item.returnpkg}</td>
                              <td>{item.returnhrs}</td>
                            </tr>
                          ))}
                        </tbody>
                        <tfoot className="small-font justify-content-between w-100"></tfoot>
                      </table>
                      <Dropdown.Item className="rounded my-2 d-flex flex-row ps-0 pe-0">
                        <div className="d-flex flex-row w-100 justify-content-between small-font">
                          <div className="d-flex flex-column w-50 mx-2 my-1">
                            <div className="d-flex flex-row justify-content-between">
                              <span>Total Purchase</span>
                              <span>
                                {totalNoPackages}= {totalNoPackagesCost}
                              </span>
                            </div>{" "}
                            <div className="d-flex flex-row justify-content-between">
                              <span>Return Pkg</span>
                              <span>
                                {totalNoReturnPackages} ={" "}
                                {totalNoReturnPackagesCost}
                              </span>
                            </div>{" "}
                            <div className="d-flex flex-row justify-content-between">
                              <span>Return Hrs</span>
                              <span>26 = 30000</span>
                            </div>
                          </div>{" "}
                          <div className="d-flex flex-column w-50 mx-2 my-1">
                            <div className="d-flex flex-row justify-content-between">
                              <span>Discount</span>
                              <span>
                                {totalPackagesDiscount}% ={" "}
                                {afterPackDiscountTotalCost}
                              </span>
                            </div>{" "}
                            <div className="d-flex flex-row justify-content-between">
                              <span>Special Offer</span>
                              <span>
                                {transactionData?.summary?.user_discount}% ={" "}
                                {userDiscountCost}
                              </span>
                            </div>{" "}
                            <div className="d-flex flex-row justify-content-between">
                              <span>Paid Amount</span>
                              <span>
                                {transactionData?.summary?.final_package_cost}
                              </span>
                            </div>{" "}
                          </div>
                        </div>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
                <Col className="pe-0">
                  <Dropdown
                    size="lg"
                    className="user-dropdown-toggle custom-button-drop small-font mt-2"
                  ></Dropdown>
                </Col>
              </Row>
            </Container>
            <Container fluid className="my-1 w-100">
              <Row>
                <Col className="ps-0">
                  <Dropdown
                    size="lg"
                    className="user-dropdown-toggle custom-button-drop small-font mt-2"
                  ></Dropdown>
                </Col>
                <Col className="pe-0">
                  <Dropdown
                    size="lg"
                    className="user-dropdown-toggle custom-button-drop small-font mt-2"
                  ></Dropdown>
                </Col>
              </Row>
            </Container>
            <div>
              <select
                id="reason"
                name="reason"
                value={saleTicket?.reason || ""}
                onChange={(e) => handelChange(e)}
                className="w-100 custom-select small-font input-btn-bg px-2 py-2 all-none rounded all-none my-2"
              >
                <option value="">Select</option>

                {rejectionDropDown?.map((obj) => (
                  <option value={obj.reason}>{obj.reason}</option>
                ))}
              </select>
            </div>
            <hr />
            <input
              type="text"
              placeholder="Specify Others"
              className="upgrade-popup-box-container custom-box-shadow w-100 font-12 flex-space-between mt-10"
            ></input>{" "}
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
            )}
          </div>
        </Modal.Header>
      </Modal>
      <MatchSubmitPopup
        header={"Ticket Upgraded Successfully"}
        state={acceptClick}
        setState={setAcceptClick}
      />
    </div>
  );
}

export default PackageViewPoup;
