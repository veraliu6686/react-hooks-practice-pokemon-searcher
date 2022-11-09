import React,{useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemons, setPokemons] = useState ([])
  const [search, setSearch] = useState ('')

  useEffect (()=>{
    fetch("http://localhost:3001/pokemon")
    .then (r => r.json())
    .then (data => setPokemons (data))
  },[])

  const searchPokemon = pokemons.filter( pokemon =>{
      return pokemon.name.toLowerCase().includes(search.toLowerCase());
    })

  const submitForm = (newData) =>{
    setPokemons([...pokemons, newData])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm submitForm = {submitForm}/>
      <br />
      <Search  setSearch={setSearch}/>
      <br />
      <PokemonCollection pokemons = {searchPokemon}/>
    </Container>
  );
}

export default PokemonPage;
