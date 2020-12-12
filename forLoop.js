//01 - Somme des carrés
var sum=0;

for (var i=5; i<=10; i++) {
    var carres = i*i;
    sum = sum += carres;
};
console.log(`Somme des carrés :  ${sum}`);

//### 02 - Comptons
var count =[];
for(var i = 100; i<=1000; i++){
    if(i%7===0){
        count.push(i);
    }
}
count = count.length;
console.log(`Comptons :  ${count}`);




