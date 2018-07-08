import React, {Component} from 'react'
import './index.css';
import './App.css'
import { Link } from 'react-router-dom'
import { ButtonGroup, Button } from 'react-bootstrap'
import Synth, { Tone } from 'tone'
import {Howl} from 'howler'

import testSound from './testAudio.mp3';

var sound = null;

class Violin extends React.Component {
    playG = () => {
        if(sound != null) {
            sound.stop();
            sound = null;
            console.log('Stopping G (Violin)');            
        }
        else {
            sound = new Howl({
                src: testSound,
                loop: true
              });
            
            sound.play();
            console.log('Playing G (Violin)');            
        }
    }

      render() {

        return (
            <div id="instruBox">
                <p>Violin</p>
                <ButtonGroup>
                    <Button onClick={this.playG}>G</Button>
                    <Button>D</Button>
                    <Button>A</Button>
                    <Button>E</Button>
                </ButtonGroup>
            </div>
        );
      }
    }


export default Violin