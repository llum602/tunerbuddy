import React, {Component} from 'react'
import './index.css';
import InstruMain from './InstruMain';
import { Switch, Link, Route } from 'react-router-dom';
import { DropdownButton, MenuItem, Button} from 'react-bootstrap';

import awakeCat from './awakeCat.png';
import Violin from './Violin'
import Guitar from './Guitar'
import Viola from './Viola'
import NoInstrument from './NoInstrument'

class Tuner extends React.Component {

  render() {
    
    return (
      <div>

      {/*<Switch>
        <Route exact path='/tuner' component={NoInstrument}/>
        <Route path='/tuner/:Violin' component={Violin}/>
        <Route path='/Guitar' component={Guitar}/>
        <Route path='/Viola' component={Viola}/>
      </Switch>*/}

      
        <div id="lBox">
          <p></p>
          <DropdownButton title="Instruments">
            <div id="menuItemTitles"><Link to='/Tuner/Violin'style={{ textDecoration: 'none' }}><MenuItem eventKey="1">Violin</MenuItem></Link></div>
            <div id="menuItemTitles"><Link to='/Tuner/Guitar'><MenuItem eventKey="2">Guitar</MenuItem></Link></div>
            <div id="menuItemTitles"><Link to='/Tuner/Viola'><MenuItem eventKey="3">Viola</MenuItem></Link></div>
          </DropdownButton>
        </div>

        <div id="buddyBox">
          <img src={awakeCat} className={"buddy"} alt="TunerBud"/>
        </div>

        <br/>

        <div id="instruBox">
          <InstruMain />
        </div>

        <br/>

        <div id="helperBox">

        </div>
      </div>
    );
  }
}

export default Tuner;