import React, { useEffect, useState } from 'react'
import axios from "axios";

const Home = () => {
  const [recipes,setRecipes] = useState([]);
  useEffect(()=> {
    const fetchRecipe = async ()=> {
      try {
        const response = await axios.get("http://localhost:3001/recipes");
        setRecipes(response.data);
        console.log(response.data)
        alert("Recipe Created");
      
      } catch (error) {
        console.error(error);
      }
}
  })
  return (
    <div className='home'>
      
      <h1>Recipes</h1>
      <ul>
        {recipes.map((recipe)=>(
          <li key={recipe._id}>
            <div>
              <h2>{recipe.name}</h2>
            </div>
            <div className='instructions'>
              <p>{recipes.instructions}</p>
              </div>
                <img src={recipe.imageUrl} alt={recipe.name} />
                <p>Cooking Time: {recipe.cookingTime} (minutes)</p>
              

            

          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home