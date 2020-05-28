import React from 'react';
import {Link} from 'react-router-dom';

// routing/links here, in the form of a navbar at page top, logout needs completed,
// home and edit route such that it operates as a toggle for the main dashboard
// display
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