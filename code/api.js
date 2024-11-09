// Example of an API request (replace with actual API details)
async function searchRecipes() {
    const query = document.getElementById("search-input").value.trim();
    
    if (!query) {
      alert("Please enter ingredients or a food name.");
      return;
    }
  
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=YOUR_API_KEY`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (data.results) {
        displayRecipes(data.results); // Pass actual data to displayRecipes function
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Failed to fetch recipes. Please try again.");
    }
  }
  
  // Example of how to display the fetched recipes
  function displayRecipes(recipes) {
    const recipeList = document.getElementById("recipe-list");
  
    recipes.forEach(recipe => {
      const recipeCard = document.createElement("div");
      recipeCard.classList.add("recipe-card");
  
      recipeCard.innerHTML = `
        <h3>${recipe.title}</h3>
        <img src="${recipe.image}" alt="${recipe.title}" />
        <p><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
        <p><strong>Instructions:</strong> ${recipe.instructions}</p>
      `;
      
      recipeList.appendChild(recipeCard);
    });
  }
  