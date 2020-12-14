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