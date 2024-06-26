import React, { useState } from 'react';

const GenerateRecipeForm = ({ onGenerate }) => {
    const [prompt, setPrompt] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Call parent component's function to handle generation
        onGenerate(prompt);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter a prompt:
                <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                />
            </label>
            <button type="submit">Generate Recipe</button>
        </form>
    );
}

export default GenerateRecipeForm;
