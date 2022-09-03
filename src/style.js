import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    align-items: flex-start;
    max-width: 100vw;
    margin: 0;

    div {
        display: flex;
        width: 100%;
        justify-content: space-evenly;
        flex-wrap: wrap;

        @media (max-width: 767px){
        flex-direction: column;
    }
    }

    @media (max-width: 1077px){
        flex-direction: column;
    }
`

export const Header = styled.header`
    display: flex;
    width: 100%;
    height: 80px;
    background-color: #00b894;
    align-items: center;
    justify-content: center;

    img {
        max-height: 80%;
    }

    p{
        text-align: center;

            span {
                font-size: 25px;
                font-weight: bold;
                font-family: 'Pacifico', cursive;
            }

            @media (max-width: 626px) {
                display: none;
            }
    }
`

export const ContainerProd = styled.section`
    display: grid;
    width: 60%;
    grid-template-columns: repeat(auto-fit, minmax(200px, auto));
    gap: 15px 10px;   
    margin-top: 3%;
`

export const CardProd = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 35%;
    align-items: center;
    justify-content: space-between;

    button{
    background: #00b894;
    color: white;
    font-family: inherit;
    padding: 0.35em;
    padding-left: 1.2em;
    font-size: 17px;
    font-weight: 500;
    border-radius: 0.9em;
    border: none;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
    box-shadow: inset 0 0 1.6em -0.6em #714da6;
    overflow: hidden;
    position: relative;
    height: 2.3em;
    padding-right: 3.3em;
    cursor: pointer;
    max-height: 30px;
}

        button div {
        background: white;
        margin-left: 1em;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 2.2em;
        width: 2.2em;
        border-radius: 0.7em;
        box-shadow: 0.1em 0.1em 0.6em 0.2em #7b52b9;
        right: 0.3em;
        transition: all 0.3s;
        }

        button:hover div {
        width: calc(100% - 0.6em);
        }

        button div svg {
        width: 1.1em;
        transition: transform 0.3s;
        color: #7b52b9;
        }

        button:hover div svg {
        transform: translateX(0.1em);
        }

        button:active div {
        transform: scale(0.95);
        }


    img {
        height: 180px;
    }

    p {
        margin: 0;
        text-align: center;
        font-weight: 600;
    }
`

export const AreaFiltos = styled.section`
    width: 15%;
    display: flex;
    flex-direction: column;
    padding: 100px 10px;
    background-color: #b2bec3;
    min-height: 100vh;

    @media (max-width: 1077px){
        width: 100vw;
        min-height: 50px;
        padding: 0;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
    }
`

export const AreaCarrinho = styled.aside`
    width: 25%;
    display: flex;
    flex-direction: column;
    margin-top: 15px;

    ul{
        display: flex;
        list-style: none;
        justify-content: space-between;
        align-items: center;
        padding: 0;
        gap: 10px;
        margin-left: 5px;

            li{
                margin-top: 25px;
            }

            button{
                        padding: 4px 6px;
                        cursor: pointer;
                        background: red;
                        border: none;
                        color: #F8EFBA;
                        border-radius: 5px;
                        background: #ff7675;
                    }
    }

    h1 {
        text-align: center;
    }

    p {
        text-align: center;
        margin-top: 10px;
    }
`

export const Linha = styled.div`
    width: 90%;
    height: 1px;
    background-color: #636e72;
    margin: 0 auto;
`

export const ControleQtde = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;

        p{
            margin: 0;
        }
    }
`