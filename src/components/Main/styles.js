import styled from "styled-components";

export const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 1rem;

    h1{
        color: black;
        text-align: center;
    }
`

export const CardsMain = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: white;
    margin-top: 1rem;
    

    div{
        display: flex;
        flex-direction: column;
        border: 1px solid black;
        gap: 1em;
        
        cursor: pointer;
        

        h3{
            text-align: center;
        }

        img{
            width: 100%;
            
        }
    }

    @media (max-width: 670px){
        flex-direction: column;
    }
`