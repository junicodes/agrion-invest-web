import React from 'react'
import "./TopBar.css"

import { Container, Row, Col } from 'react-bootstrap';

function TopBar(props) {
    return (
            <div class="col-12 top-bar">
                <h5 class="top-bar-message mt-3 text-center">{props.topBarMessage}</h5>
            </div>
    )
}

export default TopBar
