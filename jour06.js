//01 - Format
function formatDate(aaaa, mm, jj) {
    var year = new Date(aaaa);
    var month = new Date(mm);
    var day = new Date(jj);
    console.log(`${jj}/${mm}/${aaaa}`);
}
formatDate(2020, 12, 16);