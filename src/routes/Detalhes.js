import Header from '../componentes/Header';
import styled from 'styled-components';
import { produtos} from'../componentes/Pesquisa/dadosPesquisa'
import { useParams } from 'react-router-dom';
import {Button} from 'antd';
import {HeartTwoTone} from '@ant-design/icons'
import CalcularParcelas from '../componentes/Calculo/indeeex';
import ParcelamentoSelect from '../componentes/Select/index';


const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    color: #fff;
    
`
const ListaProdutos= styled.ol`

border-radius:20px;
width:60%;
padding: 10px 10px;
color:black;
justify-content:center;
display:flex;
gap: 2rem;
 background-color: #fff;

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
  margin:16px;
  gap: 10px;

`

function Detalhes() {
    const parametro = useParams()
    // console.log(parametro)
    const produtosSelecionados = produtos.filter( produto => produto.id === Number(parametro.idProduto))
    console.log(produtosSelecionados)
    const valorDoObjeto = produtosSelecionados[0].valor;
    const parcelas = CalcularParcelas(valorDoObjeto)
  
  return (
    <AppContainer>
     <Header />
     <BodyStyle>
            <ListaProdutos>
                <img src={produtosSelecionados[0].src} alt={produtosSelecionados[0].nome}  width='300px' height='300px'  />

                <ItensOrganizados>
                  <li><p>{produtosSelecionados[0].nome}</p> </li>
                  <li> <p>R$:{produtosSelecionados[0].valor}</p> </li>
                  <li><Button href={`/produtos/${produtos.id}/favoritos`}><HeartTwoTone/></Button></li>
                  <br/>
                 <ParcelamentoSelect valor={produtosSelecionados[0].valor} />
                </ItensOrganizados>
            </ListaProdutos>
     </BodyStyle>
    </AppContainer>
  );
}


export default Detalhes;