import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useRecipeStore from './recipeStore';

function EditRecipeForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recipes, updateRecipe } = useRecipeStore();
  const existingRecipe = recipes.find((r) => r.id === id);

  const [title, setTitle] = useState('');
  const [instructions, setInstructions] = useState('');

  useEffect(() => {
    if (existingRecipe) {
      setTitle(existingRecipe.title);
      setInstructions(existingRecipe.instructions);
    }
  }, [existingRecipe]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe({ id, title, instructions });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} required />
      <button type="submit">Update Recipe</button>
    </form>
  );
}

export default EditRecipeForm; 
