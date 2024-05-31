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

function Header(){
    return (
        <HeaderContainer>
            <Link to="/">
            <Logo/>      
                </Link>
            <OpcoesHeader/>
            <IconesHeader/>
        </HeaderContainer>
    )
}
export default Header