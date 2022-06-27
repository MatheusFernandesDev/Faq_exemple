import React, { useState, useEffect } from "react";
import { PageArea } from "./styled";

import {
  PageContainer,
  PageTitle,
  ErrorMessage,
} from "../../components/MainComponents";

const SignUp = () => {
  const [name, setName] = useState("");
  const [stateLoc, setStateLoc] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [stateList, setStateList] = useState([]);

  const [error, setError] = useState("");

  useEffect(() => {}, []);

  const [disabled, setDisabled] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    setError("");

    if (password !== confirmPassword) {
      setError("Senhas não conferem");
      setDisabled(false);
      return;
    }

    // const json = await api.register(name, email, password, stateLoc);
    // console.log(json);
    // if (json.error) {
    //   setError(json.error);
    // } else {
    //   doLogin(json.token);
    //   window.location.href = "/";
    // }

    // setDisabled(false);
  };

  return (
    <PageContainer>
      <PageTitle> Cadastro </PageTitle>
      <PageArea>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <form onSubmit={handleSubmit}>
          <label className="area">
            <div className="area--title">Nome Completo</div>
            <div className="area--input">
              <input
                type="text"
                placeholder="Digite seu Nome Completo"
                disabled={disabled}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </label>
          <label className="area">
            <div className="area--title">Estado</div>
            <div className="area--input">
              <select
                value={stateLoc}
                onChange={(e) => setStateLoc(e.target.value)}
                required
              >
                <option></option>
                {stateList.map((state, k) => (
                  <option key={k} value={state.id}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
          </label>
          <label className="area">
            <div className="area--title">Email</div>
            <div className="area--input">
              <input
                type="email"
                placeholder="Digite seu E-mail"
                disabled={disabled}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </label>
          <label className="area">
            <div className="area--title">Senha</div>
            <div className="area--input">
              <input
                type="password"
                placeholder="Digite sua senha "
                disabled={disabled}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </label>
          <label className="area">
            <div className="area--title">Confirme sua Senha</div>
            <div className="area--input">
              <input
                type="password"
                disabled={disabled}
                value={confirmPassword}
                placeholder="Confirme sua senha"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </label>
          <label className="area">
            <div className="area--title"></div>
            <div className="area--input">
              <button type="submit" disabled={disabled}>
                Fazer Cadastro
              </button>
            </div>
          </label>
        </form>
      </PageArea>
    </PageContainer>
  );
};

export default SignUp;
