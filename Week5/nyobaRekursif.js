// function cetakArray(arr) {
//     if (arr.length === 1) {
//         return arr
//     }
//     return cetakArray(arr.slice(1)).concat([arr[0]])
// }

// console.log(cetakArray([3,4,5,6,7,8]));
function cetakBintang(jumlah) {
    if (jumlah === 0) {
        return 
    }
    let h =''
    for (let i = 0; i < jumlah; i++) {
        h += '*'
    }
    // return cetakBintang(jumlah-1)
    cetakBintang(jumlah-1)
    console.log(h);
}
console.log(cetakBintang(5));
