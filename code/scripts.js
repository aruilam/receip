// Dummy data for testing
const recipesData = [
    {
      title: "Spaghetti Bolognese",
      ingredients: ["spaghetti", "tomato", "ground beef", "onion", "garlic"],
      instructions: "Cook spaghetti. Prepare sauce with beef, tomatoes, onion, garlic. Mix and serve.",
      image: "https://via.placeholder.com/250?text=Spaghetti+Bolognese"
    },
    {
      title: "Chicken Salad",
      ingredients: ["chicken breast", "lettuce", "tomato", "cucumber", "olive oil"],
      instructions: "Grill chicken, slice, and serve with vegetables.",
      image: "https://via.placeholder.com/250?text=Chicken+Salad"
    }
  ];
  
  // Function to handle recipe search
  function searchRecipes() {
    const query = document.getElementById("search-input").value.trim().toLowerCase();
    
    if (!query) {
      alert("Please enter ingredients or a food name.");
      return;
    }
  
    // Clear any previous results
    document.getElementById("recipe-list").innerHTML = "";
    document.getElementById("food-details").innerHTML = "";
  
    // Search in the dummy data (this part should be replaced with API integration)
    const searchResults = recipesData.filter(recipe => {
      return recipe.title.toLowerCase().includes(query) || recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(query));
    });
  
    // Display the results
    if (searchResults.length > 0) {
      displayRecipes(searchResults);
    } else {
      document.getElementById("recipe-list").innerHTML = "<p>No recipes found.</p>";
    }
  }
  
  // Function to display recipes
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
  