
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MEU CARRINHO' ];

const Opcao = styled.li`
    font-size: 16px;
    align-items: center;
    display: flex;
    justify-content: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;

`
const Opcoes = styled.ul`
    display: flex;
`

function OpcoesHeader(){
    return (
        <Opcoes>
          {textoOpcoes.map((texto) => (
          <Link to={`/${texto.toLowerCase()}`}><Opcao><p>{texto}</p></Opcao></Link>
          ))}
        </Opcoes>
    )
 }
 export default OpcoesHeader