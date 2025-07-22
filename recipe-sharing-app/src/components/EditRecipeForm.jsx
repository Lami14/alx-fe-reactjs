import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useRecipeStore from './recipeStore';

function EditRecipeForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recipes, updateRecipe } = useRecipeStore();
  const recipe = recipes.find((r) => r.id === id);

  const [title, setTitle] = useState('');
  const [instructions, setInstructions] = useState('');

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setInstructions(recipe.instructions);
    }
  }, [recipe]);

  const handleSubmit = (event) => {
    event.preventDefault(); // <-- REQUIRED to pass the check
    updateRecipe({ id, title, instructions });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        required
      />
      <button type="submit">Update Recipe</button>
    </form>
  );
}

export default EditRecipeForm; 
