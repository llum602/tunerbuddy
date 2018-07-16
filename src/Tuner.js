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
            <MenuItem eventKey="1"><Button bsStyle="link"><Link to='/Tuner/Violin'>Violin</Link></Button></MenuItem>
            <MenuItem eventKey="2"><Button bsStyle="link"><Link to='/Tuner/Guitar'>Guitar</Link></Button></MenuItem>
          </DropdownButton>
        </div>
        <div id="buddyBox">
          <img src={sleepingBuddy} className={"buddy"} alt="TunerBud"/>
        </div>
        <br/>
        <div id="instruBox">
          <InstruMain />
        </div>
      </div>
    );
  }
}

export default Tuner;