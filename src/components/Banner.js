import '../styles/Banner.css'
import logo from '../assets/logo.svg'

function Banner() {
    return (
        <nav className="navbar">
        <a href="index.html"><img src={logo} alt="logo"/></a>
        <div className="navbar__link">
            <a href="index.html">Accueil</a>
            <a href="apropos.html">A propos</a>
        </div>
    </nav>
)
}

export default Banner