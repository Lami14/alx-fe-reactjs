import { useParams } from 'react-router-dom';
import useRecipeStore from './recipeStore';

function RecipeDetail() {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === id)
  );

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetail;
