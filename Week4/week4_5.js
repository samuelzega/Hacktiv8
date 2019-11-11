// var sentence = 'Ae quick brown fox jumps over the lazy dog.';

// var index = sentence.charCodeAt(0);

// console.log('The character code ' + sentence.charCodeAt(index) + ' is equal to ' + sentence.charAt(index));
// expected output: "The character code 113 is equal to q"
// console.log(index +' adalah ' + String.fromCharCode(index+1))

function ubahHuruf(kata) {
  var hasil = "";
  for (let i = 0; i < kata.length; i++) {
    var characterCode = kata.charCodeAt(i);
    if (characterCode != 122) {
      hasil += String.fromCharCode(characterCode + 1);
    } else {
      hasil += String.fromCharCode(97);
    }
  }
  return hasil;
}

// TEST CASES
console.log(ubahHuruf("wow")); // xpx
console.log(ubahHuruf("developer")); // efwfmpqfs
console.log(ubahHuruf("javascript")); // kbwbtdsjqu
console.log(ubahHuruf("keren")); // lfsfo
console.log(ubahHuruf("semangat")); // tfnbohbu1

//   var a = 'az'

//   console.log(a.charCodeAt(0));
