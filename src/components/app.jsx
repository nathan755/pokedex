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

  function handleDropDownChange(event) {
    setSearchQuery("generation/" + event.target.value);
  }

  return (
    <div className="wrapper">
      <DropDown
        label="Filter Pokemon by Generation"
        handleChange={handleDropDownChange}
      >
        <option value="1">Generation I </option>
        <option value="2">Generation II </option>
        <option value="3">Generation III </option>
        <option value="4">Generation IV </option>
        <option value="5">Generation V</option>
        <option value="6">Generation VI</option>
        <option value="7"> Generation VII</option>
      </DropDown>

      <PokemonList pokemonData={pokemonList} />
    </div>
  );
}

export default App;
