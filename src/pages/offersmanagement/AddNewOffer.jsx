import React from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import OfferPosterAdds from "./OfferPosterAdds";

function AddNewOffer() {
  const navigate = useNavigate();
  return (
    <div className="p-4 w-100">
      <div className="button-bg w-100">
        <div className="d-flex justify-content-start">
          <MdOutlineArrowBackIosNew
            className="upload-icon me-3"
            onClick={() => navigate("/offersmanagement")}
          />
          <div className="medium-font clr-white ms-3">Create New Offers</div>
        </div>
      </div>
      <div className="sidebar-bg rounded mt-2">
        <OfferPosterAdds />
      </div>
    </div>
  );
}

export default AddNewOffer;
