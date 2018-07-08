import React, {Component} from 'react'
import './index.css';
import InstruMain from './InstruMain';
import { Link } from 'react-router-dom';
import { DropdownButton, MenuItem, ButtonToolbar, Button} from 'react-bootstrap';

class Tuner extends React.Component {

  render() {
    function onViolin() {
      
    }
    return (
      <div>
        <div id="lbox">
          <DropdownButton title="Instruments">
            <MenuItem eventKey="1"><Button bsStyle="link"><Link to='/Tuner/Violin'>Violin</Link></Button></MenuItem>
            <MenuItem eventKey="2"><Button bsStyle="link"><Link to='/Tuner/Guitar'>Guitar</Link></Button></MenuItem>
          </DropdownButton>
        </div>
        <div>
          <InstruMain />
        </div>
      </div>
    );
  }
}

export default Tuner;