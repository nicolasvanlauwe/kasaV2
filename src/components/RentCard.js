import '../styles/RentCard.css'

function RentCard({id,title,cover}) {
    return (
        <a href="#" className="all-rent__card">
                <img className ="all-rent__card__img" src={cover} alt={`${title} cover`}/>
                <p>{title}</p>
            </a>
)
}

export default RentCard