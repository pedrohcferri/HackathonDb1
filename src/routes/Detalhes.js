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

function Detalhes() {
    const parametro = useParams()
    // console.log(parametro)
    const produtosSelecionados = produtos.filter( produto => produto.id === Number(parametro.idProduto))
    console.log(produtosSelecionados)
  return (
    <AppContainer>
     <Header />
     <BodyStyle>
            <ListaProdutos>
                <img src={produtosSelecionados[0].src} alt={produtosSelecionados[0].nome}  width='250px' height='250px'  />
                <li>   <p>{produtosSelecionados[0].nome}</p> </li>
                <li> <p>R$:{produtosSelecionados[0].valor}</p> </li>

            </ListaProdutos>
     </BodyStyle>
    </AppContainer>
  );
}


export default Detalhes;