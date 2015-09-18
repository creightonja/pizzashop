describe("Pizza", function(){
  it("After inputting a pizza, testPizza.prop should return the specified property", function(){
    var testPizza = new Pizza(2, "Large", ["Pepperoni", "Sausage"]);
    expect(testPizza.num).to.equal(2);
    expect(testPizza.size).to.equal("Large");
    expect(testPizza.toppings).to.eql(["Pepperoni", "Sausage"]);
  });
});

describe("addTopping", function(){
  it("Expect a new topping (Olive) to be added the object", function(){
    var testPizza = new Pizza(2, "Large", ["Pepperoni"]);
    expect(testPizza.addTopping("Olive")).to.eql(["Pepperoni", "Olive"]);
  });

  it("Expect a new topping (Mushroom) to be added the object", function(){
    var testPizza = new Pizza(2, "Large", ["Pepperoni", "Olive"]);
    expect(testPizza.addTopping("Mushroom")).to.eql(["Pepperoni", "Olive", "Mushroom"]);
  });
});

describe("removeTopping", function(){
  it("Expect a topping (Olive) to be removed from the object", function(){
    var testPizza = new Pizza(2, "Large", ["Pepperoni", "Olive", "Sausage"]);
    expect(testPizza.removeTopping("Olive")).to.eql(["Pepperoni", "Sausage"]);
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
    expect(testPizza.cost()).to.eql(6.25);
  });

  it("Expect two medium pizzas with 2 topping to cost 20.00", function(){
    var testPizza = new Pizza(2, "Medium", ["Pepperoni", "Sausage"]);
    expect(testPizza.cost()).to.eql(22.00);
  });
  it("Expect three large pizzas with 3 topping to cost ", function(){
    var testPizza = new Pizza(3, "Large", ["Pepperoni", "Sausage", "Olive"]);
    expect(testPizza.cost()).to.eql(50.25);
  });
});
