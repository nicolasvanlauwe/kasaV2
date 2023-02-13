import React from 'react'
import '../styles/FirstInfoRent.css'

const FirstInfoRent = ({ title, location, tags }) => {
    return (
        <div className="first-info">
            <h1>{title}</h1>
            <h3 className="location">{location}</h3>
            <div className="first-info__badge">
                {tags.map((tag) => (
                    <p key={tag}>{tag}</p>
                ))}
            </div>
        </div>
    )
}

export default FirstInfoRent
