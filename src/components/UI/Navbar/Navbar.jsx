import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <div className='navbar'>
            <div className='navbar_link'>
                <Link to='/about'> сайт</Link>
                <Link to='/posts'> Посты</Link>
            </div>
        </div>
    );
}

export default Navbar;