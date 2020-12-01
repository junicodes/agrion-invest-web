import React from "react";
import "./ViewFarmerDetails.css";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import logo from "../../images/agrion-logo.png";

function ViewFarmerDetails() {
  return (
    <div className="col-12 full-profile-data scroller pt-3">
      <div className="single-profile-data mb-3">
          <p className="mb-0">Business/Company Name</p>
          <span>Organic Wholefoods</span>
      </div>
      <div className="single-profile-data mb-3">
          <p className="mb-0">CAC Number</p>
          <span>0363729202373</span>
      </div>
      <div className="single-profile-data mb-3">
          <p className="mb-0">Means of Identification</p>
          <span>Something</span>
      </div>
      <div className="single-profile-data mb-3">
          <p className="mb-0">ID Number</p>
          <span>273628929</span>
      </div>
      <div className="single-profile-data mb-3">
          <p className="mb-0">Phone Number</p>
          <span>09057108319</span>
      </div>
      <div className="single-profile-data mb-3">
          <p className="mb-0">Email</p>
          <span>sample2003@gmail.com</span>
      </div>
      <div className="single-profile-data mb-3">
          <p className="mb-0">Business Address</p>
          <span>No 10 Thanos Street, Off Avengers Avenue</span>
      </div>
      <div className="single-profile-data mb-3">
          <p className="mb-0">Type of farm</p>
          <span>Arable Farm</span>
      </div>
      <div className="single-profile-data mb-3">
          <p className="mb-0">Investors Elevator Pitch</p>
          <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis rem ipsa saepe reiciendis at. Illum natus quam nostrum illo et.</span>
      </div>
    </div>
  );
}

export default ViewFarmerDetails;
