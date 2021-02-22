// Default values
function orderChickenWith1(sideDish) {
  console.log("Chicken1 with " + sideDish);
}

function orderChickenWith2(sideDish) {
  if (sideDish === undefined) {
  	sideDish = "whatever!"
  }
  console.log("Chicken2 with " + sideDish); 
}

function orderChickenWith3(sideDish) {
  sideDish = sideDish || "whatever!";  // Because if sideDish is false then return "whatver!"
  console.log("Chicken3 with " + sideDish);
}

orderChickenWith1("noodles");
orderChickenWith1();

orderChickenWith2("noodles");
orderChickenWith2();

orderChickenWith3("noodles");
orderChickenWith3();
