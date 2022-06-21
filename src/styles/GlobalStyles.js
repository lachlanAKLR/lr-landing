import { createGlobalStyle } from 'styled-components';

import font from '../assets/fonts/ArtCompanyMono-Light.woff';

const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

body {
  padding: 0;
  margin: 0;
}

@font-face {
    font-family: Art-Company-Mono;
    src: url(${font});
  }

a, p, li, ul, h1, h2 {
  font-family: 'Art-Company-Mono', Courier New;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  font-weight: normal;
  list-style: none;
  margin: 0;
  padding: 0;
  color: black;
}

.gatsby-image-wrapper {
  width: 50%;
  position: fixed;
  bottom: 0%;
  z-index: -100;
}

`;
export default GlobalStyles;
