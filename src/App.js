
import './App.css';
import Header from './componentes/Header';
import styled from 'styled-components';
import Pesquisa from './componentes/Pesquisa';
import MyCarousel from './componentes/MyCarousel';

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
     <Pesquisa></Pesquisa>
    </AppContainer>
  );
}


export default App;