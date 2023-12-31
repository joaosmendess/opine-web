"use client";

import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle `
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
    color: pink; 
    line-height: 1.6; 
    background-color: #f4f4f4; 
  }

`;

export default GlobalStyle;