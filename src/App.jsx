import Recipes from "./components/Recipes/Recipes";
import RecipesProvider from "./context/Recipes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (    
    <RecipesProvider>
      <Recipes />
    </RecipesProvider>
  );
}

export default App;
