import React from 'react'
import Logo from '../Images/Logo.jpg'
import { CiSearch } from 'react-icons/ci'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const header = () => {
    return (
        <header className='header'>
            <nav className='navbar'>
                <ul className='logo'>
                    <img src={Logo} alt="logo"></img>
                </ul>
                <ul className='nav-list'>
                    <li>Courses</li>
                    <li>Projects</li>
                    <li>Pricing</li>
                    <li>For Business</li>
                    <li>More</li>
                    <li><CiSearch style={{ fontSize: '24px' }}/></li>
                    <li><AiOutlineShoppingCart style={{ fontSize: '24px' }}/></li>
                    <li style={{ color: '#646bed' }}>Sign in</li>
                    <button className='btn-trial'>Start free trial</button>
                </ul>
            </nav>
        </header>
    )
}

export default header