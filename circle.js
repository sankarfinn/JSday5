class circle {
  constructor(double, string) {
    this.double = double;
    this.string = string;
  }
  getRadius() {
    return this.double;
  }
  setRadius(new1) {
    this.double = new1;
  }
  getString() {
    return this.string;
  }
  setString(newStr) {
    this.string = newStr;
  }
  toString() {
    return `circle [radius = ${this.double}, color = ${this.string}]`;
  }
  getCircumference() {
    let radius = this.double;
    return 2 * 3.14 * radius;
  }
}
let circle1 = new circle(1.0, "red");
circle1.setRadius(1.0);
circle1.setString("orange");

console.log(circle1);
console.log(circle1.getRadius());
console.log(circle1.getString());
console.log(circle1.toString());
console.log(circle1.getCircumference());
