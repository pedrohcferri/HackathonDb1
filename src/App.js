
import './App.css';
import Header from './componentes/Header';
import styled from 'styled-components'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    color: #fff;
  li{
    list-style: none;
  }

`

function App() {
  return (
    <AppContainer>
     <Header />
    </AppContainer>
  );
}


export default App;