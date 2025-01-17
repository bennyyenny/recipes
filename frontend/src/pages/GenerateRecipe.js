import React, { useState } from "react";
import axios from "axios";
import GenerateRecipeForm from "../components/GenerateRecipeForm";
import DisplayRecipe from "../components/DisplayRecipe";
import Navbar from "../components/Navbar";
import saladSVG from "../svg/salad.svg";
import mainSVG from "../svg/main.svg";
import cakeSVG from "../svg/cake.svg";

const GenerateRecipe = () => {
  const [recipe, setRecipe] = useState(null);
  const [isRecipeSaved, setIsRecipeSaved] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [noRecipeFound, setNoRecipeFound] = useState(null);

  // Function to handle generation of recipe based on user input (prompt)
  const handleGenerate = async (prompt) => {
    setIsLoading(true);
    setRecipe(null);
    setNoRecipeFound(null);
    setIsRecipeSaved(false);
    try {
      const response = await axios.get(
        `https://recipes-ten-eta.vercel.app/generate-recipe`,
        {
          params: { prompt: prompt }, // Pass prompt as query parameter
        }
      );
      setRecipe(response.data);
      setNoRecipeFound(false);
    } catch (error) {
      console.error("Error generating recipe:", error);
      setNoRecipeFound(true);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to handle saving of recipe to MongoDB
  const handleSave = async () => {
    console.log("Recipe to be saved:", recipe); // Log the recipe object
    try {
      const response = await axios.post(
        "https://recipes-ten-eta.vercel.app/save-recipe",
        recipe,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setIsRecipeSaved(true); // Update state to indicate the recipe has been saved
    } catch (error) {
      console.error("Error saving recipe:", error);
    }
  };

  return (
    <div>
      <section className="px-10 md:px-20">
        <Navbar />
        <h1 className="text-xl font-bold mb-4 text-center">Generate Recipe</h1>
        <section>
          <div className="flex justify-center gap-10 py-10 md:gap-20">
            <img src={saladSVG} alt="Salad SVG" className="w-1/4 md:w-auto" />
            <img src={mainSVG} alt="Main SVG" className="w-1/4 md:w-auto" />
            <img src={cakeSVG} alt="Cake SVG" className="w-1/4 md:w-auto" />
          </div>
          <GenerateRecipeForm onGenerate={handleGenerate} />
        </section>

        {isLoading && <p>Loading recipe...</p>}
        {noRecipeFound && <p>Couldn't find a recipe :( Please search for something else!</p>}
        {recipe && (
          <div>
            <DisplayRecipe recipe={recipe} />
            {isRecipeSaved ? (
              <p>Recipe saved successfully!</p>
            ) : (
              <button
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                onClick={handleSave}
              >
                Save Recipe
              </button>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default GenerateRecipe;
