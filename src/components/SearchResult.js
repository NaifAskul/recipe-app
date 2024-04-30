/* eslint-disable array-callback-return */
import React from "react";
import { Link } from "react-router-dom";

const SearchResult = ({results}) =>{

    return(
        <div>

        {
            results.map((recipe,index) => {

                return(

                <div className="recipe_card" key={index}>
                <Link to ={`/recipe/${recipe.id}`}>
                    <img src={recipe.image} alt={recipe.title}/>
                    <h2>{recipe.title}</h2>
                    </Link>
                </div>

                )
            })
        }

        </div>
    )

    
    
}

export default SearchResult