function groupAnimals(animals) {
  var newArr = [];
  for (let i = 0; i < animals.length; i++) {
    if (animals[i] != "") {
      var tempArr = [];
      tempArr.push(animals[i]);
      for (let j = i + 1; j < animals.length; j++) {
        if (animals[j] != "" && animals[i][0] === animals[j][0]) {
          tempArr.push(animals[j]);
          animals[j] = "";
        }
      }
      newArr.push(tempArr);
    }
  }

  console.log(newArr.sort());
}

// TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

