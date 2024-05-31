
import logo from '../../imagens/logo.png';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
  align-items: center;
`

const LogoImg = styled.img`
  margin: right 10px; ;
  max-width: 8rem; max-height: 12rem;
`

function Logo(){
    return (
        <LogoContainer>
          <LogoImg src={logo} alt='NX logo da empresa' className='imglogo'/>
          
        </LogoContainer>
    );
}
export default Logo;