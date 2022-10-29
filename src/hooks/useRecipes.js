import { useState, useEffect } from "react";
import { createRecipe, getRecipes } from '../api/recipes';

export default function useRecipes() {
	const [modal, setModal] = useState(false);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes().then(([recipesErr, recipes]) => {
      if (recipes) {
        setRecipes(recipes);
      } else {
        console.log(recipesErr);
      }
    })
  }, []);

	const saveRecipe = (recipeObj) => {
    createRecipe(recipeObj).then(([createError, createdRecipe]) => {
      if (createdRecipe) {
        setRecipes((prevRecipes) => [...prevRecipes, createdRecipe]);
        setModal(false);
      } else {
        console.log(createError);
      }
    });
  };
  function searchRecipes(e) {
    e.preventDefault();
    const query = e.target.search.value.trim();
    getRecipes({ q: query }).then(([recipesErr, recipes]) => {
      if (recipes) {
        setRecipes(recipes);
      } else {
        console.log(recipesErr);
      }
    });
  }
  return
};
