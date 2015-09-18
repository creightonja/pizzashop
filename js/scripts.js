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

Pizza.prototype.description = function() {
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

$(document).ready(function(){
  

});
