import Input from "../Input"
import styled from "styled-components"
import { useState} from 'react'
import { produtos} from'./dadosPesquisa'

const PesquisaContainer = styled.section`
    color: #0b0b0cf6;
    text-align: center;
    height: 470px;
   
    flex-direction:column;
    padding: 30px 10px;
`

const Titulo = styled.h2`
    padding: 20px 10px
    color: black;
    font-size: 36px;
    text-align: center;
    width: 30%;
`
const Paragrafo = styled.p`
    padding: 20px 10px
    display: flex;
    color: black;
    width: 30%;
`

const ContainerPesquisa = styled.div`
    display: flex;
    flex-direction: row;
`

function Pesquisa (){
    const  [produtosPesquisados, setProdutosPesquisados]= useState([])

    console.log(produtosPesquisados)

    return(
        <PesquisaContainer>
           <Titulo>Encontre aqui!</Titulo>
                <Input placeholder="ENCONTRE AQUI!"
            onBlur = { evento => {
                const produtosPesquisados = evento.target.value
                const resultadoPesquisa = produtos.filter( produto => produto.nome.includes(produtosPesquisados))
                setProdutosPesquisados(resultadoPesquisa)
            } }
            />
            {produtosPesquisados.map(produto =>(
                <ContainerPesquisa>
                    <img src={produto.src} width='250px' height='250px' />
                    <p>{produto.nome}</p>   
                </ContainerPesquisa>    
        ))}
            
        </PesquisaContainer>
    )
}


export default Pesquisa