import Input from "../Input"
import { useState} from 'react'
import { produtos} from'./dadosPesquisa'
import styled from "styled-components"

const PesquisaContainer = styled.section`
    color: #0b0b0cf6;
    text-align: center;
    display:flex;
    flex-wrap: wrap;
    padding: 30px 10px;

    overflow-y: auto;
   
`

const Titulo = styled.h2`
    padding: 20px 10px
    color: black;
    font-size: 36px;
    text-align: center;
    width: 30%;
`
// const Paragrafo = styled.p`
//     padding: 20px 10px
//     display: flex;
//     color: black;
//     width: 30%;
// `

const ContainerPesquisa = styled.div`
    display: flex;

`

const TituloInput = styled.div`
    border: 1   px black;
    display: flex;
    width: 100vw;
`

function Pesquisa(){
    const  [produtosPesquisados, setProdutosPesquisados]= useState(produtos)

    console.log(produtosPesquisados)

    return(
        <PesquisaContainer>
            <TituloInput>
                <Titulo>Encontre aqui!</Titulo>
                        <Input placeholder="ENCONTRE AQUI!"
                    onBlur = { evento => {
                        const produtosPesquisados = evento.target.value
                        const resultadoPesquisa = produtos.filter( produto => produto.nome.includes(produtosPesquisados))
                        setProdutosPesquisados(resultadoPesquisa)
                    } }
                />
            </TituloInput>
            {produtosPesquisados.map(produto =>(
                <ContainerPesquisa>
                    <ol>
                        <li></li><img src={produto.src} alt={produto.name} width='250px' height='250px' />
                        <li>   <p>{produto.nome}</p> </li>
                        <li> <p>${produto.valor}</p> </li>
                        <li> <button>Detalhes</button> </li>
                    </ol>
                </ContainerPesquisa>    
        ))}
            
        </PesquisaContainer>
    )
}


export default Pesquisa