// RecipeCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
    return (
        <div className="recipe-card">
            <Link to={`/recipes/${recipe._id}`}>
                <h3>{recipe.name}</h3>
                <p>{recipe.description}</p>
            </Link>
        </div>
    );
};

export default RecipeCard;
