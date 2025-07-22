// src/components/RecipeList.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Matches "Link" and "react-router-dom"
import useRecipeStore from './recipeStore';

function RecipeList() {
  const { recipes, searchTerm } = useRecipeStore();

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Recipe List</h2>
      <ul>
        {filteredRecipes.map((recipe) => (
          <li key={recipe.id}>
            {/* ✅ Use Link to go to recipe detail */}
            <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList; 
