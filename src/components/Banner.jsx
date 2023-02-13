import '../styles/Banner.css'
import logo from '../assets/logo.svg'
import { NavLink } from 'react-router-dom'

function Banner() {
    return (
        <nav className="navbar">
            <NavLink to="/">
                <img className="navbar__logo" src={logo} alt="logo" />
            </NavLink>

            <div className="navbar__link">
                <NavLink
                    to="/"
                    className={(nav) => (nav.isActive ? 'navbar--active' : '')}
                >
                    Accueil
                </NavLink>
                <NavLink
                    to="/apropos"
                    className={(nav) => (nav.isActive ? 'navbar--active' : '')}
                >
                    À propos
                </NavLink>
            </div>
        </nav>
    )
}

export default Banner
