import axios from 'axios';

const recipesApi = axios.create({
  baseURL: 'http://localhost:4000/recipes'
});

recipesApi.interceptors.response.use(
  (response) => [null, response.data],
  (error) => [error, null]
);

export const getRecipes = (params) => recipesApi.get('', { params });
export const getRecipe = (id) => recipesApi.get(`/${id}`);
export const createRecipe = (data) => recipesApi.post(``, data);
export const deleteRecipe = (id) => recipesApi.delete(`/${id}`);
export const updateRecipe = (id, data) => recipesApi.patch(`/${id}`, data);