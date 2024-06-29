import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import DisplayRecipe from "../components/DisplayRecipe";

const Recipe = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(
          `https://recipes-ten-eta.vercel.app/recipes/${recipeId}`
        );
        setRecipe(response.data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };

    fetchRecipe();
  }, [recipeId]);

  if (!recipe) {
    return <p>Loading recipe...</p>;
  }

  return (
    <div className="recipe-display">
      <section className="px-10 md:px-20">
        <Navbar />
        <DisplayRecipe recipe={recipe} />
      </section>
    </div>
  );
};

export default Recipe;
