import React, {Component} from 'react'
import './index.css';
import './App.css'
import { Link } from 'react-router-dom'
import { ButtonGroup, Button } from 'react-bootstrap'
import Synth, { Tone } from 'tone'
import {Howl} from 'howler'

import testSound from './testAudio.mp3';
import pitchD from './pitchD.wav';
import pitchA from './pitchA.wav';
import pitchE from './pitchE.wav';

var sound = null;   
var soundD = null;
var soundA = null;
var soundE = null;

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
            console.log('Stopping D (Violin)');            
        }
        else {
            soundA = new Howl({
                src: pitchA,
                loop: true
              });
            
            soundA.play();
            console.log('Playing D (Violin)');            
        }
    }

    playE = () => {
        if(soundE != null) {
            soundE.stop();
            soundE = null;
            console.log('Stopping D (Violin)');            
        }
        else {
            soundE = new Howl({
                src: pitchE,
                loop: true
              });
            
              soundE.play();
            console.log('Playing D (Violin)');            
        }
    }

      render() {

        return (
            <div id="instruBox">
                <p>Violin</p>
                <ButtonGroup>
                    <Button onClick={this.playG}>G</Button>
                    <Button onClick={this.playD}>D</Button>
                    <Button onClick={this.playA}>A</Button>
                    <Button onClick={this.playE}>E</Button>
                </ButtonGroup>
            </div>
        );
      }
    }


export default Violin