import React, { useState } from "react";
import axios from "axios";
import Button from "./button";
import SearchBar from "./searchBar";
import PokemonList from "./pokemonList";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  function handleInputChange(event) {
    setSearchQuery(event.target.value)
    console.log(searchQuery)
    //set search query to what ever the user types..
    //searhc query will then be used to get data from api..
  }

  function handleInputSubmit(event) {
    //same as above is it?? not sure, either way use searchQuery var to get api data
    //stop default form behavior, i.e refresh on enter ...
    event.preventDefault()
    setSearchQuery(event.target.value)
  }

  function getPokemon() {
    // use the search query to make api request
    // set pokemonList state to the data that we get back
    // we can then send that state though as props to be rendered in the pokemon list compopoent.
  }

  return (
    <div>
      <SearchBar handleSubmit={handleInputSubmit} handleChange={handleInputChange} value={searchQuery} lable="Search" />
      <SearchBar handleSubmit={handleInputSubmit} handleChange={handleInputChange} value={searchQuery} lable="Search" />
      <PokemonList pokemonData={pokemonList} />
    </div>
  );
}

export default App;
