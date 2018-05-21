import React from 'react';
import {HashRouter as Router, Link, Route} from 'react-router-dom';
import { Home } from './Home';

export const Skills = () =>
    <div id="skillset">
    <header>skills</header>
    <div class="line"></div>
    <div class="skills">
    <div>
        <p>React</p>
        <p>JavaScript</p>
        <p>Python</p>
        <p>Node></p>
        <p>HTML/CSS</p>
        <p>GitHub</p>
    </div>
    <div>
        <p>Debugging</p>
        <p>Design</p>
        <p>Collaboration</p>
        <p>Communication</p>
    </div>
    </div>
        <div class="logos">
                <img 
                alt="js"
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" />
                <img 
                alt="python"
                src="http://www.pngall.com/wp-content/uploads/2016/05/Python-Logo-PNG-Image.png" />
                <img 
                alt="html"
                src="http://thewebrocks.com/demos/html5-3d-css/html5.png" />
                <img 
                alt="css"
                src="http://hguochen.com/static/img/tech/css3.png" />
                <img 
                alt="gh"
                src="https://cdn1.iconfinder.com/data/icons/simple-icons/256/github-256-black.png" />
        </div>  
        <Router>
            <Link to="/index.html">home</Link>
            <Route path="/index.html" component={Home}/>
        </Router> 
    </div>