

import React from 'react'
import "./Buttons.css"

import { Container, Row, Col } from 'react-bootstrap';

function Buttons(props) {
    // let btnBrandStyle = {
    //         background: 'rgb(85, 19, 19)',
    //         color: 'white'
        
    // }
    let classList = 'btn';
    if (props.btnClass === "btn-custom-green") {
        classList += ' btn-custom-green'
    }
    if (props.btnWidth === "col-12") {
        classList += ' col-12'
    }
    return (
        <button type="button" class={classList}>{props.buttonLabel}</button>
    )
}

export default Buttons
