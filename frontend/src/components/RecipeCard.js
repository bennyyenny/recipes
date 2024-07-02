// RecipeCard.js
import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`https://recipes-ten-eta.vercel.app/delete-recipe/${recipe._id}`);
    
            if (response.status === 200) {
                window.location.reload();
            }
        } catch (error) {
            console.error("Error deleting recipe:", error);
            alert("An error occurred while deleting the recipe.");
        }
    };

  return (
    <div className="border-2 p-4 rounded-lg">
      <Link to={`/recipes/${recipe._id}`}>
        <h3 className="text-lg font-bold">{recipe.name}</h3>
        <p>{recipe.description}</p>
      </Link>
      <button onClick={handleDelete} className="text-white bg-red-400 hover:bg-red-400 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
          Delete
        </button>
    </div>
  );
};

export default RecipeCard;
