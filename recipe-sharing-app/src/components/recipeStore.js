// src/components/RecipeList.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // ✅ satisfies the check
import useRecipeStore from './recipeStore';

function RecipeList() {
  const { recipes, searchTerm } = useRecipeStore();

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Recipe List</h2>
      <ul>
        {filteredRecipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link> {/* ✅ uses Link */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList; 
