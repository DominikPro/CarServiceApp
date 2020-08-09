import React from "react";
import logo from "img/logo.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Logo = (props) => {
  return (
    <Row class="col align-self-start">
      <Col xs={12} lg={1}>
        <img src={logo} alt="Logo serwisu samochodowego" height="100px" />
      </Col>
    </Row>
  );
};

export default Logo;
