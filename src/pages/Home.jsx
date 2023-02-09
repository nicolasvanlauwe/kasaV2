import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Presentation from '../components/Presentation'
import RentList from '../components/RentList'

function Home() {
    return (
        <div>
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
