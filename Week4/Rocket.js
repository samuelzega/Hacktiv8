/**
 * =========
 * Isi Kotak
 * =========

 * [Rules]
 * 1. Dilarang membuat function lain selain yang berada di skeleton code.
 * 2. Dilarang menggunakan built-in function:
 *    map, filter, reduce, forEach, split, slice, splice, join, reverse, sort
 */

function isiKotak(num) {
  console.log('')
  // Write your code here
}

console.log(isiKotak(1))
// [ [ 1 ] ]
console.log(isiKotak(2))
// [ [ 1, 2 ],
//   [ 1, 2 ] ]
console.log(isiKotak(3))
// [ [ 1, 2, 3 ],
//   [ 2, 1, 2 ],
//   [ 3, 2, 1 ] ]
console.log(isiKotak(4))
// [ [ 1, 2, 3, 4 ],
//   [ 3, 2, 1, 2 ],
//   [ 3, 4, 3, 2 ],
//   [ 1, 2, 3, 4 ] ]
console.log(isiKotak(5))
// [ [ 1, 2, 3, 4, 5 ],
//   [ 4, 3, 2, 1, 2 ],
//   [ 3, 4, 5, 4, 3 ],
//   [ 2, 1, 2, 3, 4 ],
//   [ 5, 4, 3, 2, 1 ] ]
console.log(isiKotak('5'))
// Invalid
console.log(isiKotak(false))
// Invalid
console.log(isiKotak(10))
// [ [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ],
//   [ 9, 8, 7, 6, 5, 4, 3, 2, 1, 2 ],
//   [ 3, 4, 5, 6, 7, 8, 9, 0, 9, 8 ],
//   [ 7, 6, 5, 4, 3, 2, 1, 2, 3, 4 ],
//   [ 5, 6, 7, 8, 9, 0, 9, 8, 7, 6 ],
//   [ 5, 4, 3, 2, 1, 2, 3, 4, 5, 6 ],
//   [ 7, 8, 9, 0, 9, 8, 7, 6, 5, 4 ],
//   [ 3, 2, 1, 2, 3, 4, 5, 6, 7, 8 ],
//   [ 9, 0, 9, 8, 7, 6, 5, 4, 3, 2 ],
//   [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ] ]
console.log(isiKotak(11))
// [ [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1 ],
//   [ 0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2 ],
//   [ 3, 4, 5, 6, 7, 8, 9, 0, 1, 0, 9 ],
//   [ 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4 ],
//   [ 5, 6, 7, 8, 9, 0, 1, 0, 9, 8, 7 ],
//   [ 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6 ],
//   [ 7, 8, 9, 0, 1, 0, 9, 8, 7, 6, 5 ],
//   [ 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8 ],
//   [ 9, 0, 1, 0, 9, 8, 7, 6, 5, 4, 3 ],
//   [ 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ],
//   [ 1, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1 ] ]
console.log(isiKotak(15))
// [ [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5 ],
//   [ 4, 3, 2, 1, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2 ],
//   [ 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 4, 3 ],
//   [ 2, 1, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4 ],
//   [ 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 4, 3, 2, 1 ],
//   [ 0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6 ],
//   [ 7, 8, 9, 0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, 9 ],
//   [ 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8 ],
//   [ 9, 0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, 9, 8, 7 ],
//   [ 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ],
//   [ 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, 9, 8, 7, 6, 5 ],
//   [ 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2 ],
//   [ 3, 4, 5, 4, 3, 2, 1, 0, 9, 8, 7, 6, 5, 4, 3 ],
//   [ 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4 ],
//   [ 5, 4, 3, 2, 1, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1 ] ]