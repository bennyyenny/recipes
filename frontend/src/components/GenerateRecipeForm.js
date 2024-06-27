import React, { useState } from "react";

const GenerateRecipeForm = ({ onGenerate }) => {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call parent component's function to handle generation
    onGenerate(prompt);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
      <label className='flex flex-col items-center'>
        <p className="mb-2">What do you want to eat?</p>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-64 bg-gray-200 appearance-none border-2 border-gray-200 rounded md:w-96 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        />
      </label>
      <button
        type="submit"
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        Generate Recipe
      </button>
    </form>
  );
};

export default GenerateRecipeForm;
