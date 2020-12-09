//01 - Array
var fruits = ["mango", "lemon","blueberry"];
console.log("Array list:", fruits);
console.log("Array table:")
console.table(fruits);

//02 - Access
var ingredients = ["eggs", "milk", "butter"];
console.log(ingredients[1]);
console.log(ingredients.indexOf("butter"));

//03 - Add and Remove
/*var objects = ["pen", "book", "lamp"];
console.log(objects.push("chair"));
console.log(objects);*/
var objects = ["pen", "book", "lamp"];
objects.unshift("chair");
console.log(objects);
objects.pop("lamp");
console.log(objects);
objects.push("laptop");
console.log(objects);
objects.shift("chair");
console.log(objects);

//04 - Order
var numbers = [4, 10, 8, 12, 6];
console.log(numbers.reverse());
console.log(numbers.sort((a, b) => a - b));

//## 05 - Boucle

var total = 0;
for(i=1; i<=10; i++){
    total+=i;
}
console.log(total);




//## 06 - Reverse
var sentence = "Hello Konexio !"
var newString = "";
for (var i = sentence.length - 1; i >= 0; i--) { 
    newString = newString += sentence[i]; 
}
console.log(newString);
