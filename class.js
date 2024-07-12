// class - movie

class Movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
    if (rating == null) {
      return (this.rating = "PG");
    } else {
      return (this.rating = rating);
    }
  }
  getPG() {
    if (this.rating == "PG") {
      return this.rating;
    } else {
      return "not";
    }
  }
}
let mine = new Movie("Casino Royale", "Eon Production", "PG13");
let mine1 = new Movie("f&f", "paramount", "PG");
console.log(mine);
console.log(mine1);
console.log(mine.getPG());
console.log(mine1.getPG());
