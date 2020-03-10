import React, { useState, useEffect } from "react";
import axios from "axios";

import DropDown from "./dropDown";
import PokemonList from "./pokemonList";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    //runs when component initailly mounts, similar to componentDidMount().
    //sets deefault list of pokemon to the original gen 1s
    axios.get("https://pokeapi.co/api/v2/pokemon").then(response => {
      setPokemonList(response.data.results);
    });
  }, []);

  // set pokeList to [{name:pokemons name, url:endpoing to get pokemons stats etc..}] ----> the pokelist component only works if i send it data like this.
  // functions below needed because in order the generation

  function generationFilter(event) {
    axios
      .get("https://pokeapi.co/api/v2/generation/" + event.target.value)
      .then(response => {
        setPokemonList(response.data.pokemon_species);
      });
  }

  function typeFilter(event) {
    axios
      .get("https://pokeapi.co/api/v2/type/" + event.target.value)
      .then(response => {
        let pokeData = response.data.pokemon.map(pokemon => {
          // this crap is needed because i wanted a list like
          //[{name:pokemons name, url:endpoing to get pokemons stats etc..}] but the response.data.pokemon was nested differnetly to the generation
          return pokemon.pokemon;
        });
        setPokemonList(pokeData);
      });
  }

  return (
    //i think how im putting value in each of those options is wrong. somthing about single source of rtruth. 
    //if i put the value as state it doesnt work.. im sure its wrong but it works 
    <div>
      <DropDown
        label="Filter Pokemon by Generation"
        handleChange={generationFilter}
      >
        <option value="1">Generation I </option>
        <option value="2">Generation II </option>
        <option value="3">Generation III </option>
        <option value="4">Generation IV </option>
        <option value="5">Generation V</option>
        <option value="6">Generation VI</option>
        <option value="7"> Generation VII</option>
      </DropDown>

      <DropDown label="Filter Pokemon by Type" handleChange={typeFilter}>
        <option value="normal">Normal</option>
        <option value="fighting">Fighting </option>
        <option value="flying">Flying </option>
        <option value="poison">poison </option>
        <option value="ground">Ground</option>
        <option value="rock">Rock</option>
        <option value="bug">Bug</option>
        <option value="ghost">Ghost</option>
        <option value="steel">Steel </option>
        <option value="fire">Fire </option>
        <option value="water">Water </option>
        <option value="grass">Grass</option>
        <option value="electric">Electric</option>
        <option value="psychic"> Psychic</option>
        <option value="ice">Ice </option>
        <option value="dragon">Dragon </option>
        <option value="dark">Dark </option>
        <option value="fairy">Fairy</option>
        <option value="shadow">Shadow</option>
        <option value="unknown"> Unknown</option>
        
      </DropDown>

      <div className="container">
        <div className="row">
          <PokemonList pokemonData={pokemonList} />
        </div>
      </div>
    </div>
  );
}

export default App;
