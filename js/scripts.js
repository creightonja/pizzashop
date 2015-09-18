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

function removeTopping(topping){

};

// Pizza.prototype.description = function() {
//   return this.num + " " + ;
// }
