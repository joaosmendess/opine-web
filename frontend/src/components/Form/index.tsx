import React, { ChangeEvent, useState, FormEvent } from "react";
import Input from "../Input";
import Button from "../Button";
import { Container, FormTitle,ButtonContainer } from "./style";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface FormProps {}

const Form: React.FC<FormProps> = () => {
  const [formData, setFormData] = useState({
    nome: '',
    numero: "",
    veiculo: "",
  
  });
  

  const router = useRouter(); 

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };



  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/clientes", formData);

      if (!response.data) {
        throw new Error("Failed to submit the data. Please try again.");
      } 

      console.log("Dados enviados com sucesso:", response.data); 
      router.push('/avaliacao');  

      // Limpar o formulário ou realizar outras ações após o envio bem-sucedido
      setFormData({
        nome: "",
        numero: "",
        veiculo: "",
     
      } ); 
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
    }
  };

  return (
    <Container>

<FormTitle> Por favor, Realize o cadastro de cliente para seguir com a avaliação</FormTitle>

      <form onSubmit={handleSubmit}>
        <Input size={50}
        name="nome"
          required
          id="nome"
          type="text"
          placeholder="Por favor digite seu nome"
          onChange={ handleChange}
  value={formData.nome}
         
        />

<Input size={50}
        name="numero"
          required
          id="numero"
          type="text"
          placeholder="Por favor digite seu numero"
          onChange={ handleChange}
  value={formData.numero}
         
        />

<Input size={50}
        name="veiculo"
          required
          id="veiculo"
          type="text"
          placeholder="Por favor digite seu veiculo"
          onChange={ handleChange}
  value={formData.veiculo}
         
        />
<ButtonContainer>
<Button title="ENVIAR" type="submit"   />    

</ButtonContainer>
      
      </form>
    </Container>
  );
};

export default Form;