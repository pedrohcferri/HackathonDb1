import Header from '../componentes/Header';
import styled from 'styled-components';
import { produtos} from'../componentes/Pesquisa/dadosPesquisa'
import { useParams } from 'react-router-dom';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    color: #fff;
`

function Detalhes() {
    const parametro = useParams()
    // console.log(parametro)
    const produtosSelecionados = produtos.filter( produto => produto.id === Number(parametro.idProduto))
    console.log(produtosSelecionados)
  return (
    <AppContainer>
     <Header />
    <p>text{produtosSelecionados.valor}</p>
    </AppContainer>
  );
}


export default Detalhes;