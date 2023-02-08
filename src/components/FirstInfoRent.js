import React from 'react'
import '../styles/FirstInfoRent.css'

const FirstInfoRent = ({ title, hostName, hostPicture }) => {
    return (
        <div className="first-info">
            <h1>{title}</h1>
            <div className="first-info__renter">
                <p>{hostName}</p>
                <img
                    src={hostPicture}
                    className="first-info__renter__img"
                    alt="Hôte"
                />
            </div>
        </div>
    )
}

export default FirstInfoRent
