import React from 'react';
import {HashRouter as Router, Link, Route} from 'react-router-dom';
import { Home } from './Home';

export const Education = () =>
    <div id="education">
        <header>Education</header>
        <div class="line"></div>
        <p><span class="year">[2018] DigitalCrafts</span><br />Full-stack Immersive Coding Bootcamp</p>
        <p><span class="year">[2017] FreeCodeCamp</span><br />Front End Development Courses</p>
        <p><span class="year">[2011] University of South Florida</span><br />B.A., Mass Communications</p>
        <div class="logos">
                <img 
                alt="digitalcrafts"
                src="https://www.digitalcrafts.com/sites/all/themes/digitalcrafts/images/digitalcrafts-site-logo.png" />
                <img 
                alt="freecodecamp"
                src="https://design-style-guide.freecodecamp.org/downloads/freeCodeCamp-alternative.png" 
                id="free-cc" />
                <img
                alt="USF" 
                src="https://advance.fiu.edu/_assets/images/USF.bmp" />
        </div>
        <Router>
            <Link to="/index.html">home</Link>
            <Route path="/index.html" component={Home}/>
        </Router>
    </div>