import React from "react";
import Pokemon from "./pokemon";

function PokemonList(props) {
  /**props.pokemonData = array of objects [{name:"pokemon", url:"endpoint to get specific pokemon data"}...] */

  return (
    <div>
      {props.pokemonData.map(pokemon => {
        return <Pokemon name={pokemon.name} url={pokemon.url} />;
      })}
    </div>
  );
}

export default PokemonList;
