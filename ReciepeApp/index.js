// Function to add a recipe
const addRecipeArray = [];
function addRecipe() {
  // get the recipe value by id
  const name = document.getElementById("recipe-name").value;

  // get the element by class
  // const ingredientsByClass = document.querySelector(".Ingredients").value;

  const ingredients = document.getElementById("recipe-ingredients").value;

  if (name.trim() !== "" && ingredients.trim() !== "") {
    const recipe = {
      name: name,
      ingredients: ingredients,
    };

    // pushed to the array
    addRecipeArray.push(recipe);
    
    addRecipeToList(recipe)
    // Clear input fields
    document.getElementById("recipe-name").value = "";
    document.getElementById("recipe-ingredients").value = "";
  } else {
    alert("Please enter both name and ingredients for the recipe.");
  }
}

const addRecipeToList = (recipe) => {
  // Add recipe to the list
  const recipeList = document.getElementById("recipes");

  //  to create the element tag
  const li = document.createElement("li");

  li.className = "recipe-item";
  li.innerHTML = "<strong>" + recipe.name + "</strong>: " + recipe.ingredients;

  // appned to the parent element
  recipeList.appendChild(li);
};
