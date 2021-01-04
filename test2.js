/*
//02 - Max
var numbers = [];
for (var i = 1; i <= 50; i++) {
    numbers.push(Math.floor(Math.random() * 151) + 50);
}
console.log(numbers);

var max = 1;
var min = 0;
var item;
for (var i = 0; i < numbers.length; i++) {
    for (var j = i; j < numbers.length; j++) {
        if (numbers[i] == numbers[j])
            min++;
        if (max < min) {
            max = min;
            item = numbers[i];
        }
    }
    min = 0;
}
console.log(`${item}: ${max} times.`);
//Exo 02
function countEach(string) {

    var countX = 0;
    var countO = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase()) {
            console.log("error");
        } else {
            var letter = string.charAt(i);
            if (letter === "x") {
                countX++
            }
            if (letter === "o") {
                countO++
            }
        }
    }


}
countEach("xooox");

function calculateAge(dateString) {
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

console.log(calculateAge(12 - 5 - 2002))

//04 - Swap

function swap(text) {
    var helloWorld = ''
    var string;
    for (i = 0; i <= text.length - 1; i++) {
        string = text[i];
        if (text[i] == string.toUpperCase()) {
            helloWorld += string.toLowerCase();
        } else {
            helloWorld += string.toUpperCase();
        }
    }
    console.log(helloWorld)
}

swap("Hello World");*/