import React from 'react';
import {Link} from 'react-router-dom';

// routing/links here most likely, will come back to it when skeleton is complete, probably doesn't need props
const Navbar = props => {

    return (

        <div className='navbar-container'>
            <nav className='navbar-nav'>
                <Link to='/' className='navbar-nav-link'>Home</Link>
                <Link to='/edit' className='navbar-nav-link'>Edit Profile</Link>
                <a href='#' className='navbar-nav-link'>Log Out</a> {/* figure out where this goes to and make it a link */}
            </nav>
        </div>

    )

}

export default Navbar;