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
padding: 10px 10px;
color:black;
justify-content:center;
`

function Favoritos() {

  return (
    <AppContainer>
     <Header />
    
    </AppContainer>
  );
}


export default Favoritos;