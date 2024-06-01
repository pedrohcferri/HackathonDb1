// import Input from "../Input"
import { useState} from 'react'
import { produtos} from'./dadosPesquisa'
import {Input, Button} from'antd'
import {HeartTwoTone} from '@ant-design/icons'
import styled from "styled-components"

const PesquisaContainer = styled.section`
    color: #0b0b0cf6;
    text-align: center;
    display:flex;
    flex-wrap: wrap;
    padding: 30px 10px;

    overflow-y: auto;
   
`

// const Paragrafo = styled.p`
//     padding: 20px 10px
//     display: flex;
//     color: black;
//     width: 30%;
// `

const ContainerPesquisa = styled.div`
    display: flex;
    padding:10px;

`

const TituloInput = styled.div`
    aling-itens: center;
    justify-content: center;
    padding: 10px;
    display: flex;
    width: 100vw;
`
const BotaoPesquisar = styled(Input)`
    display:flex;
    text-decoration: none;
    color: #100f0f;
    width: 40vw;
    height: 6vh;
    border-color: #100f0f;
    hover: none;
    .ant-checkbox:hover .ant-checkbox-inner,
    .ant-checkbox-wrapper:hover .ant-checkbox-inner,
`

const ListaProdutos= styled.ol`
padding: 10px 10px;

justify-content:center;
`
const ListaDetalhes=styled.div`
    gap:5px;
    justify-content: center;
    display:flex;
    
`
function Pesquisa(){
    const  [produtosPesquisados, setProdutosPesquisados]= useState(produtos)

    console.log(produtosPesquisados)
    

    return(
        <PesquisaContainer>
            <TituloInput>
                {/* <Titulo>Encontre aqui!</Titulo> */}
                        <BotaoPesquisar placeholder="ENCONTRE AQUI!"
                    onBlur = { evento => {
                        const produtosPesquisados = evento.target.value
                        const resultadoPesquisa = produtos.filter( produto => produto.nome.includes(produtosPesquisados))
                        setProdutosPesquisados(resultadoPesquisa)
                    } }
                />
            </TituloInput>
            {produtosPesquisados.map(produto =>(
                <ContainerPesquisa>
                    <ListaProdutos>
                        <li></li><img src={produto.src} alt={produto.name} width='250px' height='250px' />
                        <li>   <p>{produto.nome}</p> </li>
                        <li> <p>R$:{produto.valor}</p> </li>
                        <ListaDetalhes>
                            <li> <Button href={`/produtos/${produto.id}/detalhes`}>Detalhes </Button> </li>
                            <li><Button href={`/produtos/${produto.id}/favoritos`}><HeartTwoTone/></Button></li>
                        </ListaDetalhes>
                    </ListaProdutos>
                </ContainerPesquisa>    
        ))}
            
        </PesquisaContainer>
    )
}


export default Pesquisa