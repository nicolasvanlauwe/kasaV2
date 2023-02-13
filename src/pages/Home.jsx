import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Presentation from '../components/Presentation'
import RentList from '../components/RentList'
import { useEffect } from 'react'

function Home() {
    useEffect(() => {
        document.title = 'Accueil'
    }, [])
    return (
        <div className="content">
            <div className="container">
                <Banner />
                <Presentation />
                <RentList />
            </div>
            <Footer />
        </div>
    )
}

export default Home
