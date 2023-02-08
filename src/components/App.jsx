import Home from '../pages/Home'
import About from '../pages/About'
import Error from '../pages/Error'
import Rent from '../pages/Rent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
let data = require('../data/logements.json')

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/apropos" element={<About />} />
                {data.map(({ id }) => (
                    <Route key={id} path={id} element={<Rent />} />
                ))}
                <Route path="/*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
