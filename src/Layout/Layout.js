import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "../utils/theme";
import { colors } from "../utils/colors";

const GlobalStyle = createGlobalStyle`
body{
  margin:0;
  padding:0;
}
*{
  box-sizing:border-box;
  font-family: 'Montserrat';
}`;
const WrapperMian = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: ${colors.white};
`;

/* props "children jest specjalnym propsem 
 stworzynm przez react jest w nawiasach {} 
 te nawiasy destrukturyzują taki zapis (prosp.children).
 */
const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <WrapperMian>{children}</WrapperMian>;
    </>
  </ThemeProvider>
);

export default Layout;
