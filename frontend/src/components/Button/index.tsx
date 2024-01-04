"use client";

import React from "react";
import { Container } from "./style";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

    title: string;
  
}

const Button: React.FC<ButtonProps> = ({title,...props}) => {
  return <Container {...props} > {title}  </Container>;
};

export default Button;