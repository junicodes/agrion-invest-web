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
        <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#">
          <img src={logo} alt=""/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item mx-3">
              <a className="nav-link" href="#">How it works</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#">Sell anything</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#">Sell everywhere</a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto mr-5">
            <li class={removeRegisterClassList}>
              <Link to="/auth/signup" className="nav-link" href="#">Start Shopping</Link>
            </li>
            <li class={removeSignInClassList}>
              <Link to="/auth/signin" className="nav-link login-link" href="#">Log In</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default NavBar
