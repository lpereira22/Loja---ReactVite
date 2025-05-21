import React, {useState} from "react";
import { CadastrarStyled } from "./CadastrarStyle";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Global from "../styles/Global";
import BotaoEntrar from "../components/Botoes/botaoEntrar";
import { Navigate } from "react-router-dom";

const Cadastrar = () => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [data, setData] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const [senha, setSenha] = useState("");
  const [senha2, setSenha2] = useState("");

  const salvarCadastro = () => {
    const dados = {
      nome,
      sobrenome,
      data,
      telefone,
      cpf,
      email,
      email2,
      senha,
      senha2,
    };

    localStorage.setItem("Cadastro", JSON.stringify(dados));
    alert("Dados salvos com sucesso");
    
    dados = {
      nome: "",
      sobrenome: "",
      data: "",
      telefone: "",
      cpf: "",
      email: "",
      email2: "",
      senha: "",
      senha2: "",
    };
  };

  return (
    <div>
            <Header/>
            <CadastrarStyled>
                <div id="Container">
                    <h1>Preencha o Formulário!</h1>
                    <div class="FormHeader">
                        <input type="text" id="nome" name="nome" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)}/>
                        <input type="text" id="sobrenome" name="sobrenome" placeholder="Sobrenome" value={sobrenome} onChange={e => setSobrenome(e.target.value)}/>
                        <input type="date" id="data" name="data" placeholder="Data de nascimento" value={data} onChange={e => setData(e.target.value)}/>
                        <input type="text" id="telefone" name="telefone" placeholder="Telefone(Somente Números)" value={telefone} onChange={e => setTelefone(e.target.value)}/>
                    </div>
                    <div>
                        <input type="text" id="CPF" placeholder="Digite seu CPF" value={cpf} onChange={e => setCpf(e.target.value)}/>
                    </div>
                    <div>
                        <input type="email" id="email" placeholder="Digite seu e-mail" value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <input type="email" id="email2" placeholder="Digite seu e-mail novamente" value={email2} onChange={e => setEmail2(e.target.value)}/>
                    </div>
                    <div class="FormHeader">
                        <input type="password" id="pass" placeholder="Digite sua senha" value={senha} onChange={e => setSenha(e.target.value)}/>
                        <input type="password" id="pass2" placeholder="Digite sua senha novamente" value={senha2} onChange={e => setSenha2(e.target.value)}/>
                    </div>

                    <input type="checkbox" name="" id="" required/>
                    <span>  Ao criar esta conta, declaro que li e concordo com os termos e condições de uso.</span>

                    <BotaoEntrar Titulo="Criar Conta!" onClick={salvarCadastro}/>
                </div>
        
                
        
        
            </CadastrarStyled>
            <Footer/>
            <Global/>
        </div>
  );
};

export default Cadastrar;