git$(document).ready(function(){
    //     $('select').formSelect();
    //   });
    //   var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category;
    //     $.ajax({
    //     url: queryURL,
    //     method: "GET"
    //     }).then(function(response) {
    //     console.log(response);
    //     });
    // 1. Retrieve user inputs and convert to variables
    // 2. Use those variables to run an AJAX call ato the New York Times 
    // 3. Break down the Food Category Object into useable fields
    // 4. Dynamically generate html content
    // 5. Dealing with 'edge cases' bugs or situations  that are not intuitive
    var queryTerm = "";
    // URL Base
    var urlFoodBase = "https://www.themealdb.com/api/json/v1/1/filter.php?c="
    console.log(urlFoodBase)
    // Variable to track number of dish result
    var dishCounter = 0;
    function runQuery(queryURL){
      $.ajax({
          url: queryURL, 
          method: "GET"})
        .done(function(FoodData){
          console.log(queryURL);
          console.log(FoodData);
        })
    }
    $('#SearchBtn').on('click', function(){
      alert("test");
      queryTerm = $('#search').val().trim();
      console.log(queryTerm);
      var newURL = urlFoodBase + queryTerm;
      console.log(newURL);
    // runQuery("newURL");
      return false;
    })
    
    
    
    
    
    