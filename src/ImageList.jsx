import React from 'react';

const ImageList = ({ recipes }) => {
  return (
    <div className="grid justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map(recipe => (
          <div key={recipe.recipe.label} href={recipe.recipe.url} className="max-w-xs rounded overflow-hidden shadow-md bg-white">
            <img src={recipe.recipe.image} alt={recipe.recipe.label} className="w-full" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{recipe.recipe.label}</div>
              <p className="text-gray-700 text-base">
                {recipe.recipe.ingredientLines}
                {/* Ingredients: {formatIngredients(recipe.recipe.ingredients)} */}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

// const formatIngredients = (ingredients) => {
//   return ingredients.map(ingredient => ingredient.text).join(', ');
// };

export default ImageList;