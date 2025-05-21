import React from "react";
import { BotaoEntrarStyles } from './botaoEntrarStyles'

const BotaoEntrar = ({Titulo, onClick}) =>{
    return(
        <BotaoEntrarStyles>
                <button onClick={onClick}>{Titulo}</button>
        </BotaoEntrarStyles>    
    )
}

export default BotaoEntrar;