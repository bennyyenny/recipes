import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeCard from '../components/RecipeCard';
import Navbar from '../components/Navbar';

const ViewRecipes = () => {

    const [recipes, setRecipes] = useState(null); // State to store recipe data

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get(`http://localhost:5001/getRecipes`);
                setRecipes(response.data); // Set fetched/generated recipe data to state
            } catch (error) {
                console.error('Error generating recipe:', error);
            }
        };

        fetchRecipes(); // Invoke the fetchRecipes function
    }, []);


    return (
        <div>
            <Navbar />
            <h1>View Recipes Page</h1>
            {recipes && recipes.map((recipe, index) => (
                <RecipeCard key={index} recipe={recipe} />
            ))}
        </div>
    );
}

export default ViewRecipes;
