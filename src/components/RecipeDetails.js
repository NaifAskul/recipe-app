/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetails = () =>{

    const [data ,SetData] = useState(null)

    const params = useParams()

    const id  = params.id

    const apiKey = `1044517a60304e99bd2f8b587be56dbb`

    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`


    useEffect(() =>{

        const fetchData = async () =>{

        const responseJson = await fetch(url)

        const responseObj = await responseJson.json()

        SetData(responseObj)

        }

        fetchData();
        

    }, [id] )

   return data&&(

        <div>
        <h1>{data.title}</h1>
        <img src = {data.image} alt = {data.title}/>
        <div dangerouslySetInnerHTML={{__html: data.summary}} />
        <h2>Ingredients</h2>
        <ul>
    {data.extendedIngredients.map((ingredient) => (
        <li key={ingredient.id}>{ingredient.original}</li>
    ))}
</ul>

        <h2>Instructions</h2>
        <ol>
            {data.analyzedInstructions[0].steps.map((steps) =>(

                <li key={steps.number}>{steps.step}</li>

            ))}
        </ol>
        </div>
    )

}

export default RecipeDetails