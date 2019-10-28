function addBinary(a,b) {
    let c = ''
    // var d = a+b
    for(var i= a+b; i>0; i = i/2){
      if((i%2)!=0){
        c+='1'
      }else{
        c+='0'
      } 
    }

    console.log(i);

    // return c
   }

//    console.log(addBinary(1,10))
addBinary(1,10);