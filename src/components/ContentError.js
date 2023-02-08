import React from 'react'
import Banner from '../components/Banner'
import { NavLink } from 'react-router-dom'
import '../styles/ContentError.css'

const ContentError = () => {
    return (
        <div>
            <Banner />
            <div className="content-error">
                <span className="number">404</span>
                <h1 className="title">
                    Oups! La page que vous demandez n'existe pas.
                </h1>
                <NavLink to="/" className="link">
                    Retourner sur la page d’accueil
                </NavLink>
            </div>
        </div>
    )
}

export default ContentError
