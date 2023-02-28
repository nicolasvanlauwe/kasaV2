import React from 'react'

import { NavLink } from 'react-router-dom'
import '../styles/ContentError.css'

const ContentError = () => {
    return (
        <div>
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
