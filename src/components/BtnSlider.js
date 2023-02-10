import React, { useEffect } from 'react'
import '../styles/ImgRent.css'

const BtnSlider = ({ direction, moveSlide, onlyOne }) => {
    console.log(onlyOne)
    return (
        <button
            className={
                direction === 'next' ? 'btn-slide next' : 'btn-slide prev'
            }
            id={onlyOne == true ? 'disapear' : ''}
            onClick={moveSlide}
        >
            <i
                className={
                    direction === 'next'
                        ? 'fa-solid fa-angle-right'
                        : 'fa-solid fa-angle-left'
                }
            ></i>
        </button>
    )
}

export default BtnSlider
