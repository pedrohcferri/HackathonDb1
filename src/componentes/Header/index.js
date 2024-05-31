import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../IconesHeader';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const HeaderContainer = styled.header`
        background-color: #0b0b0cf6;
        display: flex;
        justify-content: space-around; 
`
const Separar=styled.div`
 display:flex;
 justify-content: center;
;
`
function Header(){
    return (
        <HeaderContainer>
            <Link to="/">
            <Logo/>      
                </Link>
           <Separar>
            <OpcoesHeader/>
            <IconesHeader/>
           </Separar>
        </HeaderContainer>
    )
}
export default Header