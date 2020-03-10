import React, { useState, useEffect } from "react";
import axios from "axios";
import pokeball from "../images/pokeball.png"


function Pokemon(props) {
  const [dataURL, setDataURL] = useState();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [statsVisable, setStatsVisable] = useState(false);

  const pokeColours = {
    bug: "A8B820",
    dark: "705848",
    dragon: "7038F8",
    electric: "F8D030",
    fairy: "EE99AC",
    fighting: "C03028",
    fire: "F08030",
    flying: "A890F0",
    ghost: "705898",
    grass: "78C850",
    ground: "E0C068",
    ice: "98D8D8",
    normal: "A8A878",
    poison: "A040A0",
    psychic: "F85888",
    rock: "B8A038",
    steel: "B8B8D0",
    water: "6890F0"
  };

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
   
    var [speed, specialDefense, specialAttack, defense, attack, hp] = data.stats;
    
  }

  return (
    <div className="col-xs-12 col-md-6 col-lg-4 col-xl-3">
      <div className="card p-3 m-3">
        {!statsVisable && (
          <div className="card-body">
            <img
              onClick={statsToggler}
              className="card-img-top text-center"
              src={pokeball}
            ></img>
            <h3 className="card-text text-center">{props.name}</h3>
           
          </div>
        )}

        {statsVisable && (
          <div className="">
            <h2 className="card-text">{props.name}</h2>
            <h3>HP: {!loading && hp.base_stat}</h3>
            <hr />
            <button onClick={statsToggler}>hide stats</button>
            {loading ? (
              <i className="fas fa-spinner fa-spin"></i>
            ) : (
              <div className="text-center">
                <img className="w-100" src={data.sprites.front_default}></img>
           
                {data.types.map(typeStat => {
                  return (

                    
                    <span
                      className="badge m-1"
                      style={{
                        backgroundColor: "#" + pokeColours[typeStat.type.name]
                      }}
                    >
                      {typeStat.type.name}
                    </span>
                  ); //make an object with the colours and use the typestat to acsess the colours..
                })}
                <hr />
                <ul style={{listStyle:"none"}}>
                  <li>Height: {data.height}</li>
                  <li>Weight: {data.weight}</li>

                  <li>Attack: {attack.base_stat}</li>
                  <li>Defense: {defense.base_stat}</li>
                  <li>Special attack: {specialAttack.base_stat}</li>
                  <li>Special Defense: {specialDefense.base_stat}</li>
                  <li>Speed: {speed.base_stat}</li>
                 
                </ul>
              
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Pokemon;