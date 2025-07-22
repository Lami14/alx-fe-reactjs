// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import EditRecipeForm from './components/EditRecipeForm';
import AddRecipeForm from './components/AddRecipeForm'; // ✅ Required import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/edit/:id" element={<EditRecipeForm />} />
        <Route path="/add" element={<AddRecipeForm />} /> {/* ✅ Required route */}
      </Routes>
    </Router>
  );
}

export default App;
