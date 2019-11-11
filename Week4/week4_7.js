function urutkanAbjad(str) {
  var a = [];
  for (let i = 0; i < str.length; i++) {
    a.push(str[i]);
  }
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (a[i] > a[j]) {
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
      }
    }
  }
  var hasil = "";
  for (let i = 0; i < a.length; i++) {
    hasil += a[i];
  }
  return hasil;
}

// TEST CASES
console.log(urutkanAbjad("hello")); // 'ehllo'
console.log(urutkanAbjad("truncate")); // 'acenrttu'
console.log(urutkanAbjad("developer")); // 'deeeloprv'
console.log(urutkanAbjad("software")); // 'aeforstw'
console.log(urutkanAbjad("aegis")); // 'aegis'
