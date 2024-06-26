import React, { useState } from 'react';
import axios from 'axios';
import GenerateRecipeForm from '../components/GenerateRecipeForm';
import DisplayRecipe from '../components/DisplayRecipe';
import Navbar from '../components/Navbar';

const GenerateRecipe = () => {
    const [recipe, setRecipe] = useState(null); // State to store recipe data

    // Function to handle generation of recipe based on user input (prompt)
    const handleGenerate = async (prompt) => {
        try {
            const response = await axios.get(`http://localhost:5001/generate-recipe`, {
                params: { prompt: prompt } // Pass prompt as query parameter
            });
            setRecipe(response.data); // Set fetched/generated recipe data to state
        } catch (error) {
            console.error('Error generating recipe:', error);
        }
    };

    return (
        <div>
            <Navbar />
            <h1>Generate Recipe</h1>
            <GenerateRecipeForm onGenerate={handleGenerate} />
            {recipe && <DisplayRecipe recipe={recipe} />}
        </div>
    );
}

export default GenerateRecipe;
