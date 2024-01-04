import React, { ChangeEvent, useState, FormEvent } from "react";
import Input from "../Input";
import Button from "../Button";
import { Container } from "./style";

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
     
      });
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input
        name="nome"
          required
          id="nome"
          type="text"
          placeholder="Digite seu nome"
          onChange={ handleChange}
  value={formData.nome}
         
        />

<Input
        name="numero"
          required
          id="numero"
          type="text"
          placeholder="Digite seu numero"
          onChange={ handleChange}
  value={formData.numero}
         
        />

<Input
        name="veiculo"
          required
          id="veiculo"
          type="text"
          placeholder="Digite seu veiculo"
          onChange={ handleChange}
  value={formData.veiculo}
         
        />

      
        <Button title="ENVIAR" type="submit"  onClick={() => router.push('/avaliacao')}/>    
      </form>
    </Container>
  );
};

export default Form;
