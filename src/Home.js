import React from 'react'
import './index.css';
import './App.css'
import sleepingBuddy from'./sleepingBuddy.png';



const Home = () => (
    <div>
        <p>Home</p>
        <img src={sleepingBuddy} className={"buddy"} alt="TunerBud"/>
    </div>
)

export default Home