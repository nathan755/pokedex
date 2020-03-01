import React, { useState, useEffect } from "react";
import axios from "axios";

function Pokemon(props) {
  /**props.pokemonData = array of objects [{name:"pokemon", url:"endpoint to get specific pokemon data"}...] */

  const [statsAreVisable, setStatsAreVisable] = useState(false); // make toggle stats function instead..
  const [data, setData] = useState({});

  const { height, weight, stats = "", sprites = "", types = "" } = data;

  const [speed="", specialDefense="", specialAttack="", defense="", attack="", hp=""] = stats;
  //WHY CANT I JUST SAY -- speed.stat.name? i can say speed.base_stat and i can say speed.effort so why cant i say speed.stat.name
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const { base_stat: speedStat, stat: speedName="" } = speed;                                           //
  const { base_stat: specialDefenseStat, stat: specialDefenseName="" } = specialDefense;                //
  const { base_stat: specialAttackStat, stat: specialAttackName="" } = specialAttack;                   // // <----- what a load of trash!!
  const { base_stat: defenseStat, stat: defenseName="" } = defense;                                     //
  const { base_stat: attackStat, stat: attackName="" } = attack;                                         //
  const { base_stat: hpStat, stat: hpName="" } = hp;                                                     // 
/////////////////////////////////////////////////////////////////////////////////////////////////////////
  
console.log(types.slot)

  useEffect(() => {
    getPokeData();
  }, []);

  async function getPokeData() {
    const response = await axios.get(props.url);
    setData(response.data);
  }

  function toggleStats() {
    setStatsAreVisable(false);
  }

  return (
    <div>
      <div>
        <h2></h2>
        <h2></h2>
      </div>
      <img></img>
      <div>
        <h3></h3>
        <h3>pokemon height</h3>
      </div>
      <div>
        <ul>
          <li>attack=</li>
          <li>defense=</li>
          <li>special attack=</li>
          <li>special defense=</li>
          <li>speed=</li>
        </ul>
      </div>
      <div>
        <button>show stats</button>
        <button>hide stats</button>
      </div>
    </div>
  );
}

export default Pokemon;

// 1. create function to make api request on click of show stats.
// 2. create some state to determine if show stats is tru/false.
// 3. show stats/hide stats button
// 4. make a pretty looking card with the necessery stats
// !!!! use the conditional rendering crap to display the stats is it ??
// maybe do some array destructuring on the data we are sent as props/...
// <h2>{props.name}</h2>
//<p>{props.url}</p>
//// I THINK HAVIGN TWO FUNTICIONS TO SHOW/HIDE STATS IS DUMB. MAYBE HAVE A TOGGLE STATS FUNCTION AND THEN USE SIMPLE IF STATEMRTNS TO CHECK WHAT TO SHOW..
//async ??
