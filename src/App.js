import React from 'react';
//import pokemonpic from src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/683.png"
//import logo from './logo.svg';
import './App.css';


function App() {
  const pokepiclink = <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/683.png"/>
  return (
    <div className="App">
      <header className="App-header">
      {pokepiclink}
        Tervetulloo Pokedeksiini!
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
