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

//Bonus

for (var i=1; i <= 100; i++){
    if (i % 3 ==0)
        console.log("fizz");
    else if (i% 5 ==0)
        console.log("buzz");
    else if (i % 3 ==0 && i * 5 ==0)
        console.log("fizzbuzz");
    else if (i % 7 ==0)
    console.log("fizzbuzz");    
    else
        console.log(i);
};

//Bonus II
var num = 0;
while(i<=10){
    i++
    total+=i;
};
console.log(total);

//Bonus III
var promo4 = ["Ahmed", "Mohammed", "Houra", "Mohamad Bailo", "Kitty", "Elisabeth", "Nicolas", "Yeshi Tsering", "Mahmoudou","Allan", "Ewa",
"Mosindo", "Hassan", "Sébastien", "Damir", "Hadama", "Thi", "Mohamed", "Atif", "Saurav"];

var name = Math.floor(Math.random() * promo4.length);

console.log(promo4[name]);

//Bonus IV
var tableau = [];
for (var i = 0; i < 20; i++){
    tableau.push(Math.floor(Math.random() * 100 ) )
}
console.log(tableau);

//1

var total = 0;
for(i=25; i<=75; i++){
    total+=i;
}
console.log(total); 

//2 

var total = 1;
for(i=10; i<=15; i++){
    total*=i;
}
console.log(total);