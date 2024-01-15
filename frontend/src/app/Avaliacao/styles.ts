"use client";

import styled from "styled-components";

export const Container = styled.div `

display: flex;
align-items: center;
flex-direction: column;
color: #123456; 
letter-spacing: 1px;  
  margin-bottom: 20px; 
  font-family: 'Arial', sans-serif;

`; 

export const Rating = styled.div `
display: flex;
align-items: center;
flex-direction: column;
`;

export const ButtonContainer = styled.div `
display: flex;
justify-content: space-between;
flex-direction: row;
margin: 15px;
gap: 15px;

`;

export const StyledSelect = styled.select`
  font-family: 'Arial', sans-serif;

  padding: 10px;
  margin: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}



`;