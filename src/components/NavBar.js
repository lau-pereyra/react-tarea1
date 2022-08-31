import logo from '../logo.svg';
import '../App.css';
const NavBar = () => {
    return (
        <nav>
            <div>
                <img width={100} src={logo} className='icon' />

            </div>
            <div className='items-container'>
                <ul>
                    <li><a href='#'>Inicio</a></li>
                    <li><a href='#'>Productos</a></li>
                    <li><a href='#'>Ayuda</a></li>
                </ul>
            </div>
        </nav >
    )
}
export default NavBar;