import Header from '../componentes/Header';
import Pesquisa from '../componentes/Pesquisa';
import MyCarousel from '../componentes/MyCarousel';
import styled from 'styled-components';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    color: #fff;
`

function Categorias() {
  return (
    <AppContainer>
     <Header />

     <Pesquisa></Pesquisa>
    </AppContainer>
  );
}


export default Categorias;