// import React from "react";
import { theme } from "../../utils/theme";
import styled from "styled-components";

const H3 = styled.h3`
  align-self: center;
  align-items: flex-start;
  color: ${({ colors }) => theme.colors.primary};
`;

export default H3;
