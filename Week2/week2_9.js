//Tugas No 1
function haloFunction() {
    return 'Halo Function!';
}
console.log(haloFunction());

//Tugas No 2
function calculateMultiply(num1, num2) {
    return num1*num2;
}
var number1 = 2;
var number2 = 12;

var result = calculateMultiply(number1, number2);
console.log(result);

//Tugas No 3
function processSentence(name,age,address,hobby){
    return 'Nama saya ' + name + ', Umur saya ' + age + ' tahun, Alamat saya di ' + address + ', dan saya punya hobby yaitu ' + hobby + '!';
}
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);
