import React from 'react'
import CharteItem from './CharteItem'
import '../styles/CharteList.css'

const CharteList = () => {
    return (
        <div className="charte">
            <CharteItem title="Fiabilité" />
            <CharteItem title="Respect" />
            <CharteItem title="Service" />
            <CharteItem title="Responsabilité" />
        </div>
    )
}

export default CharteList
