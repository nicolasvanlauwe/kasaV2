import React from 'react'
import '../styles/CharteItem.css'

function CharteItem({ title }) {
    return (
        <div className="charte__card">
            <h2>{title}</h2>
            <i className="fa-solid fa-chevron-down"></i>
        </div>
    )
}

export default CharteItem
