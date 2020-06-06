import React from 'react';
import {
  Header,
  Image,
  Segment
} from 'semantic-ui-react'

const PokedexHeader = ({author, nimi}) => {
    return (
        <Segment basic inverted padded='very' vertical>
           <Header as='h1'>Tämä on henkilön {nimi} Pokedexin otsikko!</Header>
           <Image centered src={'pokeball.png'} size={'medium'}/>
          <Header as='h2'>Author: {author}</Header>
    </Segment>
    )
  }

  export default PokedexHeader