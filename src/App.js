import React from 'react';
import './App.css';
import PokedexHeader from './components/PokedexHeader'
import Tiktokpokemon from './components/tiktokkaajapokemon'
import { Button, Segment } from 'semantic-ui-react'



class App extends React.Component {
 // const pokemonpic = <img src="aromatissepokemon.png"/>
  constructor(props) {
    super(props)
    this.state = {
      name: "Pähkinäinen"
    }
  }
  render() { 
    return (
      <div className="App">
        <PokedexHeader 
          author={'GRR'} 
          nimi={this.state.name}/>
        <Tiktokpokemon/>
      </div>
    );
  }
}

export default App;
