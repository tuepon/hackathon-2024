import React from 'react';
import './App.css';

const ImageList = ({ recipes }) => {
  return (
    <div className="flex flex-wrap gap-5">
      {recipes.map(recipe => (
        <div key={recipe.recipe.label} className="max-w-xs rounded overflow-hidden shadow-md bg-white">
          <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">
            <img src={recipe.recipe.image} alt={recipe.recipe.label} className="w-full" />
          </a>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{recipe.recipe.label}</div>
            <p className="text-gray-700 text-base">
              Ingredients: {formatIngredients(recipe.recipe.ingredients)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const formatIngredients = (ingredients) => {
  return ingredients.map(ingredient => ingredient.text).join(', ');
};

export default ImageList;