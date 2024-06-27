// RecipeCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
    return (
        <div className="border-2 p-4 rounded-lg">
            <Link to={`/recipes/${recipe._id}`}>
                <h3 className="text-lg font-bold">{recipe.name}</h3>
                <p>{recipe.description}</p>
            </Link>
        </div>
    );
};

export default RecipeCard;
