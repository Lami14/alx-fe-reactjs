import { useParams } from 'react-router-dom';
import useRecipeStore from './recipeStore';

function RecipeDetails() {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === id)
  );

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p><strong>ID:</strong> {recipe.id}</p> {/* <-- this is required */}
      <p><strong>Instructions:</strong> {recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetails; 
