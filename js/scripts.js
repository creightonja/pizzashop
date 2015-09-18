var toppings = [];

function Pizza(num, size, toppings){
  this.num = num;
  this.size = size;
  this.toppings = toppings;
};

Pizza.prototype.addTopping = function(topping) {
  var oldToppings = this.toppings;
  var newToppings = oldToppings.push(topping);
  this[toppings] = newToppings;
  return this.toppings;
};

Pizza.prototype.removeTopping = function(topping){
  var oldToppings = this.toppings;
  var index = oldToppings.indexOf(topping);
  var newToppings = oldToppings.splice(index, 1);
  this[toppings] = newToppings;
  return this.toppings;
};

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

Pizza.prototype.cost = function(){
  //debugger;
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
}

$(document).ready(function(){


});
