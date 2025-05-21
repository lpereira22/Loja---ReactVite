import React from "react";
import { Container, Logo, Menu } from "./styles";
import { Link } from "react-router-dom";

const Header = () =>{ //Area function
    return(
        <Container>
            <Logo>
                <Link to="/"><h2>ArtLancy♠</h2></Link>
            </Logo>
            <Menu>
                <ul>
                    <li><span>Leilão</span></li>
                    <li><span>Compras</span></li>
                    <li><span><Link to="/Regras">Regras</Link></span></li>
                    <li id="cadastro"><span><Link to="/Login">Cadastro/Login</Link></span></li>
                </ul>
            </Menu>
            
        </Container>
    )
}

export default Header;