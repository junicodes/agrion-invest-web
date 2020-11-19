import React from "react";
import InputGroup from "../InputGroupComponent/InputGroup";
import "./SignInForm.css";
import { Link } from "react-router-dom";
import Buttons from "../ButtonsComponent/Buttons";


function SignInForm(props) {
  return <form className="col-12 pt-4 animate__animated animate__fadeIn">
            <InputGroup inputType="text" labelClassList="d-none" fontawesomeClassList="fas fa-user" placeholder="Username"/>
            <InputGroup inputType="password" labelClassList="d-none" fontawesomeClassList="fas fa-lock" placeholder="Password"/>
            <InputGroup inputType="button" labelClassList="d-none" fontawesomeClassList="fab fa-facebook-f" inputValue="Signup with Facebook"/>
            <InputGroup inputType="button" labelClassList="d-none" fontawesomeClassList="fab fa-google" inputValue="Signup with Google"/>
            <div className="col-12 text-center">
                <Buttons btnclassName="btn-custom-green" buttonLabel="SUBMIT" />
            </div>
        </form>;
}

export default SignInForm;
