import React from 'react';

const DisplayRecipe = ({ recipe }) => {
  // Logging recipe object when it is available
  console.log('Recipe:', recipe);

  return (
    <div className="recipe-display">
      {recipe ? (
        <div>
          <h2 className="text-xl font-bold">{recipe.name}</h2>
          <p>{recipe.description}</p>
          <h3 className="text-lg font-bold">Ingredients:</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h3 className="text-lg font-bold">Instructions:</h3>
          <ol className="list-decimal">
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
          <h3 className="text-lg font-bold">Tips:</h3>
          <ul className="list-disc">
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
