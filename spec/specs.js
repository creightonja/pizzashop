describe("Pizza", function(){
  it("After inputting a pizza, testPizza.prop should return the specified property", function(){
    var testPizza = new Pizza(2, "Large", ["Pepperoni", "Sausage"]);
    expect(testPizza.num).to.equal(2);
    expect(testPizza.size).to.equal("Large");
    expect(testPizza.toppings).to.eql(["Pepperoni", "Sausage"]);
  });
});

describe("addTopping", function(){
  it("Expect a new topping to be added the object", function(){
    expect(addTopping("Olive")).to.equal(["Pepperoni", "Sausage", "Olive"]);
  });
});
