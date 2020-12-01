import React, { forwardRef } from 'react'
import "./InputGroup.css"

const InputGroup = forwardRef((props, ref) => {
    let faClassList = props.fontawesomeClassList;
    
    return (
        <div className="form-group m-0">
            <label className={props.labelClassList} htmlFor={props.id}>{props.label}</label>
            <input ref={ref} type={props.inputType} placeholder={props.placeholder} onFocus={() => {props.onValidateFunc()}} onChange={() => {props.onValidateFunc()}}
                defaultValue={props.inputValue ? props.inputValue : ''} 
                className="form-control pl-5 standard-input" id={props.id} 
            />
            <i className={faClassList}></i>
            <small style={{ color: 'red' }}>
                {(props.onValidateMsg && props.onValidateMsg.type === props.refName) ? props.onValidateMsg.msg : ''}
            </small>
        </div>
    )
});

export default InputGroup
