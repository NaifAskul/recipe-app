import React, { useState } from "react";
import SearchResult from "./SearchResult";

const Search = () =>{

   const [q,setInput] = useState("");
   const [Results,setResults] = useState([]);

   const apiKey = `1044517a60304e99bd2f8b587be56dbb`

    async function handleClick(){

        const url = `https://api.spoonacular.com/recipes/complexSearch?query=${q}&apiKey=${apiKey}`

        const responseJson = await fetch(url)

        const responseObj = await responseJson.json()

        setResults(responseObj.results)


    }

    return(

        <div className="search-wrapper">

        <input type="text" placeholder="Type any dish you want" onChange={(e) => setInput(e.target.value)}/>

        <button onClick={handleClick}>Search</button>

        {Results ? (<SearchResult results={Results}/>): null}

        </div>
        

    )

}

export default Search

