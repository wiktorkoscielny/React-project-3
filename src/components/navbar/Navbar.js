import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

const [click, setClick] = useState(false);

const handleClick = () => {
    setClick(!click)
}

const closeMobileMenu = () => setClick(false)

return (

<>
    <nav className='navbar'>
        <Link to='/' 
            className='navbar-logo'>
            EPIC <i className='fab fa-firstdraft' />
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
                <Link to='/search-page' className='nav-links' onClick={closeMobileMenu}>
                    Search
                </Link>
            </li>

            <li className='nav-item'>
                <Link to='/employee-page' className='nav-links' onClick={closeMobileMenu}>
                    Add Employee
                </Link>
            </li>

        </ul>

    </nav>
</>

)

}