function angkaPalindrome(num) {
  var check = false;

  while (check === false) {
    num++;
    var palindrome = "";
    var stringNum = String(num);
    for (let i = stringNum.length - 1; i >= 0; i--) {
      palindrome += stringNum[i];
    }
    if (stringNum === palindrome) {
      check = true;
    }
  }

  return num;
}

// TEST CASES
console.log("samuel zega");
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
