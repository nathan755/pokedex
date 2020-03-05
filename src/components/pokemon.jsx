import React, { useState, useEffect } from "react";
import axios from "axios";

function Pokemon(props) {
  /**props.pokemonData = array of objects [{name:"pokemon", url:"endpoint to get specific pokemon data"}...] */

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [statsVisable, setStatsVisable] = useState(false);

  useEffect(() => {
    axios.get(props.url).then(response => { /////make request hewre to get stats...
      setData(response.data);
      setLoading(false);
    });
  }, []);

  if (!loading) {
    //is this stupid? i thought it would be better having nice variable names for each stat rather than saying data.stats[0].base_stat etc in the jsx below.
    var [speed, specialDefense, specialAttack, defense, attack] = data.stats;
   
  }

  const statsToggler = () => {
    if (statsVisable) {
      setStatsVisable(false);
    } else {
      setStatsVisable(true);
    }
  };

  return (
    <div>
      <div onClick={statsToggler}>
        <h2>{props.name}</h2>
      </div>

      {statsVisable && (
        <div id="pokemon-card">
          <button onClick={statsToggler}>hide stats</button>
          {loading ? (
            <h3>loading....this will be a spinner</h3>
          ) : (
            <div>
              <img src={data.sprites.front_default}></img>
              <ul>
                <li>height={data.height}</li>
                <li>wight={data.weight}</li>
                {data.types.map(typeStat => {
                  return <h2>{typeStat.type.name}</h2>;
                })}
                <li>attack={attack.base_stat}</li>
                <li>defense={defense.base_stat}</li>
                <li>special attack={specialAttack.base_stat}</li>
                <li>special defense={specialDefense.base_stat}</li>
                <li>speed={speed.base_stat}</li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Pokemon;

