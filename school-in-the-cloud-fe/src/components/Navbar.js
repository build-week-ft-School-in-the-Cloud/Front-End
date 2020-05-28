import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

// styled components:
const NavbarContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background-color: #50BDE4;
    color: white;
`;

const NavbarNav = styled.nav`
    margin-top: 2rem;
    margin-bottom: 2rem;

    a:visited {
        color: #B9DEF0;
    }

    a:hover {
        color: #DCEFFA;
        background-color: #30ADE4;
    }

`;

const NavbarLink = styled(Link)`
    text-decoration: none;

    margin: 1rem;
    padding: 1rem 2rem 1rem 2rem;

    font-size: 3rem;

    border-radius: 1rem;
`;

// routing/links here, in the form of a navbar at page top, logout needs completed,
// home and edit route such that it operates as a toggle for the main dashboard
// display
const Navbar = props => {

    return (

        <NavbarContainer>
            <NavbarNav>
                <NavbarLink to='/'>Home</NavbarLink>
                <NavbarLink to='/edit'>Edit Profile</NavbarLink>
                <NavbarLink to='#'>Log Out</NavbarLink> {/* figure out where this goes to when merged */}
            </NavbarNav>
        </NavbarContainer>

    )

}

export default Navbar;