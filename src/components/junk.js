useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then(resonse => {
      console.log(resonse.data.results);
     console.log(searchQuery);
   });
  }, []);


  const { stats, types, weight } = response.data;

 // i think i need to set some variables == to some api endpoints
  // also i think we need to useEffet() and put in the square brackets [searchQuery], because if use effect will be called once same as componentDidMount!!fuy
  // i thinjk then the useefect will be called everytime searchquery is changed !!!!!!!!!!!!!!!!!

   //use the search query to make api request
  //set pokemonList state to the data that we get back
  // we can then send that state though as props to be rendered in the pokemon list compopoent.


   //set search query to what ever the user types..
    //searhc query will then be used to get data from api..


   // ,{
     // params:{query:searchQuery}
    //}

    //above all bullshit

    //.then(response => {
     // setData(response.data);
     // console.log(response.data);
   // })
   // .catch(error => {
     // console.log(error);
   // }

