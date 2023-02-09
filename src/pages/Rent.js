import React from 'react'
import AllInfoRent from '../components/AllInfoRent'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const Rent = () => {
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
