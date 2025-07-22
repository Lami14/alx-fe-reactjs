import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h1>Recipes</h1>
      <Link to="/add">Add Recipe</Link>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            {' | '}
            <Link to={`/edit/${recipe.id}`}>Edit</Link>
            {' | '}
            <DeleteRecipeButton id={recipe.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList; 
