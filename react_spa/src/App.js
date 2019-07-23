import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1><code>local-compose</code> kitchen sink demo</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This page was rendered with React. Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <h2>Express <small><a href="/express">/express</a></small></h2>
      <iframe title="express" src="/express" style={{width: "90%", height: "150px"}} />

      <h2>Django <small><a href="/django">/django</a></small></h2>
      <iframe title="django" src="/django" style={{width: "90%", height: "150px"}} />

      <h2>Flask <small><a href="/flask">/flask</a></small></h2>
      <iframe title="flask" src="/flask" style={{width: "90%", height: "150px"}} />

      <h2>Rails <small><a href="/rails">/rails</a></small></h2>
      <iframe title="rails" src="/rails" style={{width: "90%", height: "150px"}} />

      <h2>Sinatra <small><a href="/sinatra">/sinatra</a></small></h2>
      <iframe title="sinatra" src="/sinatra" style={{width: "90%", height: "150px"}} />
    </div>
  );
}

export default App;
