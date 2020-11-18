import React from 'react'
import "./SignUp.css"
import InputGroup from '../../components/InputGroupComponent/InputGroup'
import Buttons from '../../components/ButtonsComponent/Buttons'

import { Container, Row, Col } from 'react-bootstrap';

function SignUp() {
    return (
        <div class="col-6 auth-con border mx-auto">
            <h3 class="mt-4 text-center">Register</h3>
            <form class="col-10 mx-auto">
                <InputGroup id="nameInput" label="Name" inputType="text" />
                <InputGroup id="emailInput" label="Email" inputType="email" />
                <InputGroup id="passwordInput" label="Password" inputType="password" />
                <Buttons btnClass="btn-custom-green" btnWidth="col-12" buttonLabel="Register" />
            </form>
        </div>
    )
}

export default SignUp