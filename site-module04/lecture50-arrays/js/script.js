// Arrays
var array = new Array();
array[0] = "Yaakov";                    // String   (Primitive)
array[1] = 2;                           // Number   (Primitive)
array[2] = function (name) {            // Function (Object)
  console.log("Hello " + name);
};
array[3] = {course: "HTML, CSS & JS"}; // Object Literals (Object)

console.log("*** Print array ***");
console.log(array);
array[2](array[0]); //Calling here the function stored in [2] with the argument stored in [0]
console.log(array[3].course);

// Short hand array creation
console.log("*** Creating more arrays ***");
var names = ["Yaakov", "John", "Joe"];
console.log(names);

console.log("*** With for loop and i < array.length");
for (var i = 0; i < names.length; i++) {
  console.log("Hello " + names[i]);
}
names[100] = "Jim"; // "Jim" is added at 101th position in the array.
for (var i = 0; i < names.length; i++) {
  console.log("Hello " + names[i]); // "Yaakov, John, Joe, 97 undefied, Jim" will be displayed.
}

console.log("*** With for loop and i in array");
for (var i in names) {
  console.log("Hello " + names[i]); // "Yaakov, John, Joe, Jim" will be displayed.
}

console.log("*** Advanced for loop with i in array of object");
var myObj = {
  name: "Yaakov",
  course: "HTML/CSS/JS",
  platform: "Courera"
};

for (var prop in myObj) {
  console.log(prop + ": " + myObj[prop]); // With myObj[prop] to replace myObj.${prop} which is not possible
}

console.log("*** Advanced for loop with i in array of object again");
names.greeting = "Hi!"; // greeting becomes now a property of names and it will be also called now with i = greeting as property
for (var i in names) {
   console.log("Hello " + names[i] + " with " + i); // "Yaakov, John, Joe, Jim, Hi!" will be displayed.
}

