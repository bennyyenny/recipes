const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require('dotenv');
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);

function removeJsonTags(jsonString) {
    // Check for ```json tags and remove them
    if (jsonString.startsWith('```json')) {
      // Find the closing ``` tag
      const endIndex = jsonString.lastIndexOf('```');
      // Remove the ```json tags and trim any extra whitespace
      return jsonString.slice(7, endIndex).trim();
    }
    return jsonString.trim(); // If no ```json tags, just trim any leading/trailing whitespace
}

async function connect(input) {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `Generate a recipe based on this prompt: ${input}. Please format and send back like this: {"name":"", "description":"", "ingredients":[list of ingredients as strings], "nutritional_facts":[{fact, amount}], "instructions":[list of instructions as strings], "tips":[list of tips as strings]}`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();

        console.log(text);

        return JSON.parse(removeJsonTags(text));

    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

module.exports = { connect };