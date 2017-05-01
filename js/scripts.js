$(document).ready(function() {
  $("#favoriteThings").submit(function(event) {

    var faves = ["favoriteOne", "favoriteTwo", "favoriteThree", "favoriteFour", "favoriteFive"]
    var nameInput = $("input#name").val();

    faves.forEach(function(fave) {
      var userInput = $("input#" + fave).val();
      $("#unorderd").append("<li>" + userInput + "</li>");
    });

    $(".name").text(nameInput);
    $("#list").show();

    event.preventDefault();
  });
});
