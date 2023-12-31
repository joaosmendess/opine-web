"use client";

import styled from "styled-components";



export const Container = styled.div `
margin: 1em 0;

`; 


export const StyledInput = styled.input`
  width: 20rem;
  padding: 0.5em;
  margin: 0.5em 0;
  box-sizing: border-box;
  border: 2px solid #ddd;
  border-radius: 4px;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;