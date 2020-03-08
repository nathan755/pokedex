import React, { useState, useEffect } from "react";
import axios from "axios";

function Pokemon(props) {
  const [dataURL, setDataURL] = useState();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [statsVisable, setStatsVisable] = useState(false);

  useEffect(() => {
    axios.get(props.url).then(response => {
      setDataURL("https://pokeapi.co/api/v2/pokemon/" + response.data.id);
    });
  }, [props.url]);

  const statsToggler = () => {
    axios.get(dataURL).then(response => {
      setData(response.data);
      setLoading(false);
    });

    if (statsVisable) {
      setStatsVisable(false);
    } else {
      setStatsVisable(true);
    }
  };

  if (!loading) {
    //is this stupid? i thought it would be better having nice variable names for each stat rather than saying data.stats[0].base_stat etc in the jsx below.
    var [speed, specialDefense, specialAttack, defense, attack] = data.stats;
  }

  return (
    <div className="card" >
      {!statsVisable && (
        <div className="card-body" >
        <img onClick={statsToggler} className="card-img-top" src="images/pokeball.png"></img>
        <p class="card-text">{props.name}</p>
        </div>
      )}















      

      {statsVisable && (
        <div>
          <button onClick={statsToggler}>hide stats</button>
          {loading ? (
            <i class="fas fa-spinner fa-spin"></i>
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
