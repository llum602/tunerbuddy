import React from 'react'
import { Link } from 'react-router-dom'
import './index.css';

import logo from'./resumeLogoEdit.png';

const Header = () => (
    <header className="header">
        <h4>
            <Link to='/'><img src={logo} className={"logo"} alt="Logo"/></Link>
            <ul>
                <li><a><Link to='/'>Home</Link></a></li>
                <li><a><Link to='/Tuner'>Tuner</Link></a></li>
            </ul>
        </h4>
    </header> 
)

export default Header