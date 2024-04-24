import { createGlobalStyle } from "styled-components";

const GlobalStyles=createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Inter:slnt,wght@-10..0,100..900&display=swap");

*{
    font-family: "Inter",sans-serif;
}

  body{
    font-family: "Inter",sans-serif;
  }
ul{
  list-style: none;
  padding: 0;
 margin: 0;
  display: block;
}
li{
  display: block;
}
`;
export default GlobalStyles;