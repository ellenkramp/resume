import React from 'react';
import {HashRouter as Router, Link, Route} from 'react-router-dom';
import { Home } from './Home';

export const Experience = () =>
    <div id="experience">
    <header>experience</header>
    <div class="line"></div>    
        <p><span class="year">[2016] Reynolds, Smith, and Hills</span><br />Marketing Communications Specialist</p>    
        <p><span class="year">[2014] MediaLab 3D Solutions</span><br />Digital Media Writer</p>
        <p><span class="year">[2012] Talk Fusion</span><br />IT Helpdesk Technician</p>
        <p><span class="year">[2011] CPI Group</span><br />Purchasing Assistant</p>
        <p><span class="year">[2010] Clear Channel Outdoor</span><br />Media Intern</p>
        <Router>
            <Link to="/index.html">home</Link>
            <Route path="/index.html" component={Home}/>
        </Router>
    </div>