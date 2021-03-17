import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css';


const Footer = () => {
    return (
        <nav className="navbar">
            <h2>MockCher</h2>
            <ul>
                <li><Link to="/about">Projects</Link></li>
                <li><Link to="/about">Skills</Link></li>
                <li><Link to="/about">About me</Link></li>
            </ul>
        </nav>
    )
}

export default Footer;