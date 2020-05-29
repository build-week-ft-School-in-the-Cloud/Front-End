import React from 'react';
import styled from 'styled-components';

// styled components:
const FooterContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background-color: #50BDE4;
`;

const FooterText = styled.p`
    margin: 2rem;

    font-family: 'Open Sans', sans-serif;
    font-size: 2rem;

    text-align: center;

    color: #B9DEF0;
`;

// just a footer to display some text
const Footer = props => {

    return (

        <FooterContainer>
            <FooterText>Copyright 2020 Lambda Students</FooterText>
        </FooterContainer>

    )

}

export default Footer;