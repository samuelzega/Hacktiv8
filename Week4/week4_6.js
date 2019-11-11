function digitPerkalianMinimum(angka) {
  var jumlah = 0;
  for (let i = 1; i <= angka; i++) {
    if (angka % i == 0) {
      var pengali = angka / i;
      var tmp = i.toString().length + pengali.toString().length;
      if (tmp < jumlah || jumlah == 0) {
        jumlah = tmp;
      }
    }
  }
  return jumlah;
}
// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
