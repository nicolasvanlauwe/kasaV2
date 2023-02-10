import React, { useState } from 'react'
import '../styles/DropRentItem.css'

const EquipementItem = ({ title, text }) => {
    const [open, setOpen] = useState(false)
    return (
        <div className="third-info__card">
            <div
                className="third-info__card__header"
                onClick={() => {
                    setOpen(!open)
                }}
            >
                <h3>{title}</h3>
                <i
                    className={`fa-solid  ${
                        open ? 'fa-chevron-up' : 'fa-chevron-down'
                    }`}
                ></i>
            </div>
            <div
                className={`third-info__card__body ${
                    open ? 'active' : 'inactive'
                }`}
            >
                {Array.isArray(text) ? (
                    text.map((text) => <p key={text}>{text}</p>)
                ) : (
                    <p>{text}</p>
                )}
            </div>
        </div>
    )
}

export default EquipementItem
