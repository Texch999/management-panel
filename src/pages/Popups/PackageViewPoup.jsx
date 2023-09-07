import { Col, Container, Modal, Row } from "react-bootstrap";
import { Button, Table, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { PiArrowsOutLight } from "react-icons/pi";
import MatchSubmitPopup from "../../matchpopups/MatchSubmitPopup";
function PackageViewPoup(props) {
  const { showPackageUpgrade, setShowPackageUpgrade } = props;
  const handleAdminTicketPopupClose = () => {
    setShowPackageUpgrade(false);
  };
  const [acceptClick, setAcceptClick] = useState(false);
  const handleAcceptClickPopupOpen = () => {
    setAcceptClick(true);
    setShowPackageUpgrade(false);
  };

  const selectReasons = [
    { header: "Insufficient Balance" },
    { header: "Payment Not Verified" },
    { header: "Wrong Payment Slip" },
  ];
  const tableData = [
    {
      package: "Standard",
      purchase: "2",
      price: "4000",
      returnpkg: "2",
      retrunhrs: "400",
    },
    {
      package: "Silver",
      purchase: "5",
      price: "10000",
      returnpkg: "2",
      retrunhrs: "1000",
    },
    {
      package: "Gold",
      purchase: "10",
      price: "15000",
      returnpkg: "4",
      retrunhrs: "1500",
    },
    {
      package: "Diamond",
      purchase: "20",
      price: "20000",
      returnpkg: "8",
      retrunhrs: "2000",
    },
    {
      package: "VIP",
      purchase: "25",
      price: "20000",
      returnpkg: "10",
      retrunhrs: "2000",
    },
  ];
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
              <div>#trx-id-20230713134510227530</div>
            </div>
            <div className="d-flex flex-row w-100 custom-select small-font input-btn-bg rounded align-items-center justify-content-between my-2 px-2 py-2">
              <div className="font-grey">Reference ID</div>
              <div>mast-20221219180735153168</div>
            </div>
            <div className="d-flex flex-column px-2 input-btn-bg rounded">
              <div className="d-flex flex-row justify-content-between small-font  all-none  align-items-center justify-content-between my-1 ">
                <div className="font-grey">Amount</div>
                <div>20000</div>
              </div>
              <div className="d-flex flex-row justify-content-between small-font  all-none  align-items-center justify-content-between my-1 ">
                <div className="font-grey">Payment Method</div>
                <div>UPI</div>
              </div>
              <div className="d-flex flex-row justify-content-between small-font  all-none  align-items-center justify-content-between my-1 ">
                <div className="font-grey">From</div>
                <div>Srinivas-Sub Admin</div>
              </div>
              <div className="d-flex flex-row justify-content-between small-font  all-none  align-items-center justify-content-between my-1 ">
                <div className="font-grey">To</div>
                <div>Jayanta-Admin</div>
              </div>
              <div className="d-flex flex-row justify-content-between small-font  all-none  align-items-center justify-content-between my-1 ">
                <div className="font-grey">Time</div>
                <div>2023-07-13, 13:45:10 PM</div>
              </div>
            </div>
            <div className="w-100 my-1 relative-position">
              <img
                className="w-100 h9vh rounded"
                src={process.env.PUBLIC_URL + "./assets/dog_imge.jpg"}
              />
              <PiArrowsOutLight className="zoom-icon" />
            </div>
            <Container fluid className="my-1 w-100">
              <Row>
                <Col className="ps-0">
                  <Dropdown
                    size="lg"
                    className="user-dropdown-toggle custom-button-drop small-font mt-2"
                  >
                    <Dropdown.Toggle className="w-100">
                      <div className="d-flex align-itens-center justify-content-between p-1">
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
                          {tableData.map((item, index) => (
                            <tr key={index} className="text-center">
                              <td>{item.package}</td>
                              <td>{item.purchase}</td>
                              <td>{item.price}</td>
                              <td>{item.returnpkg}</td>
                              <td>{item.retrunhrs}</td>
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
                              <span>62 = 150000</span>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                              <span>Return Pkg</span>
                              <span>26 = 30000</span>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                              <span>Return Hrs</span>
                              <span>26 = 30000</span>
                            </div>
                          </div>
                          <div className="d-flex flex-column w-50 mx-2 my-1">
                            <div className="d-flex flex-row justify-content-between">
                              <span>Discount</span>
                              <span>5% = 7500</span>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                              <span>Special Offer</span>
                              <span>5% = 7500</span>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                              <span>Paid Amount</span>
                              <span>105000</span>
                            </div>
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
                  >
                    <Dropdown.Toggle className="w-100">
                      <div className="d-flex align-itens-center justify-content-between p-1">
                        <div className="font-grey">Special Offer</div>
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
                          {tableData.map((item, index) => (
                            <tr key={index} className="text-center">
                              <td>{item.package}</td>
                              <td>{item.purchase}</td>
                              <td>{item.price}</td>
                              <td>{item.returnpkg}</td>
                              <td>{item.retrunhrs}</td>
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
                              <span>62 = 150000</span>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                              <span>Return Pkg</span>
                              <span>26 = 30000</span>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                              <span>Return Hrs</span>
                              <span>26 = 30000</span>
                            </div>
                          </div>
                          <div className="d-flex flex-column w-50 mx-2 my-1">
                            <div className="d-flex flex-row justify-content-between">
                              <span>Discount</span>
                              <span>5% = 7500</span>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                              <span>Special Offer</span>
                              <span>5% = 7500</span>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                              <span>Paid Amount</span>
                              <span>105000</span>
                            </div>
                          </div>
                        </div>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>
            </Container>
            <Container fluid className="my-1 w-100">
              <Row>
                <Col className="ps-0">
                  <Dropdown
                    size="lg"
                    className="user-dropdown-toggle custom-button-drop small-font mt-2"
                  >
                    <Dropdown.Toggle className="w-100">
                      <div className="d-flex align-itens-center justify-content-between p-1">
                        <div className="font-grey">Sports Chips</div>
                        <span style={{ float: "right" }} className="clr-yellow">
                          View
                        </span>
                      </div>
                    </Dropdown.Toggle>
                  </Dropdown>
                </Col>
                <Col className="pe-0">
                  <Dropdown
                    size="lg"
                    className="user-dropdown-toggle custom-button-drop small-font mt-2"
                  >
                    <Dropdown.Toggle className="w-100">
                      <div className="d-flex align-itens-center justify-content-between p-1">
                        <div className="font-grey">Casino Chips</div>
                        <span style={{ float: "right" }} className="clr-yellow">
                          View
                        </span>
                      </div>
                    </Dropdown.Toggle>
                  </Dropdown>
                </Col>
              </Row>
            </Container>
            <div>
              <select className="w-100 custom-select small-font input-btn-bg px-2 py-2 all-none rounded all-none my-2">
                <option selected>Select</option>
                <option>No Money</option>
                <option>Money Borrowed</option>
                <option>Insufficient Balance</option>
                <option>www.brahama.com</option>
              </select>
            </div>
            <div className="d-flex justify-content-between mt-3 w-100">
              <button
                type="submit"
                className="add-button  small-font rounded px-4 py-2 mx-2 w-50 all-none"
                onClick={() => handleAcceptClickPopupOpen()}
              >
                Approved
              </button>
              <button
                type="submit"
                className="deactive-button  small-font rounded px-4 py-2 mx-2 w-50 all-none"
                onClick={() => handleAdminTicketPopupClose()}
              >
                Rejected
              </button>
            </div>
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
