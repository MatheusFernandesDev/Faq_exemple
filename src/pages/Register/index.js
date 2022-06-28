import React from "react";
// import { NavLink } from 'react-router-dom';
import { ToastContainer } from "react-toastify";

import {
  Container,
  MainContainer,
  Title,
  Span,
  Input,
  Button,
  Label,
  FormContainer,
} from "./styles.js";

const register = () => {
  return (
    <Container>
      <MainContainer>
        <FormContainer>
          <Title>Cadastre-se</Title>
          <Label for="user">Nome</Label>
          <Input value="" placeholder=" Digite seu nome..." name="name" />
          <Label for="user">Email</Label>
          <Input value="" placeholder=" Digite seu usuário..." name="user" />
          <Label for="password">Senha</Label>
          <Input
            value=""
            placeholder="Digite uma senha..."
            name="password"
            type="password"
          />
          <Label for="passwordConf">Confirmar senha</Label>
          <Input
            value=""
            placeholder="Confirme a senha..."
            name="passwordConf	"
          />
          <Button> Cadastrar </Button>
        </FormContainer>
      </MainContainer>
      <ToastContainer />
    </Container>
  );
};

export default register;
