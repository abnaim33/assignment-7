import React from 'react';

import './Header.css';

const Header = () => {
    return (
        <nav className='header'>

            <h1 style={{ color: "white" }}>Players Zone</h1>

            <div>
                <a href="/players">Players</a>
                <a href="/club">My Club</a>

                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;