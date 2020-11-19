import React from 'react'
import "./NavBar.css"

import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

import logo from '../../images/agrion-logo.png';

function NavBar(props) {
    let removeRegisterClassList = 'nav-item mx-3';
    let removeSignInClassList = 'nav-item mx-3 ';
    if (props.currentPage === "register") {
        removeRegisterClassList += ' d-none'
    } else if (props.currentPage === "signin"){
        removeSignInClassList += ' d-none'
    }
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#">
          <img src={logo} alt=""/>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item mx-3">
              <a class="nav-link" href="#">How it works</a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link" href="#">Sell anything</a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link" href="#">Sell everywhere</a>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto mr-5">
            <li class={removeRegisterClassList}>
              <Link to="/auth/signup" class="nav-link" href="#">Start Shopping</Link>
            </li>
            <li class={removeSignInClassList}>
              <Link to="/auth/signin" class="nav-link login-link" href="#">Log In</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default NavBar
