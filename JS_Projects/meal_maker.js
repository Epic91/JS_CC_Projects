const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },
    get appetizers() {
      return this._courses.appetizers;
    },
    get mains() {
      return this._courses.mains;
    },
    get desserts() {
      return this._courses.desserts;
    },
    set appetizers(appetizers) {
      this._courses.appetizers = appetizers
    },
    set mains(mains) {
      this._courses.mains = mains
    },
    set desserts(desserts) {
      this._courses.desserts = desserts
    },
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      };
    },
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice
      };
      return this._courses[courseName].push(dish)
    },
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price
      return `Your meal is: ${appetizer.name}, ${main.name} and ${dessert.name}. The price is ${totalPrice}.`;
    }
  }
  
  menu.addDishToCourse('appetizers', 'Mozerrella Sticks', 6.25);
  menu.addDishToCourse('mains', 'Bacon Cheeseburger', 14.00);
  menu.addDishToCourse('desserts', 'Cheesecake', 6.25);
  
  menu.addDishToCourse('appetizers', 'Nachos', 8);
  menu.addDishToCourse('mains', 'Wings', 15);
  menu.addDishToCourse('desserts', 'Ice cream', 5);
  
  menu.addDishToCourse('appetizers', 'Fries', 5);
  menu.addDishToCourse('mains', 'Chicken Salad', 7);
  menu.addDishToCourse('desserts', 'Cheesecake', 6.25);
  
  let meal = menu.generateRandomMeal()
  console.log(meal)