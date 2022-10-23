import React from 'react';
import { Link } from 'react-router-dom/dist';
import './AreaCard.css'
const AreaCard = ({ar}) => {
    return (
        <Link to={`/area/${ar._id}`} className='card-area'>
            <div className='card-layer'>
                <h4 className=''>{ar.district}</h4>
            </div>
            <img src={ar.picture} alt="" />
        </Link>
    );
};

export default AreaCard;