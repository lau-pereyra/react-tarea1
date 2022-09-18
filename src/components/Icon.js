import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
export const Icon = ({ icon, css }) => {
    const { getTotalProducto } = useContext(CartContext)
    return (
        <>
            <Link to='/cart'>
                <FontAwesomeIcon icon={icon} className={css} />
                <p className='icon-number' style={{ color: 'white' }}>{getTotalProducto()}</p>
            </Link>
        </>
    )
}

