import React from "react";

import { Container, StyledInput } from "./style"; 

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  
  };


  const Input: React.FC <InputProps> = (props) => {
    return (

<>
<Container>
  <StyledInput {...props} />
</Container>

</>

    );
  };

  export default Input