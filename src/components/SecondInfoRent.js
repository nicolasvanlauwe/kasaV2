import React from 'react'
import '../styles/SecondInfoRent.css'
const rate = [1, 2, 3, 4, 5]

const SecondInfoRent = ({ hostName, hostPicture, rating }) => {
    return (
        <div className="second-info">
            <div className="second-info__renter">
                <p>{hostName}</p>
                <img
                    src={hostPicture}
                    className="second-info__renter__img"
                    alt="Hôte"
                />
            </div>

            <div className="second-info__rate">
                {rate.map((range) => {
                    return (
                        <svg
                            key={range}
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
                                fill={rating >= range ? '#ff6060' : '#E3E3E3'}
                            />
                        </svg>
                    )
                })}
            </div>
        </div>
    )
}

export default SecondInfoRent
