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

//05 - Comparaison

var test =143;

var bis = 219;

console.log(test==bis);

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

console.log(password.length);