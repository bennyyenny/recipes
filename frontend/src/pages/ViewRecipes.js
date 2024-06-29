import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";
import Navbar from "../components/Navbar";

const ViewRecipes = () => {
  const [recipes, setRecipes] = useState(null); // State to store recipe data

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(`https://recipes-ten-eta.vercel.app/getRecipes`);
        setRecipes(response.data); // Set fetched/generated recipe data to state
      } catch (error) {
        console.error("Error generating recipe:", error);
      }
    };

    fetchRecipes(); // Invoke the fetchRecipes function
  }, []);

  return (
    <div>
      <section className="px-10 md:px-20">
      <Navbar />
        <h1 className="text-xl font-bold mb-4">Recipes</h1>
        <div className="grid gap-8 md:grid-cols-4">
          {recipes &&
            recipes.map((recipe, index) => (
              <RecipeCard key={index} recipe={recipe} />
            ))}
        </div>
      </section>
    </div>
  );
};

export default ViewRecipes;
