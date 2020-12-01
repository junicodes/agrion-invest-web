import React, { forwardRef} from 'react'
import "./Buttons.css"

import { Container, Row, Col } from 'react-bootstrap';

const Buttons = forwardRef((props, ref) => {
    // let btnBrandStyle = {
    //         background: 'rgb(85, 19, 19)',
    //         color: 'white'
        
    // }
    let classList = 'custom-btn';
    if (props.btnClass === "btn-custom-green") {
        classList += ' btn-custom-green'
    } else if (props.btnClass === "btn-custom-red") {
        classList += ' btn-custom-red'
    } else if (props.btnClass === "btn-custom-white") {
        classList += ' btn-custom-white'
    }
    if (props.btnWidth === "col-12") {
        classList += ' col-12'
    }
    const buttonSubmit = (e) => {
        if (props.onSubmitClick) {
            return props.onSubmitClick(e)
        }
    }
    return (
        <button ref={ref} onClick={buttonSubmit} type="button" className={classList}>{props.buttonLabel}</button>
    )
});

export default Buttons
