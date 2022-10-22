import { useState } from "react";
import Form from "./Form/Form";
import "./RecipeList.css";

export default function RecipeList({ recipes, setRecipes }) {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const saveRecipe = (recipeObj) => {
    let tempList = recipes;
    tempList.push(recipeObj);
    setRecipes(tempList);
    setModal(false);
  };

  return (
    <div className="App">
      <div className="header text-center">
        <h3>Recipe List</h3>
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
          Create Recipe
        </button>
      </div>
      <ul className="recipes-container">
        {recipes.map((recipe) => (
          <div className="recipe">
            <h2 className="recipe-name">{recipe.Name}</h2>
            <p className="recipe-descr">{recipe.Description}</p>
          </div>
        ))}
      </ul>
      <Form toggle={toggle} modal={modal} save={saveRecipe} />
    </div>
  );
}
