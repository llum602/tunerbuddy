import React, {Component} from 'react'
import './index.css';
import InstruMain from './InstruMain';
import { Link } from 'react-router-dom';
import { DropdownButton, MenuItem, Button} from 'react-bootstrap';

import sleepingBuddy from'./sleepingBuddy.png';

class Tuner extends React.Component {

  render() {
    
    return (
      <div>
        <div id="lBox">
          <p></p>
          <DropdownButton title="Instruments">
            <Link to='/Tuner/Violin'><MenuItem eventKey="1"><div id="menuItemTitles">Violin</div></MenuItem></Link>
            <Link to='/Tuner/Guitar'><MenuItem eventKey="2"><div id="menuItemTitles">Guitar</div></MenuItem></Link>
          </DropdownButton>
        </div>

        <div id="buddyBox">
          <img src={sleepingBuddy} className={"buddy"} alt="TunerBud"/>
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