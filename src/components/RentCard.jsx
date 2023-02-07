import '../styles/RentCard.css'
import { NavLink } from 'react-router-dom'

function RentCard({ id, title, cover }) {
    return (
        <NavLink to={`/${id}`} className="all-rent__card">
            <img
                className="all-rent__card__img"
                src={cover}
                alt={`${title} cover`}
            />
            <p>{title}</p>
        </NavLink>
    )
}

export default RentCard
