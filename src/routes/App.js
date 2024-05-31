import Header from '../componentes/Header';
import Pesquisa from '../componentes/Pesquisa';
import MyCarousel from '../componentes/MyCarousel';
import styled from 'styled-components';
import ProdutosCarousel from '../componentes/ProdutosCarousel';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    color: #fff;


`

function App() {
  return (
    <AppContainer>
      <Header />
      <MyCarousel/>
      <ProdutosCarousel/>
    </AppContainer>
  );
}


export default App;