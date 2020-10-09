var category = "";
var cocktailDBURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
var searchBox = $('#searchBox');
var searchButton = $('.search');
var foodTitleEl = $('#foodTitle');
var drinkTitleEl = $('#drinkTitle');
var foodImageEl = $('#foodImage');
var drinkImageEl = $('#drinkImage');
var drinkInstructionsEl = $('#drinkInstuctions');
var searches = []
function loadSearches(){
    if (localStorage.getItem("searches")){
        searches=JSON.parse(localStorage.getItem("searches"))
        $("#pastSearches").empty()
        var count=0
         for (let i = searches.length -1; i >=  0 && count <= 5 ; i--, count++) {
            if(count <5){
                var a = $(`<a href="#!" class="collection-item">${searches[i]}</a>`)
                   $("#pastSearches").prepend(a)
            } 
         }
         $(".collection-item").on("click",function(){
           var category= $(this).text()
           loadFD(category)
         })
    }
}
loadSearches()
if (searches.length > 1){
    loadFD(searches[searches.length-1])
}
function loadFD(category){
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
            if(searches.includes(category)=== false){
                searches.push(category)
            localStorage.setItem("searches", JSON.stringify(searches) )
            loadSearches()
            }
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

            // var strIngredient = 
            var values = Object.values(randomDrink);
            console.log(Object.values(randomDrink));
            console.log(values[21]);
            var i = 21;
            ingredientsContainer.empty();
            while (i < 35) {
                i++;
                var strIngredient = values[i];
                var ingredients = $('<li>');
                ingredients.text(strIngredient);
                ingredientsContainer.append(ingredients);
                if (strIngredient === null) break;
                
                // console.log(strIngredient);
            }
            // for() {
            // }
            // console.log("meal db", mealDB);
            // console.log("random number:" + randomNumber);
        });
    });
}
searchButton.on("change", function () {
    let category = $('.search option:selected').text();
    console.log(category);
   loadFD(category)
});