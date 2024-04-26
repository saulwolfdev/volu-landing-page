import { createGlobalStyle } from "styled-components";

const GlobalStyles=createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap");

*{
    font-family: "Public Sans",sans-serif;
}

  body{
    font-family: "Public Sans",sans-serif;
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