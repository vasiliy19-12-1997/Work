import React from "react";
import { Row, Col } from "react-bootstrap";
import s from './Header.module.css';
function Header (){
    return(
        <Row>
            <Col>
                 <div className={s.root}>To do list</div>
            </Col>
        </Row>
    )
}
export default Header;