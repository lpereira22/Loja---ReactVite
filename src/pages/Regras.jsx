import React from "react";
import { RegrasStyled, Wrapper } from "./Regras";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Global from "../styles/Global";

const Regras =()=>{
    return(
        <Wrapper>
            <Header/>
            <RegrasStyled>
                <h1>Regras do Leilão</h1>
                <h3>1. Cadastro e Participação</h3>
                <p>Todos os participantes devem estar previamente cadastrados na plataforma e com o perfil devidamente verificado. Apenas usuários autenticados podem realizar lances.</p>
                <h3>2. Lances</h3>
                <p>Cada lance feito é considerado um compromisso de compra. Ao ofertar um valor, o participante concorda em adquirir a obra caso seja o vencedor do leilão.</p>
                <h3>3. Incremento Mínimo</h3>
                <p>Os lances devem seguir um valor mínimo de incremento determinado para cada obra. Lances inferiores ao valor mínimo não serão aceitos.</p>
                <h3>4. Encerramento do Leilão</h3>
                <p>O leilão se encerra na data e hora estipuladas. Caso um lance seja feito nos últimos dois minutos, o tempo de encerramento pode ser automaticamente prorrogado por mais 2 minutos.</p>
                <h3>5. Pagamento e Entrega</h3>
                <p>O vencedor do leilão deve realizar o pagamento no prazo máximo de 5 (cinco) dias úteis. A entrega da obra será iniciada após a confirmação do pagamento.</p>
                <h3>6. Política de Cancelamento</h3>
                <p>Lances não podem ser cancelados. Em casos excepcionais ou problemas identificados, o participante deve entrar em contato com a equipe de suporte da plataforma.</p>
            </RegrasStyled>
            <Footer/>
            <Global/>
        </Wrapper>
    )
}

export default Regras;