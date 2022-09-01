import logo from '../logo.svg';
import '../App.css';
import { Icon } from './Icon';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
const NavBar = () => {
    return (
        <nav>
            <div>
                <img width={100} src={logo} className='icon' alt='icon' />
            </div>
            <div className='items-container'>
                <ul>
                    <li><a href='#'>Inicio</a></li>
                    <li><a href='#'>Productos</a></li>
                    <li><a href='#'>Ayuda</a></li>
                </ul>
            </div>
            <div><Icon icon={faCartShopping} css='cart-icon' /></div>
        </nav >
    )
}
export default NavBar;