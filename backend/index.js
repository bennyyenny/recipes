const express = require('express');
const cors = require('cors');
const app = express();
const gemini = require('./modules/gemini');
const recipeController = require('./controllers/recipeController');
const mongoose = require('mongoose');
const port = process.env.PORT || 5001;

require('dotenv').config();

// Enable CORS
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI);

// GET endpoint to generate recipe based on prompt
app.get('/generate-recipe', async (req, res) => {
    try {
        const { prompt } = req.query; // Extract prompt from query parameters
        
        // Assuming gemini.connect() needs the prompt parameter
        const recipe = await gemini.connect(prompt);
        
        res.send(recipe); // Send generated recipe back to frontend
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
  
app.get('/getRecipes', recipeController.getRecipes);

app.get('/recipes/:recipeId', recipeController.getRecipeById);

app.post('/recipes', async (req, res) => {
    try {
      // Create a new recipe document using predefined values
      const newRecipe = new Recipe(predefinedRecipe);
  
      // Save the recipe to the database
      const savedRecipe = await newRecipe.save();
      res.status(201).json(savedRecipe); // Respond with the saved recipe
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

app.post('/save-recipe', recipeController.saveRecipe);

app.delete('/delete-recipe/:recipeId', recipeController.deleteRecipe);

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});