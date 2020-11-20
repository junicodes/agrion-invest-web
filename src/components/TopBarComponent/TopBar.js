import React from 'react'
import "./TopBar.css"

import { Container, Row, Col } from 'react-bootstrap';

function TopBar(props) {
    return (
            <div className="col-12 top-bar">
                <h5 className="top-bar-message mt-3 text-center">{props.topBarMessage}</h5>
            </div>
    )
}

export default TopBar
