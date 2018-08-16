import React from 'react'
import './index.css';
import './App.css'
import sleepingCat from './sleepingCat.png';



const Home = () => (
    <div>
        <img src={sleepingCat} className={"buddy"} alt="TunerBud"/>
    </div>
)

export default Home