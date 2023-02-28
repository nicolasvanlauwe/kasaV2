import React, { useEffect } from 'react'
import ContentError from '../components/ContentError'
import Footer from '../components/Footer'
import Banner from '../components/Banner'

const Error = () => {
    useEffect(() => {
        document.title = 'Erreur 404'
    }, [])
    return (
        <div className="content">
            <div className="container">
                <Banner />
                <ContentError />
            </div>

            <Footer />
        </div>
    )
}

export default Error
