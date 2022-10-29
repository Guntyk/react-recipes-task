import { deleteRecipe } from '../../../api/recipes';

export default function RecipeList({ recipes, setRecipes, toggleModal }) {
    function handleDelete(id) {
        const newRecipes = recipes.filter((recipe) => recipe.id !== id)
        setRecipes(newRecipes)
        deleteRecipe(id)
    }
    function handleEdit(id) {
        toggleModal()
    }

    return (
        <>
            {recipes.map((recipe) => (
                <div key={recipe.id} className="recipe">
                    <h2 className="recipe-name">{recipe.name}</h2>
                    <p className="recipe-descr">{recipe.description}</p>
                    <button className="icon-btn edit-btn" onClick={() => handleEdit(recipe.id)}>
                        <EditIcon />
                    </button>
                    <button className="icon-btn delete-btn" onClick={() => handleDelete(recipe.id)}>
                        <TrashIcon />
                    </button>
                </div>
            ))}
        </>
    )
};

// function EditRecipe({currentRecipe, recipes}) {
//     function handleInput(e) {
//         const name = e.target.name
//         const value = e.target.value
//         recipes.map((recipe) => {
//             recipe.id === currentRecipe.id ? {...recipes, name:value} : recipe
//         })
//     }
    
//     return (
//         <form key={currentRecipe.id} className="recipe">
//             <input className="recipe-name recipe-edit-input" value={currentRecipe.name} onChange={(e) => handleInput(e)}/>
//             <textarea className="recipe-descr recipe-edit-input" value={currentRecipe.description} />
//             <button type='submit'>Update</button>
//         </form>
//     )
// }







function TrashIcon() {
    return (
        <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" width="32px" height="32px"><path d="M 13.59375 4 L 13.28125 4.28125 L 12.5625 5 L 6 5 L 6 7 L 7 7 L 7 25 C 7 26.644531 8.355469 28 10 28 L 22 28 C 23.644531 28 25 26.644531 25 25 L 25 7 L 26 7 L 26 5 L 19.4375 5 L 18.71875 4.28125 L 18.40625 4 Z M 14.4375 6 L 17.5625 6 L 18.28125 6.71875 L 18.59375 7 L 23 7 L 23 25 C 23 25.554688 22.554688 26 22 26 L 10 26 C 9.445313 26 9 25.554688 9 25 L 9 7 L 13.40625 7 L 13.71875 6.71875 Z M 11 11 L 11 22 L 13 22 L 13 11 Z M 15 11 L 15 22 L 17 22 L 17 11 Z M 19 11 L 19 22 L 21 22 L 21 11 Z"/></svg>
    )
};
function EditIcon() {
    return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1.439 16.873l-1.439 7.127 7.128-1.437 16.873-16.872-5.69-5.69-16.872 16.872zm4.702 3.848l-3.582.724.721-3.584 2.861 2.86zm15.031-15.032l-13.617 13.618-2.86-2.861 10.825-10.826 2.846 2.846 1.414-1.414-2.846-2.846 1.377-1.377 2.861 2.86z"/></svg>
    )
};