import styled from "styled-components";
import { theme } from "utils/theme";

const Input = styled.input`
  flex-grow: 2;
  font-size: 13px;
  outline: none;
  border-radius: 10px;
  margin: 0px 5px;
  padding: 2px 5px;
  border-style: solid;
  border-color: ${({ colors }) => theme.colors.primary};

  :focus {
    border-color: ${({ colors }) => theme.colors.primaryDark};
  }
`;

export default Input;
