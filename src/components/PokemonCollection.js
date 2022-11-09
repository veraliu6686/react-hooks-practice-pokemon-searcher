import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemons}) {
  const renderPokemon = pokemons.map(pokemon=>{
    // console.log (pokemon)
    return <PokemonCard key= {pokemon.id} pokemon={pokemon}/>
  })

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {renderPokemon}
    </Card.Group>
  );
}

export default PokemonCollection;
