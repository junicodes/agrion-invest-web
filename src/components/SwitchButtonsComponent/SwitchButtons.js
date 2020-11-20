import React, {useState, useEffect} from "react";
import "./SwitchButtons.css";
import { Link } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

const SwitchButtons = (props) => {
  console.log(window.location.pathname)
  const [classList1, setClassList1] = useState('')
  const [classList2, setClassList2] = useState('')

  //Classses
  const loginClass  = `btn switch-btn ${classList1}`;
  const signUpClass = `btn switch-btn ${classList2}`;

  useEffect(() => {
    switch (window.location.pathname) {
      case '/auth/signup':
        setClassList1('active-btn animate__animated animate__fadeInRight')
        setClassList2('inactive-btn')
        break;
      case '/auth/signin':
        console.log('worked')
        setClassList1('inactive-btn')
        setClassList2('active-btn animate__animated animate__fadeInLeft')
        break;
      default:
        break;
    }
  }, [window.location.pathname])

  return (
    <div className="col-12 mx-auto text-center pt-4">
          <div className="btn-mask mx-auto" style={{width: '200px'}}>
            <Link to="/auth/signin">
                  <button type="button" className={loginClass}>
                    {props.buttonLabel1}
                  </button>
            </Link>
             <Link to="/auth/signup">
                <button type="button" className={signUpClass}>
                  {props.buttonLabel2}
                </button>
            </Link>
          </div>
    </div>
  );
}

export default SwitchButtons;
