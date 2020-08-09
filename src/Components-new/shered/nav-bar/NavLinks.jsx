import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "Components-new/logo/logo";
import styled from "styled-components";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import Row from "react-bootstrap/Row";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const li = styled.li`
  top: 10px;
  display: inline-block;
  text-decoration: none;
  align-self: baseline;
`;

const NavLinks = (props) => {
  return (
    <Container>
      <Row xs={10} lg={10} className="justify-content-center text-center"></Row>
      <Navbar bg="light" expand="md">
        <NavLink to="/" exact>
          <Navbar.Brand>
            <Logo />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" exact>
              <Button className="m-1" variant="primary">
                Home
              </Button>
            </NavLink>

            <NavLink to="/LoginPageWorker">
              <Button className="m-1" variant="primary">
                Zaloguj
              </Button>
            </NavLink>

            <NavLink to="/AddCar">
              <Button className="m-1" variant="primary">
                Dodaj Samochód
              </Button>
            </NavLink>

            <NavLink to="/CarsList">
              <Button className="m-1" variant="primary">
                Lista Samochodów
              </Button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavLinks;
