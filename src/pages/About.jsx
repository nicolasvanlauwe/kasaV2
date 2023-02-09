import Banner from '../components/Banner'
import CharteList from '../components/CharteList'
import Footer from '../components/Footer'
import PresentationAbout from '../components/PresentationAbout'

function About() {
    return (
        <div>
            <div className="container">
                <Banner />
                <PresentationAbout />
                <CharteList />
            </div>

            <Footer />
        </div>
    )
}

export default About
