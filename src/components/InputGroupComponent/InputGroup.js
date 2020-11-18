import React from 'react'
import "./InputGroup.css"

import { Container, Row, Col } from 'react-bootstrap';

function InputGroup(props) {
    return (
            <div class="form-group">
                <label for={props.id}>{props.label}</label>
                <input type={props.inputType} class="form-control" id={props.id} />
            </div>
    )
}

export default InputGroup
