import React from 'react';
import ImageList from './ImageList';

const App = () => {
  // モックのためのダミーデータを作成
  const dummyRecipes = [
    {
      recipe: {
        label: 'Dummy Recipe 1',
        image: 'https://via.placeholder.com/300',
        ingredientLines: [
          "1 glug olive oil or cooking fat of your choice",
          "1 egg, any size",
          "Salt, pepper, herbs, spices or hot sauce, or all of the above"
        ]
      }
    },
    {
      recipe: {
        label: 'Dummy Recipe 2',
        image: 'https://via.placeholder.com/300',
        ingredientLines: [
          "1 glug olive oil or cooking fat of your choice",
          "1 egg, any size",
          "Salt, pepper, herbs, spices or hot sauce, or all of the above"
        ]
      }
    },
    {
      recipe: {
        label: 'Dummy Recipe 3',
        image: 'https://via.placeholder.com/300',
        ingredientLines: [
          "1 glug olive oil or cooking fat of your choice",
          "1 egg, any size",
          "Salt, pepper, herbs, spices or hot sauce, or all of the above"
        ]
      }
    },
    {
      recipe: {
        label: 'Dummy Recipe 4',
        image: 'https://via.placeholder.com/300',
        ingredientLines: [
          "1 glug olive oil or cooking fat of your choice",
          "1 egg, any size",
          "Salt, pepper, herbs, spices or hot sauce, or all of the above"
        ]
      }
    },
    {
      recipe: {
        label: 'Dummy Recipe 5',
        image: 'https://via.placeholder.com/300',
        ingredientLines: [
          "1 glug olive oil or cooking fat of your choice",
          "1 egg, any size",
          "Salt, pepper, herbs, spices or hot sauce, or all of the above"
        ]
      }
    },
    {
      recipe: {
        label: 'Dummy Recipe 6',
        image: 'https://via.placeholder.com/300',
        ingredientLines: [
          "1 glug olive oil or cooking fat of your choice",
          "1 egg, any size",
          "Salt, pepper, herbs, spices or hot sauce, or all of the above"
        ]
      }
    },
    // 他のダミーデータも追加可能
  ];

  return (
    <>
      <h1 className='text-3xl font-bold underline'>My Recipe</h1>
      <ImageList recipes={dummyRecipes} />
    </>
  );
};

export default App;
