import Header from '../componentes/Header';
import styled from 'styled-components';
import { produtos} from'../componentes/Pesquisa/dadosPesquisa'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getFavoritos } from '../servicos/favoritos';
import {Button} from 'antd';
import {HeartTwoTone} from '@ant-design/icons'




const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    color: black;


`

const ListaProdutos= styled.ol`
padding: 10px 10px;
color:black;
justify-content:center;
`
const BodyStyle= styled.body`
  display: flex;
  align-items: center;
  justify-content:center;
  background-color:#fff;
  overflow-y: auto;
  padding: 30x 90px;
  height: 600px;

  
`
const ItensOrganizados = styled.div`
display:flex;

`

function Favoritos() {
  const parametro = useParams()
    // console.log(parametro)
    const produtosSelecionados = produtos.filter( produto => produto.id === Number(parametro.idProduto))
    console.log(produtosSelecionados)

const[favoritos, setFavoritos] = useState([])

async function fetchFavoritos(){
  const favoritosDaAPI = await getFavoritos()
  setFavoritos(favoritosDaAPI)
}
useEffect(()=>{
  fetchFavoritos()
}, [])

return (
    <AppContainer>
     <Header />
      
                {favoritos.map( favorito => (
                    <ItensOrganizados>
                      <p><img src={favorito.imageUrl} width='250px' height='250px' /></p>
                      <ListaProdutos>
                      <p>{favorito.nome}</p>
                      <p>{favorito.valor}</p>
                      </ListaProdutos>
                    </ItensOrganizados>
                ) )}
               
       
     {/* <BodyStyle>
            <ListaProdutos>
                <img src={produtosSelecionados[0].src} alt={produtosSelecionados[0].nome}  width='300px' height='300px'  />

                <ItensOrganizados>
                  <li><p>{produtosSelecionados[0].nome}</p> </li>
                  <li> <p>R$:{produtosSelecionados[0].valor}</p> </li>
                  <li><Button href={`/produtos/${produtos.id}/favoritos`}><HeartTwoTone/></Button></li>
                  <br/>
                 
                </ItensOrganizados>
            </ListaProdutos>
     </BodyStyle> */}
    </AppContainer>
  );
}


export default Favoritos;