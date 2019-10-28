//No1 - looping menggunakan while
var i = 2;
var j = 20;
console.log("Loopign pertama");
while (i <= 20) {
  console.log(i + " - i love coding");
  i++;
}
console.log("Looping kedua");
while (j >= 2) {
  console.log(j + " - i love coding");
  j--;
}

//No2 - Looping Menggunakan For
console.log("Loopign pertama");
for(var i =2; i<=20; i++){
    console.log(i + " - i love coding");
}
console.log("Loopign kedua");
for(var i =20; i>=2; i--){
    console.log(i + " - i love coding");
}


//No 3 Angka Ganjil dan Genap
//counter + 1
console.log('counter + 1');
for(var i =1; i<=100; i++){
    if (i % 2 == 0) {
        console.log(i + ' Genap');
    } else {
        console.log(i + ' Ganjil');
    }
}

//counter + 2
console.log('counter + 2');
for(var i =1; i<=100; i+=2){
    if (i % 3 == 0) {
        console.log(i + ' kelipatan 3');
    } 
}

//counter + 5
console.log('counter + 5');
for(var i =1; i<=100; i+=5){
    if (i % 6 == 0) {
        console.log(i + ' kelipatan 6');
    } 
}

//counter + 9
console.log('counter + 9');
for(var i =1; i<=100; i+=9){
    if (i % 10 == 0) {
        console.log(i + ' kelipatan 10');
    } 
}
