import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],
  recommendations: [],
  
  setRecipes: (newRecipes) => set({ recipes: newRecipes }),
  
  addFavorite: (recipe) =>
    set((state) => ({
      favorites: [...state.favorites, recipe],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((r) => r.id !== recipeId),
    })),

  setRecommendations: (recommendations) => set({ recommendations }),
}));

export default useRecipeStore; 
