import { Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import { Images } from "./../images/index";
function MatchDeclarationPopup(props) {
  const { header, amount, state, setState, handleSubmitPopupOpen } = props;
  const handleCancel = () => {
    setState(false);
  };
  return (
    <Modal className="match-declaration-modal" centered show={state}>
      <Modal.Header className="d-flex justify-content-end">
        <IoCloseSharp onClick={() => handleCancel()} />
      </Modal.Header>
      <Modal.Body>
        <center className="px-3">
          <img
            className="h-10vh"
            src={Images.QuestionMark}
            alt="Question_Mark"
          />
          <div className="fs-6 mt-3">{header}</div>
          <div className="fs-6 mt-3">{amount}</div>
          <div className="row d-flex justify-content-between mt-3">
            <div
              className="col-5 rounded blue-button p-1"
              onClick={handleSubmitPopupOpen}
            >
              Yes
            </div>
            <div
              className="col-5 rounded deactive-button p-1"
              onClick={() => handleCancel()}
            >
              No
            </div>
          </div>
        </center>
      </Modal.Body>
    </Modal>
  );
}

export default MatchDeclarationPopup;
