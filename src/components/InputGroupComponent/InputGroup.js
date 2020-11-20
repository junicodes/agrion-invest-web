import React from 'react'
import "./InputGroup.css"

import { Container, Row, Col } from 'react-bootstrap';

function InputGroup(props) {
    let faClassList = props.fontawesomeClassList
    return (
            <div className="form-group mb-0">
                <label className={props.labelClassList} htmlFor={props.id}>{props.label}</label>
                <input type={props.inputType} placeholder={props.placeholder} value={props.inputValue} className="form-control pl-5 standard-input" id={props.id} />
                <i className={faClassList}></i>
            </div>
    )
}

export default InputGroup
