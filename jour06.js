//01 - Format
function formatDate(date) {
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    return `${d}/ ${m}/${y} `
}

var dateFormet = formatDate(new Date(2002, 5, 16));
console.log(dateFormet);