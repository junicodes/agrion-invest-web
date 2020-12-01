import React from "react";
import "./InvestorProfile.css";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import logo from '../../images/agrion-logo.png';
import Buttons from "../ButtonsComponent/Buttons";
import ViewInvestorDetails from "../ViewInvestorDetailsComponent/ViewInvestorDetails";
import EditInvestorDetails from "../EditInvestorDetailsComponent/EditInvestorDetails";

function InvestorProfile() {
  return (
    <div className="col-12 profile-details row mx-0">
      <div className="col h-100">
          <div className="row">
            <div className="profile-type-indicator py-1 px-3 col-12 col-md-8 mt-1">
                <span>Investor Profile</span>
            </div>
            <div className="col-12 col-md-4 pt-2">
                <Link to="/profile/investor/edit">
                    <Buttons  btnClass="btn-custom-green"buttonLabel="Edit"/>
                </Link>
            </div>
          </div>
          <Route path="/profile/investor" exact component={ViewInvestorDetails} />
          <Route path="/profile/investor/edit" exact component={EditInvestorDetails} />
      </div>
      <div className="col h-100 px-0">
          <div className="col mt-5 pt-3">
            <button className="btn profile-utilities-btn mb-3 mr-3">List of Current Investors</button>
          </div>
          <div className="col pt-3 visitor-utilities-con">
              <div className=""><button className="btn visitor-utilities-btn mb-3 mr-3">Message Investor</button></div>
              <div className=""><button className="btn visitor-utilities-btn mb-3 mr-3">Investor's portfolio</button></div>
          </div>
      </div>
    </div>
    );
}

export default InvestorProfile;
