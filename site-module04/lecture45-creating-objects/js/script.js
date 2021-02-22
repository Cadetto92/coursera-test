// Object creation
var company = new Object(); // new object
company.name = "Facebook";
console.log(company);

company.ceo = new Object(); // new object inside new object
company.ceo.firstName = "Mark";
company.ceo.favColor = "blue";
console.log("Company CEO name is: " + company.ceo.firstName);
console.log(company["name"]); // Same a company.name

var stockPropName = "stock of company";
company["stock of company"] = 110;
company[stockPropName] = 110; // Same same
console.log("Stock price is: " + company[stockPropName]);

// Better way: object literal
var facebook = { // same a new Object() with predefined name/value pairs
  name: "Facebook",
  ceo: {
    firstName: "Mark",
    favColor: "blue"
  }, // Note here the comma ,
  "stock of company": 110 // Because of the spaces
}; //Note here the semi-colon ;
console.log(facebook);
