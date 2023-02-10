import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import AllInfoRent from '../components/AllInfoRent'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const Rent = () => {
    const [urlId, setUrlId] = useState(useLocation().pathname.replace('/', ''))
    const [data, setData] = useState(
        require('../data/logements.json').filter(function (rent) {
            return rent.id === urlId
        })[0]
    )
    useEffect(() => {
        document.title = data.title
    }, [])
    return (
        <div>
            <div className="container">
                <Banner />
                <AllInfoRent />
            </div>

            <Footer />
        </div>
    )
}

export default Rent
