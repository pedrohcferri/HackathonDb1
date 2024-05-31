import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App';
import Favoritos from './routes/Favoritos';
import Detalhes from'./routes/Detalhes';
import Header from './componentes/Header/index';
import Produtos from'./routes/Produtos';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
li{
  list-style: none;
}
// `
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
    
      <Routes>
      <Route path="/produtos" element={<Produtos />} />
        <Route path="/favoritos" element={<Favoritos/>} />
        <Route path="/" element={<App />} />
        <Route path="/produtos/:idProduto/detalhes" element={<Detalhes/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <GlobalStyle/>
//     <App />
//     <route path='/categorias' element={<Categorias/>} />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
