function mountainView(height, landscapeHeight, landscapeWidth) {
  // Insert your code here
  var left = height - 1
  var rigt = height - 1
  var temp = []
  for (let i = 0; i < landscapeHeight; i++) {
    var tempLagi = []
    for (let j = 0; j < landscapeWidth; j++) {
      tempLagi.push(' ')
    }
    temp.push(tempLagi)
  }
  temp[height - 1][height - 1] = 'X'
  for (let i = height; i < landscapeHeight; i++) {
    left -= 1
    rigt += 1
    temp[i][left] = 'X'
    temp[i][rigt] = 'X'
  }
  return temp
 }

 console.log(mountainView(4,7,7));
