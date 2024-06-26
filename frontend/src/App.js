import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import GenerateRecipe from './pages/GenerateRecipe';
import ViewRecipes from './pages/ViewRecipes';
import Recipe from './pages/Recipe';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/generate-recipe" element={<GenerateRecipe />} />
                    <Route path="/view-recipes" element={<ViewRecipes />} />
                    <Route path="/recipes/:recipeId" element={<Recipe />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
