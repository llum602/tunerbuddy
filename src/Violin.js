import React, {Component} from 'react'
import './index.css';
import './App.css'
import { Button, ButtonToolbar, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import {Howl} from 'howler'

import testSound from './testAudio.mp3';
import pitchD from './pitchD.wav';
import pitchA from './pitchA.wav';
import pitchE from './pitchE.wav';
import pitchG from './pitchG.wav';

var sound = null;   
var soundD = null;
var soundA = null;
var soundE = null;

//keep track of how many pitches are playing
var notes = 0;

class Violin extends React.Component {
    playG = () => {
        if(sound != null) {
            sound.stop();
            sound = null;
            console.log('Stopping G (Violin)');    
            notes--;        
        }
        else {
            sound = new Howl({
                src: pitchG,
                loop: true
              });
            
            sound.play();
            console.log('Playing G (Violin)'); 
            notes++;           
        }
        this.changeCat;
    }

    playD = () => {
        if(soundD != null) {
            soundD.stop();
            soundD = null;
            console.log('Stopping D (Violin)');   
            notes--;         
        }
        else {
            soundD = new Howl({
                src: pitchD,
                loop: true
              });
            
            soundD.play();
            console.log('Playing D (Violin)');
            notes++;        
        }
        this.changeCat;
    }

    playA = () => {
        if(soundA != null) {
            soundA.stop();
            soundA = null;
            console.log('Stopping A (Violin)');   
            notes--;         
        }
        else {
            soundA = new Howl({
                src: pitchA,
                loop: true
              });
            
            soundA.play();
            console.log('Playing  A (Violin)');   
            notes++;         
        }
        this.changeCat;
    }

    playE = () => {
        if(soundE != null) {
            soundE.stop();
            soundE = null;
            console.log('Stopping E (Violin)'); 
            notes--;           
        }
        else {
            soundE = new Howl({
                src: pitchE,
                loop: true
              });
            
            soundE.play();
            console.log('Playing E (Violin)');   
            notes++;         
        }
        this.changeCat;
    }

    changeCat = () => {
        if(notes == 0) {

        }
        else if(notes == 1) {

        }
        else if(notes == 2) {

        }
        else {

        }
    }

      render() {

        return (
            <div>
                <div className="instruTitles"><h2><b>Violin</b></h2></div>
                <div id="toggleBox">
                    <ButtonToolbar>
                        <ToggleButtonGroup type="checkbox" name="options" justified>
                            <ToggleButton value={1} onChange={this.playG}>G</ToggleButton>
                            <ToggleButton value={2} onChange={this.playD}>D</ToggleButton>
                            <ToggleButton value={3} onChange={this.playA}>A</ToggleButton>
                            <ToggleButton value={4} onChange={this.playE}>E</ToggleButton>
                        </ToggleButtonGroup>
                    </ButtonToolbar>
                </div>
            </div>
        );
      }
    }


export default Violin