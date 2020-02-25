import React, { useState } from "react";

function Pokemon(props) {
// 1. create function to make api request on click of show stats.
// 2. create some state to determine if show stats is tru/false.
// 3. show stats/hide stats button
// 4. make a pretty looking card with the necessery stats 
// !!!! use the conditional rendering crap to display the stats is it ??
// maybe do some array destructuring on the data we are sent as props/...
const [statsAreVisable, setStatsAreVisable] = useState(false);


function showStats(){
    //api request goes here..
    setStatsAreVisable(true)
}

function hideStats(){
    setStatsAreVisable(false)
}


  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.url}</p>
    </div>
  );
}

export default Pokemon;
