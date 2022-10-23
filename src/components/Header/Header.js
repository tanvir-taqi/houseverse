import React from 'react';
import { Link } from 'react-router-dom/dist';
import './Header.css'


const Header = () => {
    return (
        <div className='header'>
            <Link to='/' className="logo">
                <h2>Houseverse</h2>
                </Link >
                <div>
                    <p>user</p>
                </div>
            
        </div>
    );
};

export default Header;