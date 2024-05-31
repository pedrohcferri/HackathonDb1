import React from 'react';
import { produtos} from'../Pesquisa/dadosPesquisa';
import styled from "styled-components"
import {Button} from'antd'

const ContainerPesquisa = styled.div`
    display: flex;
    color: #0b0b0cf6;
    text-align: center;
    flex-wrap: wrap;
    padding: 30px 90px;
    overflow-y: auto;

`
const ListaProdutos= styled.ol`
padding: 10px 10px;

justify-content:center;
`

function Dinamico(){

    return (
        <ContainerPesquisa>
            {produtos.map(produto =>(
          
                    <ListaProdutos>
                        <li></li><img src={produto.src} alt={produto.name} width='250px' height='250px' />
                        <li>   <p>{produto.nome}</p> </li>
                        <li> <p>R${produto.valor}</p> </li>
                        <li> <Button>Detalhes</Button> </li>
                    </ListaProdutos>
           
            ))}  
            </ContainerPesquisa>
        )

        }
        export default Dinamico

