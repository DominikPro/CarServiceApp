import styled from "styled-components";
import { theme } from "utils/theme";

const Button = styled.button`
  color: ${({ colors }) => theme.colors.white};
  margin: 5px;
  border: none;
  padding: 5px 10px;
  border-radius: 30px;
  font-size: 15px;
  letter-spacing: 1.5px;
  background-color: ${({ colors }) => theme.colors.primary};
  :hover {
    background-color: ${({ colors }) => theme.colors.primaryDark};
    cursor: pointer;
  }
`;

export default Button;
