var fs = require('fs');

//01 - File System
/*fs.readFile("./jour07.txt", (error, data) => {
    console.log(error);
    console.log(data.toString());
})
*/

//02 - Map Double
var array = [1, 2, 3, 4, 5];

var double = array.map(x => x * 2);

console.log(double);