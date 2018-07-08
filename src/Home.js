import React from 'react'
import './index.css';
import './App.css'
import { Link } from 'react-router-dom'
import mainLogo from'./resumeLogoEdit.png';



const Home = () => (
    <div>
        <p>Home</p>
        <img src={mainLogo} className={"buddy"} alt="TunerBud"/>
    </div>
)

export default Home