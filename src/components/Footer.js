import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo-footer.svg'
import '../styles/Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <NavLink to="/">
                <img src={logo} alt="logo" />
            </NavLink>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer
