import React from 'react';
import './App.css';
import PokedexHeader from './components/PokedexHeader'
import Tiktokpokemon from './components/tiktokkaajapokemon'
import { Button, Segment } from 'semantic-ui-react'



function App() {
 // const pokemonpic = <img src="aromatissepokemon.png"/>
  return (
    <div className="App">
      <PokedexHeader author={'GRR'} nimi={"Pähkinä"}/>
       <Tiktokpokemon/>
    </div>
  );
}

export default App;
