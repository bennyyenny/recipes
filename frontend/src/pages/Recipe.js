import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar'
import DisplayRecipe from '../components/DisplayRecipe';

const Recipe = () => {
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await axios.get(`http://localhost:5001/recipes/${recipeId}`);
                setRecipe(response.data);
            } catch (error) {
                console.error('Error fetching recipe:', error);
            }
        };

        fetchRecipe();
    }, [recipeId]);

    if (!recipe) {
        return <p>Loading recipe...</p>;
    }

    return (
        <div className="recipe-display">
            <Navbar />
            <DisplayRecipe recipe={recipe} />
        </div>
    );
};

export default Recipe;
