import './estilo.css';
import logo from '../../imagens/logo.png';

function Logo(){
    return (
        <div className = 'logo'>
          <img src={logo} alt='NX logo da empresa' className='imglogo'></img>
          <p><strong>Net</strong>Xoes</p>
        </div>
    );
}
export default Logo;