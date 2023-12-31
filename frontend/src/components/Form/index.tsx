"use client";

import React from "react";
import Input from "../Input";
import Button from "../Button";
import { Container } from "./style";




interface formProps {};


const Form: React.FC <formProps> = () => {


    return (
<Container>
<Input
        id="nome"
    
        placeholder="Digite seu nome"
     
      />
      <Input
        id="carro"
      
        placeholder="Digite o modelo do seu carro"
        
      />
      <Input
        id="numero"
       
        placeholder="Digite seu número de contato"
        
      />
      <Input
        id="feedback"
      
        placeholder="Digite seu feedback sobre o serviço"
    
      />

    <Button title="ENVIAR"/>
</Container>

);
}

export default Form