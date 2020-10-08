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

            var meal = mealDB.meals[0].strMeal;
            foodTitleEl.text(meal)

            var mealImage = mealDB.meals[0].strMealThumb;
            foodImageEl.attr("src", mealImage)

            var drink = cocktailDB.drinks[0].strDrink;
            drinkTitleEl.text(drink)

            var drinkImage = cocktailDB.drinks[0].strDrinkThumb;
            drinkImageEl.attr("src", drinkImage)

            var drinkInstructions = cocktailDB.drinks[0].strInstructions;
            drinkInstructionsEl.text(drinkInstructions)

            console.log(cocktailDB);
            if (category == "1") {
                // this for loop give us back 4 random results for "beef"
                for (var i = 0; i < 5; i++) {
                    console.log(mealDB.meals[Math.floor(Math.random() * 34)]);
                }
            }
            if (category == "2") {
                // this for loop give us back 4 random results for "breakfast"
                for (var i = 0; i < 5; i++) {
                    console.log(mealDB.meals[Math.floor(Math.random() * 7)]);
                }
            }
            if (category == "3") {
                // this for loop give us back 4 random results for "chicken"
                for (var i = 0; i < 5; i++) {
                    console.log(mealDB.meals[Math.floor(Math.random() * 32)]);
                }
            }
            if (category == "4") {
                // this for loop give us back 4 random results for "dessert"
                for (var i = 0; i < 5; i++) {
                    console.log(mealDB.meals[Math.floor(Math.random() * 60)]);
                }
            }
            if (category == "5") {
                // this for loop give us back 4 random results for "lamb"
                for (var i = 0; i < 5; i++) {
                    console.log(mealDB.meals[Math.floor(Math.random() * 14)]);
                }
            }
            if (category == "6") {
                // this for loop give us back 4 random results for "misc."
                for (var i = 0; i < 5; i++) {
                    console.log(mealDB.meals[Math.floor(Math.random() * 11)]);
                }
            }
            if (category == "7") {
                // this for loop give us back 4 random results for "pasta"
                for (var i = 0; i < 5; i++) {
                    console.log(mealDB.meals[Math.floor(Math.random() * 8)]);
                }
            }
            if (category == "8") {
                // this for loop give us back 4 random results for "pork"
                for (var i = 0; i < 5; i++) {
                    console.log(mealDB.meals[Math.floor(Math.random() * 13)]);
                }
            }
            if (category == "9") {
                // this for loop give us back 4 random results for "seafood"
                for (var i = 0; i < 5; i++) {
                    console.log(mealDB.meals[Math.floor(Math.random() * 21)]);
                }
            }
            if (category == "10") {
                // this for loop give us back 4 random results for "side"
                for (var i = 0; i < 5; i++) {
                    console.log(mealDB.meals[Math.floor(Math.random() * 11)]);
                }
            }
            if (category == "11") {
                // this for loop give us back 4 random results for "starter"
                console.log(mealDB.meals);
            }
            if (category == "12") {
                // this for loop give us back 4 random results for "vegan"
                console.log(mealDB.meals);
            }
            if (category == "13") {
                // this for loop give us back 4 random results for "Vegetarian"
                for (var i = 0; i < 5; i++) {
                    console.log(mealDB.meals[Math.floor(Math.random() * 31)]);
                }
            }
        });
    });
});