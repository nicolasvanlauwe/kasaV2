import '../styles/RentList.css'
import RentCard from './RentCard';
let data = require('../data/logements.json')

function RentList() {
    
    return (
        <div className="all-rent">
            {data.map(({ id, cover, title }) =>
            <div key={id}>
            <RentCard
                id={id}
                cover={cover}
                title={title}
            />
            </div>
            )}
        </div>
)}


export default RentList