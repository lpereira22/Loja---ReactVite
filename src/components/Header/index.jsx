import React from "react";
import { Container, Logo, Menu } from "./styles";
import { Link } from "react-router-dom";

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
                    <li id="cadastro"><span><Link to="/Login">Cadastro/Login</Link></span></li>
                </ul>
            </Menu>
            
        </Container>
    )
}

export default Header;