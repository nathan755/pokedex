import React, { useState, useEffect } from "react";
import axios from "axios";

import SearchBar from "./searchBar";
import PokemonList from "./pokemonList";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("pokemon");

  function handleInputChange(event) {
    setSearchQuery(event.target.value);
  }

  function handleInputSubmit(event) {
    event.preventDefault();
    //make get request based on what the user inputs. Make user friendll later.
    axios.get("https://pokeapi.co/api/v2/" + searchQuery).then(response => {
      setPokemonList(response.data.results);
    });
  }

  useEffect(() => {
    //runs when component initailly mounts, similar to componentDidMount()
    axios.get("https://pokeapi.co/api/v2/" + searchQuery).then(response => {
      setPokemonList(response.data.results);
    });
  }, []);

  return (
    <div>
      <SearchBar
        handleSubmit={handleInputSubmit}
        handleChange={handleInputChange}
        lable="Search"
      />
      <SearchBar
        handleSubmit={handleInputSubmit}
        handleChange={handleInputChange}
        lable="Search"
      />
      <PokemonList pokemonData={pokemonList} />
    </div>
  );
}

export default App;
