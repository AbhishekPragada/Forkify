import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';

// import icons from '../img/icons.svg' // Parcel 1

import 'core-js/stable'; // Polyflling everything else
import 'regenerator-runtime/runtime'; // Polyflling async await
import { async } from 'regenerator-runtime';

if(module.hot){
  module.hot.accept();
}

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////


const controlRecipes = async function(){
  try{
    const id = window.location.href.slice(22);
    if(!id) return;
    
    recipeView.renderSpinner();
    // 1. Loading Recipe
    await model.loadRecipe(id); // as it returns a promise
    // 2. Render Recipe
    recipeView.render(model.state.recipe); // const recipeView = new RecipeView(model.state.recipe);
  }
  catch(err){
    recipeView.renderError(`${err} invalid`);
  }
};

const controlSearchResults = async function(){
  try{
    resultsView.renderSpinner();
    // 1) Get search query
    const query = searchView.getQuery();
    if(!query) return
    // 2) Load Search Results
    await model.loadSearchResults(query);
    // 3) Render Search Results
    resultsView.render(model.state.search.results);
  }
  catch(err){
    console.log(err);
  }
}


const init = function(){
  searchView.addHandlerSearch(controlSearchResults);
  recipeView.addHandlerRender(controlRecipes);
}
init();

