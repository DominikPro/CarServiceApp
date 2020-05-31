import React from "react";
import logo from "../../img/logo.jpg";
import styled from "styled-components";

const ServiceLogoImage = styled.div`
  margin: 2px;
  flex-grow: 1;
`;

const ServiceLogo = props => {
  return (
    <ServiceLogoImage>
      <img src={logo} alt="Logo serwisu samochodowego" height="120px" />
    </ServiceLogoImage>
  );
};

export default ServiceLogo;
