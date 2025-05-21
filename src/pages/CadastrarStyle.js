import styled from "styled-components";



export const CadastrarStyled = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
    #Container{
        border: 1px solid rgba(0,0,0,0.5);
        width: 40rem;
        height: 40rem;
        padding: 1em;
        box-shadow: 1px 1px 2px;

        h1{
            margin: 1em 0 1em;
        }

        div{
            display: flex;
            flex-direction: column;
            width: 100%;
            margin: 1em 0 1em;
            
            input{
                padding: 4px;
            }
        }
        .FormHeader{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1em;
            
            input{
                padding: 4px;
            }
        }
    }
    
    
`