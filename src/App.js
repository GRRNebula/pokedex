import React from 'react';
//import pokemonpic from src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/683.png"
//import logo from './logo.svg';
import './App.css';

//const Linkki= 
  //<a>
    //      className="App-link"
      //    href="https://vm.tiktok.com/KPmWRN/"
        //  target="_blank"
          //rel="noopener noreferrer"
        
        //  Suomipoikapokemon
      //  </a>




function App() {
  const pokemonpic = <img src="aromatissepokemon.png"/>
  return (
    <div className="App">
      <header className="App-header">
      {pokemonpic}
        Tervetulloo Pokedeksiini!
        <p>
          Всем привет!
        </p>
      
      </header>
    </div>
  );
}

export default App;
