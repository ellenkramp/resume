import React, { Component } from 'react';
import { Nav, Router } from './Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Nav />
        </Router>
      </div>
    );
  }
}

export default App;
