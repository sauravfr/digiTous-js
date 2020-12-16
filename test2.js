function formatDate(date) {
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    return `${d}/ ${m}/${y} `
}

var dateFormet = formatDate(new Date(2002, 12, 16));
console.log(dateFormet);