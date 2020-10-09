var category = "";
var cocktailDBURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
var searchBox = $('#searchBox');
var searchButton = $('.search');
var foodTitleEl = $('#foodTitle');
var drinkTitleEl = $('#drinkTitle');
var foodImageEl = $('#foodImage');
var drinkImageEl = $('#drinkImage');
var drinkInstructionsEl = $('#drinkInstuctions');


searchButton.on("change", function () {
    let category = $('.search option:selected').text();
    console.log(category);
    var mealDBURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category;
    $.ajax({
        url: mealDBURL,
        method: "GET"
    }).then(function (mealDB) {
        console.log(mealDB);
        $.ajax({
            url: cocktailDBURL,
            method: "GET"
        }).then(function (cocktailDB) {
            // console.log(mealDB.meals);
            var randomMealNumber = Math.floor(Math.random() * mealDB.meals.length);

            var randomMeal = mealDB.meals[randomMealNumber];

            console.log("this is the meal:", randomMeal);

            foodTitleEl.text(randomMeal.strMeal);

            var mealImage = randomMeal.strMealThumb;
            console.log("mealImage:", mealImage);
            foodImageEl.attr("src", mealImage)



            var randomNumberDrink = Math.floor(Math.random() * cocktailDB.drinks.length);

            var randomDrink = cocktailDB.drinks[randomNumberDrink];





            var drink = randomDrink.strDrink;
            drinkTitleEl.text(drink);

            var drinkImage = randomDrink.strDrinkThumb;
            drinkImageEl.attr("src", drinkImage)

            var drinkInstructions = randomDrink.strInstructions;
            drinkInstructionsEl.text(drinkInstructions)
            console.log(randomDrink);

            // for() {

            // }

            // console.log("meal db", mealDB);



            // console.log("random number:" + randomNumber);









        });
    });
});