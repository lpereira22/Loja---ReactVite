import React from "react";
import { ContainerFooter } from "./styles";
import imgInstagram from "../../assets/icons8-instagram-48.png";
import imgFacebook from "../../assets/icons8-facebook-novo-48.png";

const Footer = () =>{
    return(
        <ContainerFooter>
            <h3>Copyright © 2025 - Todos os direitos reservados</h3>
            <div>
                <img src={imgInstagram} alt="icone do instagram" />
                <img src={imgFacebook} alt="icone do instagram" />
            </div>
            
        </ContainerFooter>
    )
}

export default Footer;