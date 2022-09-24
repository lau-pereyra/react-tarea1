import logo from '../../logo.svg'
import '../../App';
import { Icon } from '../CartWidget/Icon';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <nav>
            <div>
                <Link to='/'>
                    <img width={100} src={logo} className='icon' alt='icon' />
                </Link>
            </div>
            <div className='items-container'>
                <ul>
                    <Link to='/'>Inicio</Link>
                    <Link to='/productos'>Productos</Link>
                    <Link to='/ayuda'>Ayuda</Link>
                </ul>
            </div>
            <div><Icon icon={faCartShopping} css='cart-icon' /></div>
        </nav >
    )
}
export default NavBar;