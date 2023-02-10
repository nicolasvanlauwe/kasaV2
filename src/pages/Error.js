import React, { useEffect } from 'react'
import ContentError from '../components/ContentError'
import Footer from '../components/Footer'

const Error = () => {
    useEffect(() => {
        document.title = 'Erreur 404'
    }, [])
    return (
        <div>
            <div className="container">
                <ContentError />
            </div>

            <Footer />
        </div>
    )
}

export default Error
