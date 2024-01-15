"use client";

import styled from "styled-components";


export const Container = styled.button `
padding: 10px;
  background-color:  #123456;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 8rem;

  &:hover {
    background-color: #2980b9;
  }

  @media screen and (max-width: 768px) {
    /* Ajuste para telas menores */
    padding: 8px;
    font-size: 14px;
  }

`