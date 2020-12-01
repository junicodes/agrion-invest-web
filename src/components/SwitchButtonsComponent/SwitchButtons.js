import React, {useState, useEffect} from "react";
import "./SwitchButtons.css";
import { Link } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

const SwitchButtons = (props) => {
  console.log(window.location.pathname)
  const [classList1, setClassList1] = useState('')
  const [classList2, setClassList2] = useState('')

  //Classses
  const loginClass  = `btn animate__animated switch-btn ${classList1}`;
  const signUpClass = `btn animate__animated switch-btn ${classList2}`;

  useEffect(() => {
    switch (window.location.pathname) {
      case '/auth/signin':
        setClassList2('inactive-btn')
        if(props.location && props.location.authState) {  
          return setClassList1('active-btn animate__fadeInRight')
        }
        setClassList1('active-btn animate__fadeIn')
        break;
      case '/auth/signup':
        setClassList1('inactive-btn')
        if(props.location && props.location.authState) {  
          return setClassList2('active-btn animate__fadeInLeft')
        }
        setClassList2('active-btn animate__fadeIn')
        break;
      default:
        break;
    }
  }, [window.location.pathname])



  return (
    <div className="col-12 mx-auto text-center pt-4">
          <div className="btn-mask mx-auto" style={{width: '200px'}}>
            <Link to={{ pathname: "/auth/signin", authState: true }}>
                  <button type="button" className={loginClass}>
                    {props.buttonLabel1}
                  </button>
            </Link>
             <Link to={{ pathname: "/auth/signup", authState: true }}>
                <button type="button" className={signUpClass}>
                  {props.buttonLabel2}
                </button>
            </Link>
          </div>
    </div>
  );
}

export default SwitchButtons;
