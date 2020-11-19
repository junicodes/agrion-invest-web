import React, {useState, useEffect} from "react";
import "./SwitchButtons.css";
import { Link } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

function SwitchButtons(props) {
  console.log(window.location.href)
  const [classList1, setClassList1] = useState('btn switch-btn mx-2 active-btn')
  const [classList2, setClassList2] = useState('btn switch-btn mx-2 inactive-btn')
  function whosFirst() {
    if (window.location.href == '/auth/signin') {
      setClassList1('btn switch-btn mx-2 active-btn')
      setClassList2('btn switch-btn mx-2 inactive-btn')
    } else {
      setClassList1('btn switch-btn mx-2 inactive-btn')
      setClassList2('btn switch-btn mx-2 active-btn')
    }
  }
  useEffect(() => {
    whosFirst();
    return () => {
      console.log('effect complete')
    }
  }, [])
  function buttonSwitch1() {
    if (classList1 === 'btn switch-btn mx-2 active-btn') {
        return 'btn switch-btn mx-2 active-btn'
    } else {
        disableOther()
        return 'btn switch-btn mx-2 active-btn'
    }
  }
  function buttonSwitch2() {
    if (classList2 === 'btn switch-btn mx-2 active-btn') {
        return 'btn switch-btn mx-2 active-btn'
    } else {
        disableOther()
        return 'btn switch-btn mx-2 active-btn'
    }
  }
  function disableOther() {
      console.log('here')
    if (classList1 === 'btn switch-btn mx-2 active-btn') {
        setClassList1('btn switch-btn mx-2 inactive-btn')
    }
    if (classList2 === 'btn switch-btn mx-2 active-btn') {
        setClassList2('btn switch-btn mx-2 inactive-btn')
    }
  }

  return (
    <div className="col-12 text-center pt-4">
      <Link to="/auth/signin">
        <button onClick={() => setClassList1(buttonSwitch1())} type="button" class={classList1}>
          {props.buttonLabel1}
        </button>
      </Link>
      <Link to="/auth/signup">
        <button onClick={() => setClassList2(buttonSwitch2())} type="button" class={classList2}>
          {props.buttonLabel2}
        </button>
      </Link>
    </div>
  );
}

export default SwitchButtons;
