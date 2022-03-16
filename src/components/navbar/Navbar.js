import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click)
    };

    const closeMobileMenu = () => setClick(false);

    return (

        <>
            <nav className='navbar'>
                <Link to='/' 
                    className='navbar-logo'>
                    PAGE <i className='fab fa-freebsd' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/first-page' className='nav-links' onClick={closeMobileMenu}>
                            First Page
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/second-page' className='nav-links' onClick={closeMobileMenu}>
                            Second Page
                        </Link>
                    </li>

                </ul>

            </nav>
        </>
    )

}
export default Navbar