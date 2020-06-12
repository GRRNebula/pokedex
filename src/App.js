import React from 'react';
import './App.css';
import PokedexHeader from './components/PokedexHeader'
import Tiktokpokemon from './components/tiktokkaajapokemon'
import {Input, Segment } from 'semantic-ui-react'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      author: 'GRR',
      name: "Pähkinäinen"
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(event, data) {
    this.setState({
      name: data.value
    })
  }

  render() { 
    console.log(this.state)
    return (
      <div className="App">
        <PokedexHeader 
          author={this.state.author}
          nimi={this.state.name}/>
          <Segment basic>
          <Input
            label="Kirjoita teksti tähän:"
            onChange={this.onChange}
            value={this.state.name}
            />
          </Segment>
        <Tiktokpokemon/>
      </div>
    );
  }
}

export default App;
