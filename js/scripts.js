//Declaring global variables
var toppings = [];
var listOfToppings = ["Pepperoni", "Sausage", "Ham", "Chicken", "Olive", "Onion", "Peppers", "Mushroom", "Tomatoes"];
var selectedToppings = [];
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
  if (theToppings.length > 2){
    var lastTopping = theToppings.pop();
    var joinToppings = theToppings.join(", ");
    return this.num + " " + this.size + " pizza(s) with " + joinToppings + ", and " + lastTopping;
  } else if (theToppings.length == 2){
    return this.num + " " + this.size + " pizza(s) with " + theToppings[0] + " and " + theToppings[1];
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
  total.toFixed(2);
  return total;
};

//Generating an Li element for appending to the Document
function displayTopping(topping){
  var toppingLi = "<li class='" + topping + " topping'>" + topping + "</li>";
  return toppingLi;
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

$(document).ready(function(){

  //Displaying all available toppings.
  for (var i = 0; i < listOfToppings.length; i++){
    $(".available").append(displayTopping(listOfToppings[i]));
  };

  //Click listener for selecting/deselecting toppings
  $(".toppingUl").on('click', '.topping', function(){
    var parentClasses = $(this).parent().attr("class");
    var parentClass = parentClasses.split(" ");
    var currentClasses = $(this).attr("class");
    var currentClass = currentClasses.split(" ");
    console.log(currentClass[0]);
    if (parentClass[0] == "available"){
      toppingLi = addTopping(currentClass[0]);
      $("." + currentClass[0]).remove();
      $(".selected").append(toppingLi);
    } else {
      toppingLi = removeTopping(currentClass[0]);
      $("." + currentClass[0]).remove();
      $(".available").append(toppingLi);
    }
  });

  $(".calculate").click(function(){
    var theSize = $("#selectSize").val();
    thePizza.setSize(theSize);
    var theNum = $("#selectNum").val();
    thePizza.setNum(theNum);
    var calculate = thePizza.cost();
    $(".the-cost").empty();
    $(".the-cost").text(calculate);
  });

});
