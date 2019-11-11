function naikAngkot(arrPenumpang) {
  rute = ["A", "B", "C", "D", "E", "F"];
  var arr = [];
  for (let i = 0; i < arrPenumpang.length; i++) {
    if (arrPenumpang[i].length != 3) {
      arr.push("input tidak valid");
    } else {
      var obj = {};
      obj.penumpang = arrPenumpang[i][0];
      obj.naikDari = arrPenumpang[i][1];
      obj.tujuan = arrPenumpang[i][2];
      var panjangRute = rute.indexOf(obj.tujuan) - rute.indexOf(obj.naikDari);
      obj.bayar = 2000 * panjangRute;
      arr.push(obj);
    }
  }
  return arr;
}

//TEST CASE
console.log(naikAngkot([["Dimitri", "B", "F"], ["Icha", "A", "B"]]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
