function targetTerdekat(arr) {
  var o = 0;
  var beda = [];
  var terkecil = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "o") {
      o = i;
    } else if (arr[i] == "x") {
      beda.push(i);
    }

    for (let i = 0; i < beda.length; i++) {
      if (o < beda[i]) {
        var tmp = beda[i] - o;
        if (tmp < terkecil || terkecil == 0) {
          terkecil = tmp;
        }
      } else {
        var tmp = o - beda[i];
        if (tmp < terkecil || terkecil == 0) {
          terkecil = tmp;
        }
      }
    }
  }
  return terkecil;
}

// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
