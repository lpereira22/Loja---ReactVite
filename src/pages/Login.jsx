import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import BotaoEntrar from "../components/Botoes/botaoEntrar.jsx";
import BotaoCadastrar from "../components/Botoes/botaoCadastrar.jsx";
import Global from "../styles/Global";
import { Link, useNavigate } from "react-router-dom"; // ⬅️ Importa useNavigate
import { LoginStyles } from "./Login";

function Login() {
  const [login, setLogin] = useState("");     // Estado do input de e-mail/login
  const [senha, setSenha] = useState("");     // Estado do input de senha

  const navigate = useNavigate();             // ⬅️ Hook de navegação

  const fazerLogin = () => {
    const dadosSalvos = JSON.parse(localStorage.getItem("Cadastro"));  // Recupera dados salvos

    if (!dadosSalvos) {
      alert("Nenhum cadastro encontrado!");
      return;
    }

    if (login === dadosSalvos.email && senha === dadosSalvos.senha) {
      alert("Login bem-sucedido!");

      // ⬅️ Redireciona para a página desejada
      navigate("/teste"); // ou "/dashboard", "/perfil", etc.
    } else {
      alert("E-mail ou senha inválidos!");
    }
  };

  return (
    <div>
      <Header />
      <LoginStyles>
        <Global />
        <div id="telaLogin">
          <h3><Link to="/">Voltar</Link></h3>
          <h1>Bem Vindo!</h1>
          <p>Faça o Login para continuar</p>

          <span>
            Login:
            <input
              id="login"
              type="text"
              value={login}
              onChange={e => setLogin(e.target.value)}
            />
          </span>

          <span>
            Senha:
            <input
              id="pass"
              type="password"
              value={senha}
              onChange={e => setSenha(e.target.value)}
            />
          </span>

          <BotaoEntrar Titulo="Entrar" onClick={fazerLogin} />
          <a href="#">Esqueci minha senha!</a>
          <Link to="/Cadastrar"><BotaoCadastrar /></Link>
        </div>
      </LoginStyles>
      <Footer />
    </div>
  );
}

export default Login;
