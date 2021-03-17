import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css';


const Navbar = () => {
    return (
        <nav className="navbar">
            <h2>MockCher</h2>
            <ul>
                <li><Link style={{color: '#fff', textDecoration: 'none'}} to="/about">Projects</Link></li>
                <li><Link style={{color: '#fff', textDecoration: 'none'}}to="/about">Skills</Link></li>
                <li><Link style={{color: '#fff', textDecoration: 'none'}}to="/about">About me</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;