//01 - Sum
var numbers = [];
for (var i = 1; i <= 50; i++) {
    numbers.push(Math.floor(Math.random() * 101));
}
console.log(numbers);
var sum = 0;
for (var i in numbers) {
    sum += numbers[i];
}
console.log(`Sum : ${sum}`);