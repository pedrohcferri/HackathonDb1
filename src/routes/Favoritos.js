import Header from '../componentes/Header';
import styled from 'styled-components';
import Pesquisa from '../componentes/Pesquisa';
import MyCarousel from '../componentes/MyCarousel';
import ProdutosCarousel from '../componentes/ProdutosCarousel';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    color: #fff;


`

function Favoritos() {
  return (
    <AppContainer>
     <Header />
    <ProdutosCarousel></ProdutosCarousel>
    </AppContainer>
  );
}


export default Favoritos;