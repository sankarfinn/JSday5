// person class

class Person {
  constructor(frtName, lstName, age, city) {
    this.firstName = frtName;
    this.lastName = lstName;
    this.age = age;
    this.city = city;
  }
}

let man = new Person("sankara", "pandian", 27, "chennai");

console.log(man);

// Uber price

// formula is Price = Base fare + (Per-mile rate * Distance)+(Per-minute rate * time)+ surge Pricing 246.84

class Uber {
  constructor(price, dist, time, surPrice) {
    this.BaseFare = price;
    this.DistanceRate = dist;
    this.TimeRate = time;
    this.SurgePrice = surPrice;
  }
  getRaidDetails() {
    return `The Base Fare is ${this.BaseFare}Rs, The Distance of the Raid is ${this.DistanceRate}Km, with a time ${this.TimeRate} minute, with a SurgePrice ${this.SurgePrice} Rs `;
  }
  getPrice() {
    let price =
      this.BaseFare +
      20 * this.DistanceRate +
      0.5 * this.TimeRate +
      this.SurgePrice;
    return `Total Raid Price = ` + price;
  }
  setdetails(unexp) {
    this.DistanceRate = unexp;
  }
}
let cust = new Uber(150, 7, 17, 25);
cust.setdetails(9);
console.log(cust);

console.log(cust.getRaidDetails());
console.log(cust.getPrice());
