const Recipe = require('../models/recipeModel');

// GET endpoint to fetch all recipes
const getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find(); // Fetch recipes from MongoDB
        res.json(recipes); // Send fetched data as JSON response
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET endpoint to fetch recipe by id
const getRecipeById = async (req, res) => {
    const { recipeId } = req.params;

    try {
        const recipe = await Recipe.findById(recipeId);
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.json(recipe);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to save a recipe to MongoDB
const saveRecipe = async (req, res) => {
    try {
        const newRecipe = new Recipe(req.body);
        console.log(req.body, "hello");
        const savedRecipe = await newRecipe.save();
        res.status(201).json(savedRecipe);
    } catch (error) {
        res.status(500).json({ message: 'Error saving recipe', error });
    }
};

const deleteRecipe = async (req, res) => {
    const { recipeId } = req.params;

    try {
        if (!recipeId) {
            return res.status(400).json({ error: 'Recipe ID is required' });
        }
        const deletedRecipe = await Recipe.findByIdAndDelete(recipeId);
        if (!deletedRecipe) {
            return res.status(404).json({ error: 'Recipe not found' });
        }
        res.status(200).json({ message: 'Recipe deleted successfully' });
    } catch (error) {
        console.error('Error deleting recipe:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = {
    getRecipes,
    getRecipeById,
    saveRecipe,
    deleteRecipe,
};
