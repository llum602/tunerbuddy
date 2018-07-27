import React from 'react'
import './index.css';
import './App.css'
import sleepingBuddy from'./sleepingBuddy.png';



const Home = () => (
    <div>
        <img src={sleepingBuddy} className={"buddy"} alt="TunerBud"/>
    </div>
)

export default Home