import React from 'react'
import { Link } from 'react-router-dom'
import './index.css';

const Header = () => (
    <header className="header">
        <ul>
            <li><a><Link to='/'>Home</Link></a></li>
            <li><a><Link to='/Tuner'>Tuner</Link></a></li>
        </ul>
    </header> 
)

export default Header