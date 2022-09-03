import { Header } from "../../style";
import logoLivros from '../../images/dizzy-books-2.png'
import React from "react";

function Cabecalho () {
    return (
        <>
            <Header>
                <img src={logoLivros} alt='illustração de livros empilhados' />
                <p><span>LabeLivros</span> <br/>
                <q><em>Sempre imaginei que o paraíso fosse uma espécie de livraria.</em></q>
                </p>
            </Header>
        </>
    )
}

export default Cabecalho