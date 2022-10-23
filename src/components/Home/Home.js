import React from 'react';
import { useLoaderData } from 'react-router-dom/dist';
import AreaCard from '../AreaCard/AreaCard';
import './Home.css'

const Home = () => {

    const areaList = useLoaderData()


    return (
        <div className='home-container'>
            <div>

            </div>
           <div className='home-slider'>
           {
                areaList.map(ar =><AreaCard key={ar._id} ar={ar}></AreaCard>)
            }
           </div>
        </div>
    );
};

export default Home;