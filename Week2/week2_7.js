//No 1 Menyusun barisan bintang
for(var i =0; i<5; i++){
    console.log('*');
}

//No 2 Menyusun Barisan Bintang Dengan Nested Looping
for(var i =0; i<5; i++){
    var bintang ='';
    for(var j=0; j<5; j++){
        bintang += '*';
    }
    console.log(bintang);
}

//No 3 Menyusun Barisan Tangga Bintang Dengan Nested Looping
for(var i =0; i<5; i++){
    var bintang ='';
    for(var j=0; j<=i; j++){
        bintang += '*';
    }
    console.log(bintang);
}

