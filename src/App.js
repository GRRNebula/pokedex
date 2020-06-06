import React from 'react';
import './App.css';
import PokedexHeader from './components/PokedexHeader'

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
      <PokedexHeader author={'GRR'} nimi={"Pähkinä"}/>
    </div>
  );
}

export default App;
