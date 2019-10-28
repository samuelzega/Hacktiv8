function xo(str) {
    let x = o =0;
    for(var i = str.length - 1; i>=0; i--){
        if (str[i]== 'x') {
            x+=1;
        } else if(str[i]== 'o'){
            o+=1;
        }  
    }
    return o==x;
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true