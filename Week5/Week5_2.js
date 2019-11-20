function changeVocals (str) {
  let vokal =['a', 'i' , 'u', 'e', 'o', 'A', 'I', 'U', 'E', 'O']
  let hasil =''
  for (let i = 0; i < str.length; i++) {
      if (vokal.includes(str[i])) {
          hasil += String.fromCharCode(str.charCodeAt(i)+1)
      }else{
        hasil += str[i]
      }
  }
  return hasil
}

function reverseWord (str) {
  let reverse =''
  for (let i = str.length-1; i >= 0; i--) {
    reverse += str[i]
  }
  return reverse
}

function setLowerUpperCase (str) {
 let hasil =''
  for (const i in str) {
   if (str.charCodeAt(i)>64 && str.charCodeAt(i)<91) {
      hasil += String.fromCharCode(str.charCodeAt(i)+32)
  }else if (str.charCodeAt(i)>96 && str.charCodeAt(i)<123) {
      hasil += String.fromCharCode(str.charCodeAt(i)-32)
  }else{
    hasil += str[i]
  }
 }
 return hasil
}

function removeSpaces (str) {
  let hasil =''
  for (const i in str) {
    if (!(str[i] === ' ')) {
      hasil+= str[i]
    }
  }
  return hasil
}

function passwordGenerator (name) {

  if (name.length<=5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }

  var changedVocal = changeVocals(name)
  var reversedWord = reverseWord(changedVocal)
  var settedLowerUpperCase = setLowerUpperCase(reversedWord)
  var removedSpace = removeSpaces(settedLowerUpperCase)

  return removedSpace
  
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'