import React from 'react';
import logo from './reddot2.gif';
import { Button } from "antd";
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button type="primary" size="large">Primary Button</Button>
      </header>
    </div>
  );
}

export default App;
