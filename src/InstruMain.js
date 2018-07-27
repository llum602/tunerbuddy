import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NoInstrument from './NoInstrument'
import Violin from './Violin'
import Guitar from './Guitar'
import Viola from './Viola'


const InstruMain = () => (
    <main>
        <Switch>
            <Route exact path='/Tuner' component={NoInstrument}/>
            <Route path='/Tuner/Violin' component={Violin}/>
            <Route path='/Tuner/Guitar' component={Guitar}/>
            <Route path='/Tuner/Viola' component={Viola}/>
        </Switch>
    </main>
)

export default InstruMain