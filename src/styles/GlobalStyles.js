import { createGlobalStyle } from 'styled-components';

import font from '../assets/fonts/ScrambleFont.woff';

const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

body {
  padding: 0;
  margin: 0;
  /* background-color: #c7fb83; */
}

@font-face {
    font-family: Art-Company-Mono;
    src: url(${font});
  }

a, p, li, ul, h1, h2 {
  font-family: 'Art-Company-Mono', Courier New;
  font-size: 32px;
  line-height: 32px;
  text-decoration: none;
  font-weight: normal;
  list-style: none;
  margin: 0;
  padding: 0;
  color: black;
}

a {
  text-shadow: 0px 0px 5px #d8ff3d, 0px 0px 5px #d8ff3d, 0px 0px 5px #d8ff3d; 
}

.gatsby-image-wrapper {
  width: 50%;
  position: fixed;
  bottom: 0%;
  z-index: -100;
}

@media screen and (max-width: 799px) {

  a, p, li, ul, h1, h2 {
  font-size: 24px;
  line-height: 24px;

}

}

`;
export default GlobalStyles;
