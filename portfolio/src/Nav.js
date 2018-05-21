import React from 'react';
import {HashRouter, Link, Route, Switch} from 'react-router-dom';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Github } from './components/Github';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Home } from './components/Home';

export const Router = () =>
    <HashRouter>
        <Switch>
            <Route path="/about" component={About} />
            <Route path="/education" component={Education} />
            <Route path="/skills" component={Skills} />
            <Route path="/github" component={Github} />
            <Route path="/experience" component={Experience} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/" component={Home} />
        </Switch>
    </HashRouter>

export const Nav = () =>
    (<div>
        <button>
            <Link to="/about">About</Link>
        </button>
        <button>
            <Link to="/education">Education</Link>
        </button>
        <button>
            <Link to="/skills">Skills</Link>
        </button>
        <button>
            <Link to="/github">Github</Link>
        </button>
        <button>
            <Link to="/experience">Experience</Link>
        </button>
        <button>
            <Link to="/contact">Contact</Link>
        </button>
    </div>)