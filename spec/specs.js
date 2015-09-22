describe("Pizza", function(){
  it("After inputting a pizza, testPizza.prop should return the specified property", function(){
    var testPizza = new Pizza(2, "Large", ["Pepperoni", "Sausage"]);
    expect(testPizza.num).to.equal(2);
    expect(testPizza.size).to.equal("Large");
    expect(testPizza.toppings).to.eql(["Pepperoni", "Sausage"]);
  });
});

describe("setNum", function(){
  it("Expect a new number of pizzas to change the pizza number.", function(){
    var testPizza = new Pizza(2, "Large", ["Pepperoni"]);
    expect(testPizza.setNum(1)).to.eql(1);
  });
});

describe("setSize", function(){
  it("Expect a new size of the pizza to change the pizza size.", function(){
    var testPizza = new Pizza(2, "Large", ["Pepperoni"]);
    expect(testPizza.setSize("Small")).to.eql("Small");
  });
});

describe("setToppings", function(){
  it("Expect new toppings of the pizzas to change the pizza toppings.", function(){
    var testPizza = new Pizza(2, "Large", ["Pepperoni"]);
    expect(testPizza.setToppings(["Pepperoni", "Sausage"])).to.eql(["Pepperoni", "Sausage"]);
  });
});

describe("describe", function(){
  it("Expect a printout of the selected pizza with 1 topping", function(){
    var testPizza = new Pizza(2, "Large", ["Pepperoni"]);
    expect(testPizza.description()).to.eql("2 Large pizza(s) with Pepperoni");
  });

  it("Expect a printout of the selected pizza with 2 toppings", function(){
    var testPizza = new Pizza(2, "Large", ["Pepperoni", "Sausage"]);
    expect(testPizza.description()).to.eql("2 Large pizza(s) with Pepperoni and Sausage");
  });

  it("Expect a printout of the selected pizza with 3 toppings", function(){
    var testPizza = new Pizza(2, "Large", ["Pepperoni", "Sausage", "Olive"]);
    expect(testPizza.description()).to.eql("2 Large pizza(s) with Pepperoni, Sausage, and Olive");
  });
});

describe("cost", function(){
  it("Expect one small pizza with 1 topping to cost 6.25", function(){
    var testPizza = new Pizza(1, "Small", ["Pepperoni"]);
    expect(testPizza.cost()).to.eql("$6.25");
  });

  it("Expect two medium pizzas with 2 topping to cost 20.00", function(){
    var testPizza = new Pizza(2, "Medium", ["Pepperoni", "Sausage"]);
    expect(testPizza.cost()).to.eql("$22.00");
  });
  it("Expect three large pizzas with 3 topping to cost 50.25", function(){
    var testPizza = new Pizza(3, "Large", ["Pepperoni", "Sausage", "Olive"]);
    expect(testPizza.cost()).to.eql("$50.25");
  });
});

describe("addTopping", function(){
  it("Expect to delete topping from list, and move to selected list, return Topping li", function(){
    expect(addTopping("Pepperoni")).to.eql("<div class='Pepperoni topping'>Pepperoni</li>");
    expect(listOfToppings).to.eql(["Sausage", "Ham", "Chicken", "Olive", "Onion", "Peppers", "Mushroom", "Tomatoes"]);
    expect(selectedToppings).to.eql(["Pepperoni"]);
  });
});

describe("removeTopping", function(){
  it("Expect to delete topping from selected list, and move to topping list, return Topping li", function(){
    expect(removeTopping("Pepperoni")).to.eql("<li class='Pepperoni topping list-group-item'>Pepperoni</li>");
    expect(listOfToppings).to.eql(["Sausage", "Ham", "Chicken", "Olive", "Onion", "Peppers", "Mushroom", "Tomatoes", "Pepperoni"]);
    expect(selectedToppings).to.eql([]);
  });
});
