import React from "react";
import InputGroup from "../InputGroupComponent/InputGroup";
import "./SignUpForm.css";
import { Link } from "react-router-dom";
import Buttons from "../ButtonsComponent/Buttons";


function SignUpForm(props) {
  return <form className="col-12 pt-4 animate__animated animate__fadeIn">
            <InputGroup inputType="text" labelClassList="d-none" fontawesomeClassList="fas fa-user" placeholder="Username"/>
            <InputGroup inputType="email" labelClassList="d-none" fontawesomeClassList="fas fa-at" placeholder="Email Address"/>
            <InputGroup inputType="password" labelClassList="d-none" fontawesomeClassList="fas fa-lock" placeholder="Password"/>
            <InputGroup inputType="button" labelClassList="d-none" fontawesomeClassList="fab fa-facebook-f" inputValue="Signup with Facebook"/>
            <InputGroup inputType="button" labelClassList="d-none" fontawesomeClassList="fab fa-google" inputValue="Signup with Google"/>
            <p className="tac-confirm text-center mb-1">By pressing submit, you agree to our <br/>
            <Link to="/terms-conditions" className="tac-link">terms and conditions</Link></p>
            <div className="col-12 text-center">
                <Buttons btnClass="btn-custom-green" buttonLabel="SUBMIT" />
            </div>
        </form>;
}

export default SignUpForm;
