import React, { useState, useEffect } from "react";
import axios from "axios";

import DropDown from "./dropDown";
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
    //runs when component initailly mounts, similar to componentDidMount() and the runs every time the state searchQuery changes.
    axios.get("https://pokeapi.co/api/v2/" + searchQuery).then(response => {
      //essentially need to set the pokemon list here 
      setPokemonList(response.data.results);
      //console.log(response.data)
      
    });
  }, [searchQuery]);

  function handleDropDownChange(event){
    //setSearchQuery("generation/"+event.target.value)
    
    //console.log(event.target.value)
  }

  function tester(){
    console.log("here")
    axios.get("https://pokeapi.co/api/v2/generation/1").then(response => {
     
      console.log(response.data.pokemon_species)
      
    });

  }


  return (
    <div>
    <button onClick={tester}>test</button>
      <DropDown label="Filter Pokemon by Generation" handleChange={handleDropDownChange} >
        <option value="1" >Generation I  </option>
        <option  value="2">Generation II </option>
        <option value="3">Generation III </option>
        <option value="4">Generation IV </option>
        <option value ="5">Generation V</option>
        <option value ="6">Generation VI</option>
        <option value="7"> Generation VII</option>
        <option value="8"> Generation VIII</option>
      </DropDown>
      <DropDown label="Filter Pokemon by Type">
        <option > normal </option>
        <option > Grass</option>
        <option > Fire</option>
        <option> Water</option>
        <option > Fighting</option>
        <option > Flying</option>
        <option >Poison </option>
        <option >Ground </option>
        <option > Rock </option>
        <option > Bug</option>
        <option > Ghost</option>
        <option> </option>
        <option > Fighting</option>
        <option > Flying</option>
        <option >Poison </option>
        <option >Ground </option>
      </DropDown>
      <button>Search</button>
      <PokemonList pokemonData={pokemonList} />
    </div>
  );
}

export default App;
