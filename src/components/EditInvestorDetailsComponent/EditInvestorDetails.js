import React from "react";
import "./EditInvestorDetails.css";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import logo from "../../images/agrion-logo.png";
import Buttons from "../ButtonsComponent/Buttons";

function EditInvestorDetails() {
    return (
        <div className="col-12 full-profile-data scroller pt-3">
            <form>
                <div class="form-group">
                    <label for="">Business/Company Name</label>
                    <input type="text" class="form-control" id="" defaultValue="Organic Wholefoods" disabled>

                    </input>
                </div>
                <div class="form-group">
                    <label for="">CAC Number</label>
                    <input type="number" class="form-control" id="" defaultValue="0363729202373" disabled>

                    </input>
                </div>
                <div class="form-group">
                    <label for="">Means of Identification</label>
                    <select class="custom-select">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="">ID Number</label>
                    <input type="number" class="form-control" id="" defaultValue="273628929" disabled>

                    </input>
                </div>
                <div class="form-group">
                    <label for="">Phone Number</label>
                    <input type="tel" class="form-control" id="" defaultValue="09057108319">

                    </input>
                </div>
                <div class="form-group">
                    <label for="">Email</label>
                    <input type="email" class="form-control" id="" defaultValue="sample2004@gmail.com" disabled>

                    </input>
                </div>
                <div class="form-group">
                    <label for="">Business Address</label>
                    <input type="text" class="form-control" id="" defaultValue="No 10 Thanos Street, Off Avengers Avenue">

                    </input>
                </div>
                <div class="form-group">
                    <label for="">Farm of Interest</label>
                    <select class="custom-select">
                        <option selected>Select farm type</option>
                        <option value="arable">Arable</option>
                        <option value="pastoral">Pastoral</option>
                        <option value="mixed">Mixed</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="">Investors Bio</label>
                    <textarea type="text" class="form-control" id="" defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ratione amet est eum! Molestias debitis eveniet nisi magni repellendus libero.">
                    </textarea>
                </div>
                <div className="row col-12 mx-0">
                    <Link to="/profile/investor" className="mr-3">
                        <Buttons  btnClass="btn-custom-red"buttonLabel="Cancel"/>
                    </Link>
                    <Buttons  btnClass="btn-custom-green"buttonLabel="Update"/>
                </div>
            </form>
        </div>
    );
}

export default EditInvestorDetails;
