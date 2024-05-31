
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS',  ];

const Opcao = styled.li`
    color: #fff;
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
const StyledLink = styled(Link)`
    text-decoration: none;
`

function OpcoesHeader(){
    return (
        <Opcoes>
          {textoOpcoes.map((texto) => (
          <StyledLink to={`/${texto.toLowerCase()}`}><Opcao><p>{texto}</p></Opcao></StyledLink>
          ))}
        </Opcoes>
    )
 }
 export default OpcoesHeader