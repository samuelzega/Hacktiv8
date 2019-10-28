function konversiMenit(menit) {
    var x= menit % 60;
    if(x<10){
        x = '0' + x;
    }
    return Math.floor(menit/60) + ':' + x;
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00
  var i = 22.5;
