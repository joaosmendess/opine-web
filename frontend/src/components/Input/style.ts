"use client";

import styled from "styled-components";



export const Container = styled.div `
margin: 1em 0;

`; 


export const StyledInput = styled.input`
   padding: 10px 15px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
height: 30px;
  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;