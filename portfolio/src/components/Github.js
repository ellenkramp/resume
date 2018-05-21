import React from 'react';
import {HashRouter as Router, Link, Route} from 'react-router-dom';
import { Home } from './Home';

export const Github = () =>
    <div id="github">
        <header>Recent Work</header>
        <div class="line"></div>
        <div class="snapshots">
            <div class="row">
                <a
                href="https://github.com/ellenkramp/hipster-gram" 
                target="blank">
                <img 
                    src="screen-grabs/hipstergram.png"
                    alt="hipstergram" /></a>
                <p>Hipstergram is a cheeky knock-off of Instagram, using DOM API's to manipulate the content (click image for code).</p>
            </div>
            <div class="row">
                <a href="https://github.com/rfpoulos/walkmeapp" 
                    target="blank">
                    <img 
                    src="screen-grabs/walkme.png"
                    alt="walkme" /></a>
                <p>WalkMe is an app for finding and sharing local walking tours, created in collaboration with two other developers. The app uses the
                    Google Maps API and Firebase to store data and locate users, helping them to record their own
                    walking tours, as well as follow the paths of other walking tour enthusiasts (click image for code).
                </p>
            </div>
            <div class="row">
                <a 
                href="https://github.com/ellenkramp/color_game" 
                target="blank">
                <img 
                src="screen-grabs/color-game.png" 
                alt="colorgame"/></a>
                <p>Color Game is a simple rgb color guessing game, with two difficulty settings (click image for code).</p>
            </div>       
        </div>
        <Router>
            <Link to="/index.html">home</Link>
            <Route path="/index.html" component={Home}/>
        </Router>
    </div>