import { useContext } from 'react';
import { RecipesContext } from '../../context/Recipes';
import RecipeList from './RecipeList/RecipeList';
import Form from './RecipeList/Form/Form';
import './Recipes.css';

export default function Recipes({ recipes }) {
  const {setRecipes} = useContext(RecipesContext)

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="App">
      <div className="header">
        <h3>Recipe List</h3>
        <button className="btn btn-primary create-recipes" onClick={() => setModal(true)}>
          Create Recipe
        </button>
        <form onSubmit={searchRecipes} className="search">
          <div>
              <input type="search" name="search" placeholder="Search..." />
          </div>
        </form>
      </div>
      <ul className="recipes-container">      
        <RecipeList recipes={recipes} setRecipes={setRecipes} toggleModal={toggleModal}/>
      </ul>
      <Form toggleModal={toggleModal} modal={modal} save={saveRecipe}/>
    </div>
  );
}