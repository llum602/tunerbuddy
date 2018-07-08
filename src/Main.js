import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Tuner from './Tuner'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/Tuner' component={Tuner}/>
        </Switch>
    </main>
)

export default Main