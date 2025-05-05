import React from "react";
import { CardsMain, ContainerMain } from "./styles";
import imgCard from '../../assets/quadro-Ogrito.jpg'

const Main = () => {
    return(
        <ContainerMain>
            <h1> Leileõs em Destaque </h1>
            <CardsMain>
                <div>
                    <h3>O grito</h3>
                    <img src={imgCard} alt="quadro- O grito" />
                </div>

                <div>
                    <h3>O grito</h3>
                    <img src={imgCard} alt="quadro- O grito" />
                </div>

                <div>
                    <h3>O grito</h3>
                    <img src={imgCard} alt="quadro- O grito" />
                </div>
            </CardsMain>
        </ContainerMain>
    )
    
}

export default Main;