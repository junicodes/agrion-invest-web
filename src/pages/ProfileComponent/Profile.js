import React from "react";
import "./Profile.css";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import logo from '../../images/agrion-logo.png';
import samplePic from '../../images/man-face.jpg';
import FarmerProfile from "../../components/FarmerProfileComponent/FarmerProfile";
import InvestorProfile from "../../components/InvestorProfileComponent/InvestorProfile";

function Profile() {
  return (
    <div className="profile-full col-12 px-0">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mx-3">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#">Start sell</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#">Profile</a>
            </li>
          </ul>
        </div>
      </nav>
        <div className="col-12 profile-con row mx-0 px-0">
            <div className="col-12 col-md-3 h-100 text-center profile-basic">
                <div className="profile-image mx-auto my-3">
                    <img src={samplePic} alt=""/>
                </div>
                <h3>Okechukwu</h3>
                <p>Enema</p>
            </div>
            <div className="col-12 col-md-9 px-0">
                <Route path="/profile/farmer" component={FarmerProfile} />
                <Route path="/profile/investor" component={InvestorProfile} />
            </div>
        </div>
    </div>
  );
}

export default Profile;
