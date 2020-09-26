import React from 'react';
import Launches from './Launches';
import logo from '../logo.png';

const App = () => {
  return (
    <div className="container">
      <img
        src={logo}
        alt="SpaceX"
        style={{ width: 300, display: "block", margin: "auto" }}
      />
      <Launches />
    </div>
  );
}

export default App;
