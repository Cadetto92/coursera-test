// Object literals and "this"
var literalCircle = { // new Object()
  radius: 10,

  getArea: function () {
    var self = this;

    var increaseRadius = function () {
      self.radius = 20; //Because of bug in Javascript with function inside function. Use self instead of this.
      console.log(this);  // this is now pointing on global/window.
      console.log(self);  // self is pointing on the function increaseRadius()
    };

    increaseRadius();
    console.log(this);  // Back to point on getArea ()
    console.log(self);  // self = this remember

    return Math.PI * Math.pow(this.radius, 2);
  }
};

console.log(literalCircle.getArea());

