import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet';
import {storage} from '@common/reactlib'


function App() {
  const s =new storage();
  s.add();

  return (
    <div className="App">
      <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
      </Helmet>
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
