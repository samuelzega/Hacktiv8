function pasanganTerbesar(num) {
   var stringNum = String(num)
   var tmp = 0
   for (let i = 0; i < stringNum.length-1; i++) {
       if (Number(stringNum[tmp])< Number(stringNum[i+1])) {
           tmp = i+1
       } else if (Number(stringNum[tmp]) == Number(stringNum[i+1])) {
            if (Number(stringNum[tmp])< Number(stringNum[i+1])) {
                tmp = i+1
            }
       }
   }
   return stringNum[tmp] + stringNum[tmp+1]
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99



