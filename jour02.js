//01 - Number
var integer = 102;
var float = 13.9;
console.log(integer);
console.log(float);

//02 - Convert
var basic = 34;
var stringified = basic.toString();
console.log(stringified);

//03 - Round
var num = 1.5;
var rounded = Math.round(1.5);
console.log(rounded);

//04 - Arithmétique

var test = 12;
var bis = 5;
console.log(test+bis);
console.log(test-bis);
console.log(test*bis);
console.log(test/bis);
console.log(test%bis);

//05 - Comparaison
var test =143;
var bis = 219;
console.log(test==bis);
console.log(test===bis);
console.log(test!=bis);
console.log(test!==bis);
console.log(test>bis);
console.log(test<bis);
console.log(test>=bis);
console.log(test<+bis);


//06 - Condition
var limit = 50;
var score = 64;
if(limit<=score){
    console.log("Ok good !");
}else{
    console.log("Oh nooo...");
}

//07 - Condition II
var password = "azerty";
if(password.length>=5){
    console.log("The password is secure");
}

//08 - Condition III

if(limit<=score || password.length>=5) {
    console.log( "Everything is good");
}else if(limit<=score && password.length>=5){
    console.log("Something is good");
}else{
    console.log("Nothing is good" );
}

//Bonus

var random = Math.floor(Math.random() * 6) + 1;
if(random===6){
    console.log("Yes I win !");
}else{
    console.log("So close...");
}

//Bonus II
var month = "January";
switch (month) {
	case "January": 
		console.log("Winter");
		break;
	case "March": 
		console.log( "Spring");
		break;
	case "June": 
		console.log("Summer");
		break;
	case "September": 
		console.log("Fall");
		break;
	default: 
		console.log("That's not a season...");
}

 