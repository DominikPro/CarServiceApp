import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  width: 100%;
  height: 40px;
  background-color: #367c8e;
`;

const Footer = props => {
  return (
    <FooterWrapper>
      <p>Informacje podstawowe o serwisie</p>
    </FooterWrapper>
  );
};

export default Footer;
