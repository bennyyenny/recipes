const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let recipeSchema = new Schema({
    name: String,
    description: String,
    ingredients: [String],
    nutritional_facts: [String],
    instructions: [String],
    tips: [String],
}, {
    collection: 'recipes'
});

let Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;