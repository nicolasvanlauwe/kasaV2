import React, { useEffect, useState } from 'react'
import '../styles/ImgRent.css'
import BtnSlider from './BtnSlider'

function ImgRent({ imgRent }) {
    const [onlyOne, setOnlyOne] = useState(false)
    useEffect(() => {
        if (imgRent.length === 1) {
            setOnlyOne(true)
        }
    }, [])

    const [slideIndex, setSlideIndex] = useState(1)
    const nextSlide = () => {
        if (slideIndex !== imgRent.length) {
            setSlideIndex(slideIndex + 1)
        } else if (slideIndex === imgRent.length) {
            setSlideIndex(1)
        }
    }
    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        } else if (slideIndex === 1) {
            setSlideIndex(imgRent.length)
        }
    }
    return (
        <div className="container-slider">
            {imgRent.map((pic, index) => {
                return (
                    <div
                        key={pic}
                        className={
                            slideIndex === index + 1
                                ? 'slide active-anim'
                                : 'slide'
                        }
                    >
                        <img
                            className="img-logement"
                            src={pic}
                            alt={`Location`}
                        />
                    </div>
                )
            })}
            <BtnSlider
                moveSlide={nextSlide}
                direction="next"
                onlyOne={onlyOne}
            />
            <BtnSlider
                moveSlide={prevSlide}
                direction="prev"
                onlyOne={onlyOne}
            />
            <p>{`${slideIndex}/${imgRent.length}`}</p>
        </div>
    )
}

export default ImgRent
