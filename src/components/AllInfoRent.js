import React, { useState } from 'react'
import FirstInfoRent from './FirstInfoRent'
import ImgRent from './ImgRent'
import { useLocation } from 'react-router-dom'
import SecondInfoRent from './SecondInfoRent'
import ThirdInfoRent from './ThirdInfoRent'
import '../styles/AllInfoRent.css'
// let data = require('../data/logements.json')

const AllInfoRent = () => {
    const [urlId, setUrlId] = useState(useLocation().pathname.replace('/', ''))
    const [data, setData] = useState(
        require('../data/logements.json').filter(function (rent) {
            return rent.id === urlId
        })[0]
    )

    return (
        <div>
            <ImgRent imgRent={data.pictures} />
            <div className="info-rent">
                <FirstInfoRent
                    title={data.title}
                    location={data.location}
                    tags={data.tags}
                />
                <SecondInfoRent
                    hostName={data.host.name}
                    hostPicture={data.host.picture}
                    rating={data.rating}
                />
            </div>

            <ThirdInfoRent
                description={data.description}
                equipments={data.equipments}
            />
        </div>
    )
}

export default AllInfoRent
