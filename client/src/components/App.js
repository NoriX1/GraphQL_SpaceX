import React from 'react';
import Launches from './Launches';
import Launch from './Launch';
import logo from '../logo.png';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <img
          src={logo}
          alt="SpaceX"
          style={{ width: 300, display: "block", margin: "auto" }}
        />
        <Route exact path="/" component={Launches} />
        <Route exact path="/launch/:flight_number" component={Launch} />
      </div>
    </BrowserRouter>
  );
}

export default App;
