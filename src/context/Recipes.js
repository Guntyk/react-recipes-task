import { createContext } from "react";
import { useRecipes } from "../hooks/useRecipes"

export const RecipesContext = createContext()

export default function RecipesProvider({children}) {
    const recipesData = useRecipes()
    return <RecipesContext.Provider value={recipesData}>{children}</RecipesContext.Provider>
};
