import styled from "styled-components";
import { theme } from "../../utils/theme";

const H1 = styled.h1`
  align-self: center;
  color: ${({ colors }) => theme.colors.primary};
`;

export default H1;
