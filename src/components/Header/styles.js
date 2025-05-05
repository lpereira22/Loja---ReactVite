import styled from "styled-components";

export const Container = styled.div`
    padding: 25px 150px;
    height: 96px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0,0,0, 1.0);
    background-color: var(--white);

    @media (max-width: 670px) {
        flex-direction: column;
        padding-bottom: 100px;
    }
`

export const Logo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
        width: 300px;
    }
`

export const Menu = styled.div`
    ul{
        display: flex;
        justify-content: center;
        align-items: center;

        #cadastro{
            margin-left: 2rem;
            box-shadow: 1px 1px 2px;
            background-color: var(--gray);
            &:hover{
                background-color: gray;
            }
        }

        li{
            border-bottom: 1px solid var(--gray);
            border-radius: 10px;
            padding: 10px;
            margin: 1px;
            cursor: pointer;
            font-size: 1.2rem;
            font-weight: 300;

            &:hover{
                border-bottom: 1px solid var(--blue);
            }
        }

        
    }
`