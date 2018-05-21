import React from 'react';
import { Home } from './Home';
import {HashRouter as Router, Link, Route} from 'react-router-dom';
import { Nav } from '../Nav';

export const About = () =>
        (<div id="about">
            <Nav />
            <div className="pic-sum">
            <header>about Ellen</header>
            <div className="line"></div>
                    <p>Outside of coding, I enjoy traveling, writing, and singing. I have a never-ending passion
                        for learning and am constantly looking for new topics to explore, whether it's new libraries and frameworks
                        like React or podcasts on world history and cryptocurrency.
                    </p>
                    <Router>
                        <Link to="/index.html">home</Link>
                        <Route path="/index.html" component={Home}/>
                    </Router>
            </div>
        </div>)