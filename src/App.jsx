import { useState, useEffect } from "react";
import RecipeList from "./components/RecipeList/RecipeList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [recipes, setRecipes] = useState([])

  // const [recipes, setRecipes] = useState(
  //   window.localStorage.getItem("recipes")
  //     ? JSON.parse(window.localStorage.getItem("recipes"))
  //     : []
  // );

  // useEffect(() => {
  //   window.localStorage.setItem("recipes", JSON.stringify(recipes));
  // }, [recipes]);

  return (
    <RecipeList recipes={recipes} setRecipes={setRecipes}/>
  );
}

export default App;
