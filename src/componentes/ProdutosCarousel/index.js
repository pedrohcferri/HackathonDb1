import React from 'react';
import { produtos} from'../Pesquisa/dadosPesquisa';
import styled from "styled-components"
import {Button} from'antd'
import {HeartTwoTone} from '@ant-design/icons'


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
const ListaDetalhes=styled.div`
    gap:5px;
    justify-content: center;
    display:flex;
    
`

function ProdutosCarousel(){

    return (
        <ContainerPesquisa>
            {produtos.map(produto =>(
          
                    <ListaProdutos>
                        <li></li><img src={produto.src} alt={produto.name} width='250px' height='250px' />
                        <li>   <p>{produto.nome}</p> </li>
                        <li> <p>R${produto.valor}</p> </li>
                        <ListaDetalhes>
                                <li> <Button href={`/produtos/${produto.id}/detalhes`}>Detalhes</Button> </li>
                                <li><Button href={`/produtos/${produto.id}/favoritos`}><HeartTwoTone/></Button></li>
                        </ListaDetalhes>
                    </ListaProdutos>
           
            ))}  
            </ContainerPesquisa>
        )

        }






// const ProdutosCarousel = () => (
//   <>
//     <Carousel arrows infinite={false}>
//       <div>
     
//       </div>
//       <div>
//         <h3 style={contentStyle}>2</h3>
//       </div>
//       <div>
//         <h3 style={contentStyle}>3</h3>
//       </div>
//       <div>
//         <h3 style={contentStyle}>4</h3>
//       </div>
//     </Carousel>
//     <br />
//     <Carousel arrows dotPosition="left" infinite={false}>
//       <div>
//         <h3 style={contentStyle}>1</h3>
//       </div>
//       <div>
//         <h3 style={contentStyle}>2</h3>
//       </div>
//       <div>
//         <h3 style={contentStyle}>3</h3>
//       </div>
//       <div>
//         <h3 style={contentStyle}>4</h3>
//       </div>
//     </Carousel>
//   </>
// );

export default ProdutosCarousel;