import React from "react";
import Pokemon from "./pokemon";

function PokemonList(props) {
  /**props.pokemonData = array of objects [{name:"pokemon", url:"endpoint to get specific pokemon data"}...] */
//console.log(props.pokemonData)
  return (
    <div>
      {props.pokemonData.map((pokemon, i) => {
        return <Pokemon name={pokemon.name} url={pokemon.url} key={i} />;
      })}
    </div>
  );
}

export default PokemonList;
