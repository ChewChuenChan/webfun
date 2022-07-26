// The Pizza Oven
// Create a fuction called pizzaOven that returns a JavaScript (Pizza)Object
// Make sure that we include: crustType, sauseType, cheeses, toppings
// Create a pizza with "deep dish","traditional", ["mozzarella"], and ["pepperoni", "sausage"]
// Create a pizza with "hand tossed", "marinara", ["mozzarella", "feta"], and ["mushrooms", "olives", "onions"]
// create 2 more pizzas with anytoppings
// Bonus Challenge: create a function called randomPizza that uses Math.random() to create a random pizza!

// function pizzaOven
function pizzaOven(crustType, sauseType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauseType = sauseType;
    pizza.cheeses   = cheeses;
    pizza.toppings  = toppings;
    return pizza;
}

// first pizza
var p1 = pizzaOven("deep dish","traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(p1);

// second pizza
var p2 = pizzaOven ("hand tossed", "marinara", ["mozzarella", "feta"],["mushrooms", "olives", "onions"]);
console.log(p2);

// Thrid pizza
var p3 = pizzaOven ("Crunchy Thin Crust", "Honeny BBQ Sauce", ["mozzarella", "Cheddar"],["Ham", "Pineapple", "olives"]);
console.log(p3);

// Forth pizza
var p4 = pizzaOven ("Gluten Free Crust", "Garlic Parmesan Sauce", ["mozzarella", "Shredded Provolone"],["Roasted Red Peppers", "Chicken", "Mushroom"]);
console.log(p4);

// Random pizza
var crust =["deep dish", "hand tossed", "crunchy thin crust", "gluten free crust"];
var sauce =["traditional", "marinara", "honey BBQ sause", "garlic parmesan sauce"];
var cheesesType =["mozzarella", "feta", "cheddar", "shredded Provaolone"];
var condiments =["pepperoni", "sausage", "mushrooms", "olives", "onions"];
var random =(Math.floor(Math.random()*3)+1);

// fuction randomPizza
function randomPizza (){
    var crustType = crust[random];
    var sauseType = sauce[random];
    var cheeses = cheesesType[random];
    var toppings = condiments[random];
    console.log (pizzaOven(crustType, sauseType, cheeses, toppings));
}
randomPizza();