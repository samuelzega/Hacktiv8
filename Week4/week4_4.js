function cariModus(arr) {
  modus = {
    nilai: -1,
    jumlah: 1
  };
  isSame = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[0] == arr[i]) {
      isSame += 1;
    }
  }
  if (isSame == arr.length) {
    return modus.nilai;
  }

  for (let i = 0; i < arr.length; i++) {
    var tmp = 0;
    var x = 1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] != 0 && arr[i] == arr[j]) {
        x += 1;
      }
    }
    if (x > modus.jumlah) {
      modus.nilai = arr[i];
      modus.jumlah = x;
    }
  }
  return modus.nilai;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
