import React, { useState, useEffect } from "react";
import axios from "axios";

import DropDown from "./dropDown";
import PokemonList from "./pokemonList";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("generation/1");
  

  useEffect(() => {
    //runs when component initailly mounts, similar to componentDidMount() and the runs every time the state searchQuery changes.
    axios.get("https://pokeapi.co/api/v2/" + searchQuery).then(response => {
     
        setPokemonList(response.data.pokemon_species);
        
     
    });
  }, [searchQuery]);

  function generationFilter(event) {
    // make axios request here and set the pokemon list to the desired thing..
    setSearchQuery("generation/" +event.target.value);
  }

  function typeFilter(event) {
    // and here
    setSearchQuery("type/" + event.target.value);
  }

  return (
    <div className="wrapper">
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

      <PokemonList pokemonData={pokemonList} />
    </div>
  );
}

export default App;
