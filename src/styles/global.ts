import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
}

body {
    background: #f2f3f5;
    -webkit-font-smoothing: antialiased;
}
`;

export default GlobalStyle;

export const COLORS = {
  background: "#f9f9f9",
  white: "#FFFFFF",
  marine500: "#4B586E",

  purple700: "#57CC99",
  purple500: "#0077B6",
  purple300: "#F4A261",
  purple200: "#023047",

  green300: "#c6d0bc",
  orange300: "#f6d78b",
  red300: "#ffc1c1",

  gray900: "#222222",
  gray800: "#333333",
  gray700: "#6B6B6B",
  gray500: "#DDDDDD",
  gray400: "#E5E5E5",
  gray300: "#F2F2F2",
  gray200: "#F9F9F9",
  gray100: "#FFFFFF",
};
