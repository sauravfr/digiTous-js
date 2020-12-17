//01 - Format
function formatDate(date) {
    var dates = new Date(date);
    var d = dates.getDate();
    var m = dates.getMonth() + 1;
    var y = dates.getFullYear();
    console.log(`${d}/${m}/${y} `);

}

formatDate("2020-12-17");