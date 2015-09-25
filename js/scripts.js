//Declaring global variables
var stationaryToppings = ["Pepperoni", "Italian Sausage", "Canadian Bacon", "Salami", "Beef", "Chicken", "Olive", "Onion", "Green Pepper", "Mushroom", "Tomato", "Pineapple"];
var specialties = ["Cheese", "Humdinger", "49er", "Usual", "Hawaiian", "Pepsausage"];
var specialtyToppings = [[],["Pepperoni", "Italian Sausage", "Olive", "Mushroom", "Salami"], ["Pepperoni", "Green Pepper", "Onion", "Mushroom", "Tomato"],
            ["Pepperoni", "Mushroom"], ["Canadian Bacon", "Pineapple"], ["Pepperoni", "Italian Sausage"]];
var selectedToppings = [];
var listOfToppings = [];
var thePizza = new Pizza(0,0,0);
var toppingLi;

//Setting up prototype object
function Pizza(num, size, toppings){
  this.num = num;
  this.size = size;
  this.toppings = toppings;
};

//Setters for properties
Pizza.prototype.setNum = function(num){
  this.num = num;
  return this.num;
};

Pizza.prototype.setSize = function(size){
  this.size = size;
  return this.size;
};

Pizza.prototype.setToppings = function(toppings){
  this.toppings = toppings;
  return this.toppings;
};

//Generating description based on different grammar of list length
Pizza.prototype.description = function(){
  var theToppings = this.toppings;
  var toppingsLength = theToppings.length;

  if (toppingsLength > 2){
    var lastTopping = theToppings.pop();
    var joinToppings = theToppings.join(", ");
    theToppings.push(lastTopping);
    return this.num + " " + this.size + " pizza(s) with " + joinToppings + ", and " + lastTopping;
  } else if (toppingsLength == 2){
    return this.num + " " + this.size + " pizza(s) with " + theToppings[0] + " and " + theToppings[1];
  } else if (toppingsLength == 0){
    return this.num + " " + this.size + " pizzas(s) with only cheese";
  } else {
    return this.num + " " + this.size + " pizza(s) with " + theToppings[0];
  }
};

//Calculating the cost of a pizza
Pizza.prototype.cost = function(){
  var toppingCount = this.toppings.length;
  if (this.size == "Small"){
    var sizeCost = 5.50;
    var toppingCost = toppingCount * .75;
  } else if (this.size == "Medium"){
    var sizeCost = 8.50;
    var toppingCost = toppingCount * 1.25;
  } else {
    var sizeCost = 11.50;
    var toppingCost = toppingCount * 1.75;
  }
  var pizzaCost = sizeCost + toppingCost;
  var total = pizzaCost * this.num;
  return "$" + total.toFixed(2); //setting to 2 deimals for dollars
};

//Generating an Li element for appending to the Document
function displayTopping(topping){
  var toppingLi = "<div class='" + topping + " topping'><span class='toppingSpan'>" + topping + "</span></div>";
  return toppingLi;
};

//Generating divs for specialty pizzas
function displaySpecialty(specialty){
  var specialtyDiv = "<div id='" + specialty + "' class='specialty'><span class='specialtySpan'>" + specialty + "</span></div>";
  return specialtyDiv;
};

//Adding a topping to the selected and removing from available
function addTopping(topping) {
  var index = listOfToppings.indexOf(topping);  //Finding Spot in array of topping
  listOfToppings.splice(index, 1);  //Removing from list of available array
  selectedToppings.push(topping); //Adding to list of selected array
  thePizza.setToppings(selectedToppings); //Setting the object to the new toppings
  var toppingLi = displayTopping(topping) // Generating new li
  return toppingLi;  //returning Li
};

//Removing a topping from selected and adding to available.
function removeTopping(topping){
  var index = selectedToppings.indexOf(topping);  //Repeat of previous
  selectedToppings.splice(index, 1);
  listOfToppings.push(topping);
  thePizza.setToppings(selectedToppings);
  var toppingLi = displayTopping(topping);
  return toppingLi;
};

function initialList(){
  $(".toppingUl").empty();
  listOfToppings = stationaryToppings.slice();
  selectedToppings = [];
  for (var i = 0; i < listOfToppings.length; i++){
    $(".available").append(displayTopping(listOfToppings[i]));
  };
};

$(document).ready(function(){

  for (var i = 0; i < specialties.length; i++){
    $(".the-specialities").append(displaySpecialty(specialties[i]));
  };

  initialList(); //Generating a cheese pizza

  $(".specialty").click(function(){
    var theSpecialty = $(this).attr("id");
    var index = specialties.indexOf(theSpecialty);
    var theToppings = specialtyToppings[index];
    initialList(); //Resetting toppings
    for (var i = 0; i < theToppings.length; i++){
      var theTopping = theToppings[i].split(" ");
      $("." + theTopping).appendTo(".selected");
          console.log(theToppings[i]);
    }
  });

  //Click listener for selecting/deselecting toppings
  $(".toppingUl").on('click', '.topping', function(){
    var parentClasses = $(this).parent().attr("class");
    var parentClass = parentClasses.split(" ");
    var currentClasses = $(this).attr("class");
    var theTopping = currentClasses.replace(" topping", "");
    var removeClass = currentClasses.split(" ");
    console.log(theTopping);
    if (parentClass[0] == "available"){
      $("." + removeClass[0]).appendTo(".selected");
    } else {
      $("." + removeClass[0]).appendTo(".available");
    }
  });

  $(".calculate").click(function(){
    var theSize = $("#selectSize").val();
    thePizza.setSize(theSize);
    var theNum = $("#selectNum").val();
    thePizza.setNum(theNum);
    thePizza.setToppings(selectedToppings);
    var calculate = thePizza.cost();
    $(".the-cost").empty();
    $(".the-cost").text(calculate);
    var pizzaDescription = thePizza.description();
    $(".order").text(pizzaDescription);
  });

});
