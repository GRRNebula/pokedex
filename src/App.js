import React from 'react';
import logo from href="https://assets.pokemon.com/assets/cms2/img/pokedex/full/683.png"
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
       // <img src={logo} className="App-logo" alt="logo" />
        <p>
          Всем привет!
        </p>
        <a
          className="App-link"
          href="https://vm.tiktok.com/KPmWRN/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Suomipoikapokemon
        </a>
      </header>
    </div>
  );
}

export default App;
