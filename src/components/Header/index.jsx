import React from "react";
import { Container, Logo, Menu } from "./styles";

const Header = () =>{ //Area function
    return(
        <Container>
            <Logo>
                <h2>ArtLancy♠</h2>
            </Logo>
            <Menu>
                <ul>
                    <li><span>Leilão</span></li>
                    <li><span>Compras</span></li>
                    <li><span>Regras</span></li>
                    <li id="cadastro"><span>Cadastro/Login</span></li>
                </ul>
            </Menu>
            
        </Container>
    )
}

export default Header;