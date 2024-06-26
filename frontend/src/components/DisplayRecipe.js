import React from 'react';

const DisplayRecipe = ({ recipe }) => {
  // Logging recipe object when it is available
  console.log('Recipe:', recipe);

  return (
    <div className="recipe-display">
      {recipe ? (
        <div>
          <h2>{recipe.name}</h2>
          <p>{recipe.description}</p>
          <h3>Ingredients:</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h3>Instructions:</h3>
          <ol>
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
          <h3>Tips:</h3>
          <ul>
            {recipe.tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading recipe...</p>
      )}
    </div>
  );
};

export default DisplayRecipe;
