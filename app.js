const searchMeals = () => {
    const searchText = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    // Load Data:
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    const mealContainer = document.getElementById('meals');
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'single-result';
        mealDiv.innerHTML = `
        <div  onclick="allMealDetails('${meal.idMeal}')" class="meal">
            <img class="meal-img" src="${meal.strMealThumb}">
            <h3 class="meal-name">${meal.strMeal}</h3>
        </div>
        `;
        mealContainer.appendChild(mealDiv);
    });
}

const allMealDetails = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => singleMealInfo(data.meals[0]));

}

const singleMealInfo = meal => {
    mealDiv = document.getElementById('meal-detail');
    mealDiv.innerHTML = `
        <img class="meal-img" src="${meal.strMealThumb}">
        <h1>${meal.strMeal}</h1>
        <h5 id="text-ingredient">Ingredients</h5>
        <div class="ingredient-list">
        <p><i class="fas fa-check-square icon-color"></i> ${meal.strIngredient1}</p>
        <p><i class="fas fa-check-square icon-color"></i> ${meal.strIngredient2}</p>
        <p><i class="fas fa-check-square icon-color"></i> ${meal.strIngredient3}</p>
        <p><i class="fas fa-check-square icon-color"></i> ${meal.strIngredient4}</p>
        <p><i class="fas fa-check-square icon-color"></i> ${meal.strIngredient5}</p>
        <p><i class="fas fa-check-square icon-color"></i> ${meal.strIngredient6}</p>
        </div>
    `
} 