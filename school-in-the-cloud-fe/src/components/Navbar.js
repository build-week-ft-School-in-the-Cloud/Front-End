import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

// styled components:
const NavbarContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    background-color: #50BDE4;
    color: white;
`;

const NavbarNav = styled.nav`
    @media only screen and (max-width: 510px){

        display: flex;
        flex-direction: column;

    }

    margin-top: 4rem;
    margin-bottom: 2rem;

    font-family: 'Courgette', serif;

`;

const NavbarLink = styled(Link)`

    text-decoration: none;

    margin: 1rem;
    padding: 1rem 2rem 1rem 2rem;

    @media only screen and (max-width: 510px){
        padding-left: 25vw;
        padding-right: 25vw;
        text-align: center;
    }

    font-size: 2rem;

    border-radius: 1rem;
    border: 2px solid #30ADE4;

    :visited {
        color: white;
    }

    :hover {
        color: #DCEFFA;
        background-color: #30ADE4;
    }

    :active {
        color: darkBlue;
    }

    :focus {
        outline: 0;
    }
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