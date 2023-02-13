import React from 'react';
import { Link } from 'react-router-dom';
import './footer.style.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='copyright'>
                Copyright Shelbourne & McGuinness 2023. All rights reserved.
            </div>
            <div className='links'>
                <Link className='link' to='#'> Terms & Conditions </Link>
                <span className='separator'> | </span>
                <Link className='link' to='#'> Created by: H.H. </Link>
            </div>
        </footer>
    );
}

export default Footer;