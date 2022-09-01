import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Icon = ({ icon, css }) => {
    return (
        <FontAwesomeIcon icon={icon} className={css} />
    )
}

