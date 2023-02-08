import React, { useState } from 'react'
import '../styles/CharteItem.css'

function CharteItem({ title, text }) {
    const [open, setOpen] = useState(false)
    return (
        <div className="charte__card">
            <div
                className="charte__card__header"
                onClick={() => {
                    setOpen(!open)
                }}
            >
                <h2>{title}</h2>
                <i
                    className={`fa-solid  ${
                        open ? 'fa-chevron-up' : 'fa-chevron-down'
                    }`}
                ></i>
            </div>
            <div
                className={`charte__card__body ${open ? 'active' : 'inactive'}`}
            >
                <p>{text}</p>
            </div>
        </div>
    )
}

export default CharteItem
