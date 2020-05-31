import React from "react";
import { NavLink } from "react-router-dom";
import ServiceLogo from "../ServiceLogo/ServiceLogo";
import styled from "styled-components";
import { theme } from "../../utils/theme";

const WrapperNavLinksMenu = styled.div`
  display: flex;
  height: 100px;
  width: 100vw;
  justify-content: center;
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  height: auto;
  align-self: center;
  flex-grow: 9;
`;
const Li = styled.li`
  top: 10px;
  display: inline-block;
  text-decoration: none;
  align-self: baseline;
`;

const NavButton = styled.button`
  color: ${({ colors }) => theme.colors.white};
  margin: 5px;
  border: none;
  padding: 5px 10px;
  border-radius: 30px;
  background-color: ${({ colors }) => theme.colors.primary};
  :hover {
    background-color: ${({ colors }) => theme.colors.primaryDark};
    cursor: pointer;
  }
`;

const NavLinks = (props) => {
  return (
    <>
      <WrapperNavLinksMenu>
        <ServiceLogo />
        <Ul>
          <Li>
            <NavLink to="/" exact>
              <NavButton>Home</NavButton>
            </NavLink>
          </Li>
          <Li>
            <NavLink to="/LoginPageWorker">
              <NavButton>Zaloguj</NavButton>
            </NavLink>
          </Li>
          <Li>
            <NavLink to="/AddCar">
              <NavButton>Dodaj samochód</NavButton>
            </NavLink>
          </Li>
          <Li>
            <NavLink to="/CarsList">
              <NavButton>Lista samochodów</NavButton>
            </NavLink>
          </Li>
        </Ul>
      </WrapperNavLinksMenu>
    </>
  );
};

export default NavLinks;
