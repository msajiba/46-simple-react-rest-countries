import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h4> Wellcome to Country </h4>
            <nav className='menu bg-dark p-2'>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/country"> Country</a>
            </nav>
        </div>
    );
};

export default Header;