import React, {Fragment, useState} from 'react';
import logo from '../../../components/images/logo.jpg';
import {FaBars, FaTimes} from 'react-icons/fa';
import { Outlet, Link } from 'react-router-dom';
import Footer from '../../Footer/footer.component';
import './navbar.style.scss';

const Navbar = () => {
const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);

  return (
    <Fragment>
    <div className='header'>
        <nav className='navbar'>
            <Link className='logo' to=''>
                <img src={logo} alt='logo'/>
            </Link>
            <div className='hamburger' onClick={handleClick}>
                { click ? (<FaTimes size={30} style={{color: '#ffffff'}}/>) : 
                          (<FaBars size={30} style={{color: '#ffffff'}}/>)}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'} >
                <li className='nav-item'>
                    <Link to='/collection' onClick={handleClick}>COLLECTION</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/bespoke' onClick={handleClick}>BESPOKE</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/trade' onClick={handleClick}>TRADE</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/about' onClick={handleClick}>ABOUT</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/contact' onClick={handleClick}>CONTACT</Link>
                </li>
            </ul>
        </nav>
    </div>
    <Outlet />
    <Footer />
    </Fragment>
   
  )
}

export default Navbar