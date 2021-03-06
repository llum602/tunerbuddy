import React, {Component} from 'react'
import './index.css';
import './App.css'
import { Button, ButtonToolbar, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import {Howl} from 'howler'

import testSound from './testAudio.mp3';
import pitchD from './pitchD.wav';
import pitchA from './pitchA.wav';
import pitchC from './pitchC.wav';
import pitchG from './pitchG.wav';

var sound = null;   
var soundD = null;
var soundA = null;
var soundE = null;

class Viola extends React.Component {
    playG = () => {
        if(sound != null) {
            sound.stop();
            sound = null;
            console.log('Stopping G (Violin)');            
        }
        else {
            sound = new Howl({
                src: pitchG,
                loop: true
              });
            
            sound.play();
            console.log('Playing G (Violin)');            
        }
    }

    playD = () => {
        if(soundD != null) {
            soundD.stop();
            soundD = null;
            console.log('Stopping D (Violin)');            
        }
        else {
            soundD = new Howl({
                src: pitchD,
                loop: true
              });
            
            soundD.play();
            console.log('Playing D (Violin)');            
        }
    }

    playA = () => {
        if(soundA != null) {
            soundA.stop();
            soundA = null;
            console.log('Stopping A (Violin)');            
        }
        else {
            soundA = new Howl({
                src: pitchA,
                loop: true
              });
            
            soundA.play();
            console.log('Playing  A (Violin)');            
        }
    }

    playC = () => {
        if(soundE != null) {
            soundE.stop();
            soundE = null;
            console.log('Stopping E (Violin)');            
        }
        else {
            soundE = new Howl({
                src: pitchC,
                loop: true
              });
            
              soundE.play();
            console.log('Playing E (Violin)');            
        }
    }

      render() {

        return (
            <div>
                <div className="instruTitles"><h2><b>Violin</b></h2></div>
                <div id="toggleBox">
                    <ButtonToolbar>
                        <ToggleButtonGroup type="checkbox" name="options" justified>
                            <ToggleButton value={1} onChange={this.playC}>C</ToggleButton>
                            <ToggleButton value={2} onChange={this.playG}>G</ToggleButton>
                            <ToggleButton value={3} onChange={this.playD}>D</ToggleButton>
                            <ToggleButton value={4} onChange={this.playA}>A</ToggleButton>
                        </ToggleButtonGroup>
                    </ButtonToolbar>
                </div>
            </div>
        );
      }
    }


export default Viola