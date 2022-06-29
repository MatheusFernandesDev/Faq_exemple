import React, { useState } from "react";
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

import { PageContainer } from "../../components/MainComponents";

const register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <PageContainer>
      <MainContainer>
        <FormContainer>
          <Title>Cadastre-se</Title>
          <Label>Nome</Label>
          <Input
            for="name"
            value={name}
            placeholder=" Digite seu nome..."
            name="name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Label>Email</Label>
          <Input
            for="email"
            value={email}
            placeholder=" Digite seu usuário..."
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Label for="password">Senha</Label>
          <Input
            value={password}
            placeholder="Digite uma senha..."
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Label for="passwordConf">Confirmar senha</Label>
          <Input
            value={confirmPassword}
            placeholder="Confirme a senha..."
            name="passwordConf	"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button onSubmit=""> Cadastrar </Button>
        </FormContainer>
      </MainContainer>
      <ToastContainer />
    </PageContainer>
  );
};

export default register;
