import React from "react";
import "./FarmerProfile.css";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import logo from "../../images/agrion-logo.png";
import ViewFarmerDetails from "../ViewFarmerDetailsComponent/ViewFarmerDetails";
import Buttons from "../ButtonsComponent/Buttons";
import EditFarmerDetails from "../EditFarmerDetailsComponent/EditFarmerDetails";

function FarmerProfile() {
  return (
    <div className="col-12 profile-details row mx-0">
      <div className="col h-100">
          <div className="row">
            <div className="profile-type-indicator py-1 px-3 col-12 col-md-8 mt-1">
                <span>Farmer Profile</span>
            </div>
            <div className="col-12 col-md-4 pt-2">
                <Link to="/profile/farmer/edit">
                    <Buttons  btnClass="btn-custom-green"buttonLabel="Edit"/>
                </Link>
            </div>
          </div>
          <Route path="/profile/farmer" exact component={ViewFarmerDetails} />
          <Route path="/profile/farmer/edit" exact component={EditFarmerDetails} />
      </div>
      <div className="col h-100 px-0">
          <div className="col mt-5 pt-3">
            <button className="btn profile-utilities-btn mb-3 mr-3">ID Random Investors to Connect with</button>
            <button className="btn profile-utilities-btn mb-3 mr-3">List of Current Investors</button>
            <button className="btn profile-utilities-btn mb-3 mr-3">Set Milestones for Funds Recieved</button>
            <button className="btn profile-utilities-btn mb-3 mr-3">Investment Details</button>
            <button className="btn profile-utilities-btn mb-3 mr-3">Investment Amount for that Cycle</button>
            <button className="btn profile-utilities-btn mb-3 mr-3">Remaining time in the Cycle</button>
          </div>
          <div className="col pt-3 visitor-utilities-con">
              <div className=""><button className="btn visitor-utilities-btn mb-3 mr-3">Invest</button></div>
              <div className=""><button className="btn visitor-utilities-btn mb-3 mr-3">Message Farmer</button></div>
              <div className=""><button className="btn visitor-utilities-btn mb-3 mr-3">Completed Projects</button></div>
          </div>
      </div>
    </div>
  );
}

export default FarmerProfile;
