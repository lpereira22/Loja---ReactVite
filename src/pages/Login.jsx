// pages/Login.jsx
import Footer from "../components/Footer";
import BotaoEntrar from "../components/Botoes/botaoEntrar";
import Global from "../styles/Global";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
        <Global/>
        <div>

            <h3><Link to="/">Voltar</Link></h3>
            <h1>Bem Vindo!</h1>
            <p>Faça o Login para continuar</p>

            <BotaoEntrar/>
        </div>
        <Footer/>
    </div>
  );
}

export default Login;
