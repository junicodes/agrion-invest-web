import React, { forwardRef} from 'react'
import "./Buttons.css"

import { Container, Row, Col } from 'react-bootstrap';

const Buttons = forwardRef((props, ref) => {
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
        <button ref={ref} onClick={(e) => {props.onSubmitClick(e)}} type="button" className={classList}>{props.buttonLabel}</button>
    )
});

export default Buttons
