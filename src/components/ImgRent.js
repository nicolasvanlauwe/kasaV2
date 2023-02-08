import React from 'react'
import '../styles/ImgRent.css'

function ImgRent({ imgRent }) {
    return (
        <div>
            <img className="img-logement" src={imgRent} alt="Location" />
        </div>
    )
}

export default ImgRent
