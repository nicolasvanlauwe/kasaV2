import React, { useState } from 'react'
import '../styles/ThirdInfoRent.css'
import DropRentItem from './DropRentItem'

const ThirdInfoRent = ({ description, equipments }) => {
    const [open, setOpen] = useState(false)
    return (
        <div className="third-info">
            <DropRentItem title="Description" text={description} />
            <DropRentItem title="Équipements" text={equipments} />
        </div>
    )
}

export default ThirdInfoRent
